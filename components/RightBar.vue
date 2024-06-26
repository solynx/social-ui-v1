<template>
  <div class="mx-3 text-sm font-medium text-gray-700">
    <SectionOwner />
    <!-- <div class="rounded shadow-md p-3">
      <div class="text-center">
        <slot />
      </div>
    </div> -->
    <div class="rounded mt-3">
      <SectionFriend />
      <SectionGroup />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(["user"]);
</script>

<style lang="scss" scoped></style>
