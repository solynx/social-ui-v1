<template>
  <div class="mx-3 my-6 shadow-md">
    <div class="m-3">
      <div class="flex justify-between">
        <div class="flex items-center">
          <img
            src="https://randomuser.me/api/portraits/men/86.jpg"
            class="w-12 h-12 rounded"
          />
          <span class="mx-2">
            <p>John Doe</p>
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
            <n-grid x-gap="12" :cols="3">
              <n-gi>
                <NImage
                  class="carousel-img rounded"
                  src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
                />
              </n-gi>
              <n-gi>
                <NImage
                  class="carousel-img rounded"
                  src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
                />
              </n-gi>
              <n-gi>
                <NImage
                  class="carousel-img rounded"
                  src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
                />
              </n-gi>
              <n-gi>
                <NImage
                  class="carousel-img rounded"
                  src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
                />
              </n-gi>
          </n-grid>
          </NImageGroup>
          </ClientOnly>
        </div>

        <p class="mt-3">CONTENT</p>
        <hr class="my-3" />
      </div>
      <div class="flex py-3 justify-between">
        <ul class="flex gap-4 align-center">
          <li class="flex align-center gap-1">
            <NIcon size="24">
              <Fitness />
            </NIcon>
            123 Likes
          </li>
          <li class="flex align-center gap-1">
            <NIcon name="icon-park-solid:comment" size="24">
              <ChatbubblesSharp />
            </NIcon>
            <p>123 Comments</p>
          </li>

          <li class="flex align-center gap-1">
            <NIcon name="icon-park-solid:comment" size="24">
              <Fitness />
            </NIcon>
            <p>123 Tips</p>
          </li>

          <li class="flex align-center gap-1">
            <NIcon name="icon-park-solid:comment" size="24">
              <ShareSocial />
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
import {NImageGroup, NImage, NCarousel, NCarouselItem, NGrid, NGi } from 'naive-ui'
const props = defineProps(["data"]);
import {
  EllipsisHorizontal,
  Heart,
  ChatbubblesSharp,
  Fitness,
  HeartCircleSharp,
  ShareSocial,
} from "@vicons/ionicons5";
</script>

<style scoped>
.carousel-img {
  width: 100%;
  height: 240px;
  object-fit: cover;
}
</style>

