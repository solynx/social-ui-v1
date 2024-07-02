<template>
  <Header />
  <div class="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
    <Sidebar />
    <div class="lg:col-span-2">
      <Media />
      <Post />
    </div>
    <RightBar />
  </div>
  <n-modal
    v-model:show="accountRef.isNewAccount"
    preset="dialog"
    title="Chào mừng"
    content="Đây là lần đầu bạn đăng nhập, tạo thông tin đăng nhập?"
    positive-text="Tạo thông tin"
    @positive-click="accountRef.showCreateInfo = !accountRef.showCreateInfo"
  />
  <n-modal v-model:show="accountRef.showCreateInfo">
    <n-card
      style="width: 720px"
      title="Tạo thông tin đăng nhập"
      :bordered="false"
      size="huge"
      role="dialog"
      aria-modal="true"
    >
      <template #header-extra>
        <NIcon size="18">
          <PencilIcon />
        </NIcon>
      </template>
      <NForm>
        <n-form-item label="Tên đăng nhập">
          <n-input
            default-value="🤡"
            show-count
            v-model:value="accountInfo.name"
            :maxlength="20"
            placeholder="Vui lòng nhập tên"
          />
        </n-form-item>
        <n-form-item label="Chọn ảnh đại diện">
          <n-upload
            :default-file-list="previewFileList"
            list-type="image-card"
            :max="1"
            @before-upload="handleGetImage"
          />
        </n-form-item>
      </NForm>
      <template #footer>
        <NButton type="info" @click="handleCreateAccount"
          >Tạo thông tin</NButton
        >
      </template>
    </n-card>
  </n-modal>
</template>

<script lang="ts" setup>
const nuxtApp = useNuxtApp();
import { PencilOutline as PencilIcon } from "@vicons/ionicons5";
import { findProgramAddressSync } from "@project-serum/anchor/dist/cjs/utils/pubkey";
import { onMounted } from "vue";
import { utf8 } from "@project-serum/anchor/dist/cjs/utils/bytes";
import { useAnchorWallet, useWallet } from "solana-wallets-vue";
import { type UploadFileInfo, useMessage } from "naive-ui";
const { wallet, connection, provider, program } = useWorkspace();
const accountRef = ref({ isNewAccount: false, showCreateInfo: false });
const accountInfo = reactive({ name: "", avatar: "", postId: 0 });
const accountState = useState("user", () => accountInfo);
const fileUpdate = ref({ listImage: {} });
import { SystemProgram } from "@solana/web3.js";
import { web3 } from "@project-serum/anchor";
watch(wallet, (address) => {
  if (!address) {
    accountState.value = null;
    message.success("Bye!");
  }
  start();
});
watch(accountInfo, (value) => {
  accountState.value = value;
  if (value?.name) {
    message.info(`Hi ${value.name}`);
  }
});
const message = useMessage();
const previewFileList = ref<UploadFileInfo[]>([]);
const start = async () => {
  if (wallet.value && program) {
    try {
      const [userPda] = await findProgramAddressSync(
        [utf8.encode("user"), wallet.value.publicKey.toBuffer()],
        program.value.programId
      );
      const user = await program.value.account.user.fetch(userPda);
      if (user) {
        console.log(user);
        accountInfo.avatar = user?.avatar;
        accountInfo.name = user?.name;
        accountInfo.postId = user?.lastPostId;
        accountState.value = accountInfo;
      }
    } catch (err) {
      accountRef.value.isNewAccount = true;
    }
  }
};

const handleCreateAccount = async () => {
  if (!accountInfo.name && !accountInfo.value?.avatar) {
    return message.warning("Vui lòng điền đầy đủ thông tin");
  }
  const { data } = await useFetch("/api/s3", {
    method: "POST",
    body: { type: accountInfo.avatar?.type },
  });
  if (!data.value?.url) {
    return message.error("Connection storage failed");
  }
  const response = await useFetch(data.value?.url, {
    method: "PUT",
    body: accountInfo.avatar as File,
    headers: {
      "Content-Type": accountInfo.value?.avatar?.type,
      "Content-Encoding": "blob",
    },
  });

  const [userPda, _] = await findProgramAddressSync(
    [utf8.encode("user"), wallet.value?.publicKey.toBuffer()],
    program.value.programId
  );

  const tx = await program.value.methods
    .createUser(accountInfo.name, data.value?.fileUrl || "No image")
    .accounts({
      userAccount: userPda,
      authority: wallet.value?.publicKey,
      systemProgram: web3.SystemProgram.programId,
    })
    .rpc();
  if (tx) {
    accountInfo.avatar = data.value?.fileUrl;
  }
};
const handleGetImage = (data: { file: UploadFileInfo }) => {
  const fileType = data.file.file?.type;
  if (!fileType.startsWith("image/")) {
    message.warning("File tải lên phải là ảnh");
    return false;
  }
  accountInfo.avatar = data.file.file;
};
nuxtApp.hook("page:loading:end", () => {});
</script>

<style>
body {
  width: 100%;
}
</style>
