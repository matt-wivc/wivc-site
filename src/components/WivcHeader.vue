<script setup>
import {ref, watchEffect} from 'vue';

const background = ref()
watchEffect(async () => {
  background.value = (await import(/* @vite-ignore */ `/waupoos.jpeg`)).default
})

</script>

<template>
  <div class="hero min-h-screen" :style="`background-image: url('${background}');`">
    <div class="hero-overlay bg-opacity-80"></div>
    <div class="hero-content text-center text-neutral-content">
      <div class="max-w-md">
        <h1 class="mb-5 text-5xl font-bold title">Waupoos Island View Cottages</h1>
        <p class="mb-5">Lakefront cottages, in Waupoos, off Smiths Bay.
          Enjoy your personal dock for leisure, swimming, fishing and more.
          End your evening with a campfire at your personal fire pit.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.title {
  color: white;
}
</style>