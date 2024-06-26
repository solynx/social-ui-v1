<template>
  <div class="flex flex-col justify-center items-center my-3">
    <div class="avatar">
      <div
        class="w-24 rounded-full ring ring-blue-500 ring-offset-base-100 ring-offset-2 ring-4"
      >
        <img class="rounded-full" src="/assets/img/logo.jpg" />
      </div>
    </div>
    <h3 class="mt-3">Hi</h3>
    <!-- <small>@retherer </small> -->
  </div>
</template>

<script setup lang="ts">
const props = defineProps(["user"]);
</script>

<style lang="scss" scoped></style>
