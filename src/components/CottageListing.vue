<script setup>
import { defineProps } from 'vue';
import Icon from './Icon.vue';

const props = defineProps({
  cottage: Object
});

const baseURL = import.meta.env.BASE_URL;
</script>

<template>
    <div class="container max-w-sm w-full sm:w-1/2 lg:w-1/3 py-6 px-3">
        <div class="bg-white shadow-xl rounded-lg overflow-hidden">
            <div class="bg-cover bg-center h-56 p-4" :style="`background-image: url('${baseURL}cards/${cottage.name}.png')`">
            </div>
            <div class="p-4">
                <p class="uppercase tracking-wide text-sm font-bold text-gray-700">{{ cottage.name }}</p>
                <p class="text-3xl text-gray-900">{{ cottage.price }} / night</p>
                <p class="text-gray-700">{{ cottage.address }}</p>
            </div>
            <div class="flex p-4 border-t border-gray-300 text-gray-700">
                <div class="flex-1 inline-flex items-center">
                    <icon>king_bed</icon>
                    <p><span class="text-gray-900 font-bold">{{ cottage.bedrooms }}</span> Bedrooms</p>
                </div>
                <div class="flex-1 inline-flex items-center">
                    <icon>bathtub</icon>
                    <p><span class="text-gray-900 font-bold">{{ cottage.bathrooms }}</span> Bathrooms</p>
                </div>
            </div>
            <div class="px-4 pt-3 pb-4 border-t border-gray-300 bg-gray-100">
                <div class="text-xs uppercase font-bold text-gray-600 tracking-wide">Contact Us</div>
                <div class="flex items-center pt-2">
                    <div>
                        <p class="font-bold text-gray-900">Waupoos Island View Cottages</p>
                        <p class="text-sm text-gray-700">(613) 890-3203</p>
                    </div>
                </div>
            </div>
            <div class="px-4 pt-3 pb-4 border-t border-gray-300 bg-gray-100">
                <div class="pt-2">
                    <a class="btn btn-block airbnb"
                        :href="cottage.airbnb"
                        target="_blank"
                    >AirBnB</a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    min-height: calc(100vh - 750px);
}
.airbnb {
  background-color: #fd5c63;
  color: white;
  border: none;
}
</style>