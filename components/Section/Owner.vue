<template>
  <div class="flex flex-col justify-center items-center my-3" v-if="user?.name">
    <div class="avatar">
      <div
        class="w-24 rounded-full ring ring-blue-500 ring-offset-base-100 ring-offset-2 ring-4"
      >
        <img class="rounded-full" :src="user?.avatar || ''" />
      </div>
    </div>
    <h3 class="mt-3">{{ user?.name }}</h3>
    <div>
      <NButton
        class="mt-3"
        type="info"
        @click="showModal.createPost = !showModal.createPost"
        >Thêm bài viết</NButton
      >
      <n-modal v-model:show="showModal.createPost" transform-origin="center">
        <n-card
          style="width: 600px"
          title="Thêm bài viết"
          :bordered="false"
          size="huge"
          role="dialog"
          aria-modal="true"
        >
          <template #header-extra>
            <NIcon size="18">
              <PencilOutline />
            </NIcon>
          </template>
          <NForm>
            <NFormItem label="Nội dung bài viết">
              <n-input type="textarea" placeholder="Nội dung bài viết" />
            </NFormItem>
            <NFormItem label="Chọn ảnh">
              <n-upload
                :default-file-list="previewFileList"
                list-type="image-card"
                @preview="handlePreview"
                @before-upload="handleGetImage"
              />
            </NFormItem>
          </NForm>
          <template #footer>
            <NButton type="info" @click="handleCreatePost">Đăng tải</NButton>
          </template>
        </n-card>
      </n-modal>
    </div>
    <n-modal
      v-model:show="showModal.previewImage"
      preset="card"
      style="width: 600px"
      title="A Cool Picture"
    >
      <img :src="previewImageUrl" style="width: 100%" />
    </n-modal>
  </div>
</template>

<script setup lang="ts">
import { PencilOutline } from "@vicons/ionicons5";
import { findProgramAddressSync } from "@project-serum/anchor/dist/cjs/utils/pubkey";
import { onMounted } from "vue";
import { utf8 } from "@project-serum/anchor/dist/cjs/utils/bytes";
import { useAnchorWallet, useWallet } from "solana-wallets-vue";
import { type UploadFileInfo, useMessage } from "naive-ui";
import { SystemProgram } from "@solana/web3.js";
const { wallet, connection, provider, program } = useWorkspace();
const user = useState("user");
const showModal = reactive({ createPost: false, previewImage: false });
const previewImageUrl = ref("");
const previewFileList = ref<UploadFileInfo[]>([]);
const fileUploads = ref<File[]>([]);
const accountState = useState("user");
const handlePreview = (file: UploadFileInfo) => {
  const { url } = file;
  previewImageUrl.value = url as string;
  showModal.previewImage = true;
};

const handleGetImage = (data: { file: UploadFileInfo }) => {
  fileUploads.value.push(data?.file);
};

const handleCreatePost = async () => {
  const [postPda] = await findProgramAddressSync(
    [
      utf8.encode("post"),
      wallet.value?.publicKey.toBuffer(),
      Uint32Array.from([accountState.value.postId]),
    ],
    program.value.programId
  );
  const [userPda] = await findProgramAddressSync(
    [utf8.encode("user"), wallet.value?.publicKey.toBuffer()],
    program.value.programId
  );
  const tx = await program.value.methods
    .createPost("Content 1222", ["alo222"])
    .accounts({
      postAccount: postPda,
      userAccount: userPda,
      authority: wallet.value?.publicKey,
      systemProgram: SystemProgram.programId,
    })
    .rpc();
  console.log(tx);
};
</script>

<style lang="scss" scoped></style>
