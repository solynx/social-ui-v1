<template>
  <section class="text-sm font-medium text-gray-700" v-for="post in listPost">
    <PostItem :data="post"/>
  </section>
</template>

<script setup lang="ts">
const props = defineProps(["posts"]);
const listPost = useState("posts")
</script>

<style lang="scss" scoped></style>
