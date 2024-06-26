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
          <div class="m-1 flex flex-wrap md:-m-2">
            <div class="flex w-1/2 flex-wrap">
              <div class="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"
                />
              </div>
              <div class="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"
                />
              </div>
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                />
              </div>
            </div>
            <div class="flex w-1/2 flex-wrap">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"
                />
              </div>
              <div class="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"
                />
              </div>
              <div class="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp"
                />
              </div>
            </div>
          </div>
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

<style lang="scss" scoped></style>
