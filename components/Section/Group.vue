<template>
  <div class="mt-3">
    <h3>Groups</h3>
    <div class="grid grid-cols gap-5 mt-3 shadow-md rounded p-3">
      <Avatar />
      <Avatar />
      <Avatar />
      <a href="#" class="text-center hover:text-gray-500"
        ><NIcon size="24"><EllipsisHorizontal /></NIcon>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { NIcon } from "naive-ui";
import { EllipsisHorizontal } from "@vicons/ionicons5";
</script>

<style lang="scss" scoped></style>
