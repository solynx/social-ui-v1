<template>
  <div class="mx-3 my-6 shadow-md">
    <div class="m-3">
      <div class="flex justify-between">
        <div class="flex items-center">
          <img
            :src="data.account?.createrImage"
            class="w-12 h-12 rounded"
          />
          <span class="mx-2">
            <p>{{ data.account?.createrName }}</p>
            <i><small>21 minutes ago</small></i>
          </span>
        </div>
        <div>
          <NIcon size="24">
            <EllipsisHorizontal />
          </NIcon>
        </div>
      </div>
      <div class="my-3">
        <div class="container w-full py-2">
          <ClientOnly>
            <NImageGroup>
              <n-grid x-gap="12" :cols="3" >
                <n-gi v-for="image in data.account?.images">
                  <NImage
                    class="carousel-img rounded"
                    :src="image"
                  />
                </n-gi>
              </n-grid>
            </NImageGroup>
          </ClientOnly>
        </div>

        <p class="mt-3">{{data?.account.content}}</p>
        <hr class="my-3" />
      </div>
      <div class="flex py-3 justify-between">
        <ul class="flex gap-4 align-center">
          <li class="flex align-center gap-1">
            <NIcon size="24" class="cursor-pointer">
              <HeartIcon
                v-if="!icon.actived"
                @click="icon.actived = !icon.actived"
              />
              <HeartActiveIcon
                class="text-red-500"
                v-else
                @click="icon.actived = !icon.actived"
              />
            </NIcon>
            123 Likes
          </li>
          <li class="flex align-center gap-1">
            <NIcon
              name="icon-park-solid:comment"
              size="24"
              class="cursor-pointer"
              @click="modal.showComment = !modal.showComment"
            >
              <CommentIcon />
            </NIcon>
            <p>123 Comments</p>
          </li>

          <li class="flex align-center gap-1">
            <NIcon
              name="icon-park-solid:comment"
              size="24"
              class="cursor-pointer"
            >
              <CashIcon />
            </NIcon>
            <p>123 Tips</p>
          </li>

          <li class="flex align-center gap-1">
            <NIcon
              name="icon-park-solid:comment"
              size="24"
              class="cursor-pointer"
            >
              <ShareIcon />
            </NIcon>
            <p>123 Share</p>
          </li>
        </ul>
        <ul class="flex gap-4">
          <li>
            <button
              type="button"
              class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
            >
              Tip
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  NImageGroup,
  NImage,
  NCarousel,
  NCarouselItem,
  NGrid,
  NGi,
} from "naive-ui";
const props = defineProps(["data"]);
import {
  EllipsisHorizontal,
  Heart as HeartActiveIcon,
  HeartOutline as HeartIcon,
  ChatbubblesOutline as CommentIcon,
  ShareSocialOutline as ShareIcon,
  CashOutline as CashIcon,
} from "@vicons/ionicons5";

const icon = reactive({
  actived: false,
});

const modal = reactive({
  showComment: false,
});
</script>

<style scoped>
.carousel-img {
  width: 100%;
  height: 240px;
  object-fit: cover;
}
</style>
