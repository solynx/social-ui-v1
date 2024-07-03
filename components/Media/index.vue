<template>
  <section class="text-sm font-medium text-gray-700 shadow-md p-1 rounded">
    <div class="m-3 flex gap-x-4">

        <MediaItem @click="modal.showViewMedia = true"/>
        <MediaItem />
        <MediaItem />
        <MediaItem />
        <MediaItem />

      <div
        class="w-36 h-60 flex items-center justify-center bg-indigo-200 rounded hover:opacity-80 cursor-pointer"
        @click="modal.showCreateMediaModal = true"
      >
        <NIcon size="24">
          <AddCircle />
        </NIcon>
      </div>
    </div>
    <n-modal v-model:show="modal.showCreateMediaModal">
    <n-card
      style="width: 1280px"
      title="Tạo nội dung ngắn"
      :bordered="false"
      size="huge"
      role="dialog"
      aria-modal="true"
    >
        <n-tabs type="segment" animated>
          <n-tab-pane name="oasis" tab="Hình ảnh">
            <Cropper :imgCrop="imageCrop"/>
          </n-tab-pane>
          <n-tab-pane name="the beatles" tab="Nội dung">
            <n-space vertical>
              <form>
                <label for="chat" class="sr-only">Your message</label>
                <n-input
                  v-model:value="data.content"
                  type="textarea"

                  placeholder="Nhập nội dung bài viết"
                />
            </form>

            </n-space>
          </n-tab-pane>
        </n-tabs>
      <template #footer>
        <NButton type="info" @click="handleCreateMoment">Tạo khoảnh khắc</NButton>
      </template>
    </n-card>
    </n-modal>

    <n-modal v-model:show="modal.showViewMedia">
    <n-card
      style="width: 600px"
      title="Modal"
      :bordered="false"
      size="huge"
      role="dialog"
      aria-modal="true"
    >
      <template #header-extra>
        Oops!
      </template>
      Content
      <template #footer>
        Footer
      </template>
    </n-card>
  </n-modal>
  </section>
</template>

<script setup lang="ts">
import { NIcon, NImageGroup } from "naive-ui";
import { AddCircle } from "@vicons/ionicons5";

const modal = reactive({
  showCreateMediaModal:false,
  showViewMedia : false
})

const imageCrop = reactive({
  value: ''
})
const imageUrl =ref("")
const data = reactive({
  content: "",
  imageUrl: ""
})
const handleCreateMoment =async () => {
  const  presignedUrl  = await $fetch("/api/s3", {
    method: "POST",
    body: { type: "image/png" },
  });
  imageCrop.value.toBlob(async (blob) => {
    const response =  await $fetch(presignedUrl.url, {
    method: "PUT",
    body: blob ,
    headers: {
      "Content-Type": "image/png",
      "Content-Encoding": "blob",
    },
    });
    console.log(re)
  }, "image/png")
  return;
  const { data } = await $fetch("/api/s3", {
    method: "POST",
    body: { type: accountInfo.avatar?.type },
  });
  if (!data.value?.url) {
    return message.error("Connection storage failed");
  }
  const response = await $fetch(data.value?.url, {
    method: "PUT",
    body: accountInfo.avatar as File,
    headers: {
      "Content-Type": accountInfo.value?.avatar?.type,
      "Content-Encoding": "blob",
    },
  });
}
</script>

<style lang="scss" scoped></style>
