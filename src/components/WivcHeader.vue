<script setup>
import {useImage} from '../composeable/use-image';

const {image} = useImage();
</script>

<template>
  <div class="hero" :style="`background-image: url('${image('waupoos')}');`">
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
.hero {
  height: 100vh;
  max-height: 750px;
}
.title {
  color: white;
}
</style>