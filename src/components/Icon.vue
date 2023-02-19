<script setup>
import {defineProps} from 'vue';

const props = defineProps({
  icon: String
});

/*
 * Availiable Icons
 *
 * https://fonts.google.com/icons?icon.style=Rounded
*/ 
</script>

<template>
  <span class="material-symbols-rounded">
    <slot>{{ icon }}</slot>
  </span>
</template>