<template>
  <Header />
  <div class="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
    <Sidebar />
    <div class="lg:col-span-2">
      <Media />
      <Post />
    </div>
    <RightBar />
  </div>
</template>

<script lang="ts" setup></script>
<style>
  body {
    width: 100%;
  }
</style>