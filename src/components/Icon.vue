<script setup>
import {defineProps} from 'vue';

const props = defineProps({
  icon: String
});
</script>

<template>
  <span class="material-symbols-rounded">
    <slot>{{ icon }}</slot>
  </span>
</template>