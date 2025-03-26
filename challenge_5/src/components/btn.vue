<template>
    <div class="flex flex-row-reverse items-center justify-between">
        <button @click="$emit('next')" class="text-white bg-gray-900 p-3 w-52 rounded-lg">
            <span v-if="currentPage<3">Next Step</span>
            <span v-else @click="$emit('confirmed')">Confirm</span>
        </button>
        <button @click="$emit('previous')" class="text-gray-900 w-52 bg-white rounded-lg">
            Go Back
        </button>
    </div>
</template>
<script setup>
import { defineProps,computed } from 'vue';
const props = defineProps({
    currentPage: Number
});

</script>
