<script setup>
import {reactive} from 'vue';
import CottageListing from '../components/CottageListing.vue'

const state = reactive({
  cottages: []
});

const modules = import.meta.glob('../data/cottages/**', {
  import: 'default'
})
for (const path in modules) {
  modules[path]().then((mod) => {
    const name = path.replace(/(\.\.\/data\/cottages\/|\.js)/g, '')
    state.cottages.push({
      name,
      ...mod
    });
  });
}
</script>

<template>
  <cottage-listing
      v-for="(cottage, index) in state.cottages"
      :cottage="cottage"
      :key="cottage.name"
      :id="`section-${index}`"
    />
</template>