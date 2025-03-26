<template>
    <nav class="h-full sm:rounded-lg w-full">
        <ul class="w-full flex sm:flex-col gap-5">
            <li 
                class="flex items-center justify-start gap-3"
                v-for="page in pages"
                :key="page.id"
            >
                <div 
                    class="border-2 border-white text-white rounded-full sm:w-10 sm:h-10 w-8 h-8 flex items-center justify-center text-lg"
                    :class="{ 'bg-white text-black': activePage === page.id-1 }"
                >
                    {{ page.id }}
                </div>
                <div class="sm:flex sm:flex-col hidden ">
                    <span class="text-gray-400 text-sm">Step {{ page.id }}</span>
                    <span class="text-white font-bold">{{ page.name.toUpperCase() }}</span>
                </div>
            </li>
        </ul>
    </nav>
</template>

<script setup>
import { defineProps,computed } from 'vue';

const props = defineProps({
    activePage: Number
});

const pages = [
    { id: 1, name: "your info" },
    { id: 2, name: "select plan" },
    { id: 3, name: "add-ons" },
    { id: 4, name: "summary" }
];
</script>

<style scoped>
nav {
    background: url('../assets/assets/images/bg-sidebar-desktop.svg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}
@media (max-width:1000px) {
    nav {
        background: url('../assets/assets/images/bg-sidebar-mobile.svg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        height: 23vh;
    }   
}
</style>
