<template>
  <div>
    <h3>Friends</h3>
    <div class="grid grid-cols gap-5 mt-3 shadow-md rounded p-3">
      <Avatar />
      <Avatar />
      <Avatar />
      <a href="#" class="text-center hover:text-gray-500">
        <NIcon name="material-symbols:read-more" size="24"
          ><EllipsisHorizontal /></NIcon
      ></a>
    </div>
  </div>
</template>

<script setup>
import { NIcon } from "naive-ui";
import { EllipsisHorizontal } from "@vicons/ionicons5";
</script>

<style lang="scss" scoped></style>
