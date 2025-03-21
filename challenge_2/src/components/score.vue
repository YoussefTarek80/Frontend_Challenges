<template>
    <div class="border-2 border-gray-500 flex items-center justify-between sm:w-5/12 w-full p-5 rounded-xl">
        <div class="font-bold text-white text-4xl">
            <span>ROCK</span>
            <span>PAPER</span>
            <span>SCISSORS</span>
        </div>
        <div class="bg-white rounded-xl px-10 py-4 flex items-center justify-center flex-col">
            <span class="text-[rgb(57,66,181)] font-bold text-xl">SCORE</span>
            <span class="text-[rgb(59,65,99)] text-6xl font-bold  ">{{score}}</span>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
const props = defineProps(['score'])


</script>
<style scoped>
span{
    display: block;
}
</style>