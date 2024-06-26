<template>
  <section class="text-sm font-medium text-gray-700 shadow-md p-1 rounded">
    <div class="m-3 flex gap-x-4">
      <MediaItem />
      <MediaItem />
      <MediaItem />
      <div
        class="w-36 h-60 flex items-center justify-center bg-indigo-200 rounded"
      >
        <NIcon size="24">
          <AddCircle />
        </NIcon>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { NIcon } from "naive-ui";
import { AddCircle } from "@vicons/ionicons5";
</script>

<style lang="scss" scoped></style>
