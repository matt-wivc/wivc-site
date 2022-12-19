<script setup>
  import WivcHeader from './components/WivcHeader.vue';
</script>

<template>
  <wivc-header/>
  <main class="antialiased bg-gray-200 font-sans main">
    <router-view></router-view>
  </main>
</template>

<style>
  html {
    scroll-behavior: smooth;
  }

  .main {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
</style>