<template>
    <header class="flex items-center justify-between shadow-lg py-5 font-bold sm:px-20 px-10 bg-white dark:bg-gray-800 text-black dark:text-white transition-all">
        <div class="text-2xl">
            Where in the world?
        </div>
        <div class="flex gap-2 items-center cursor-pointer" @click="toggleDarkMode">
            <i :class="isDarkMode ? 'fa-solid fa-sun' : 'fa-solid fa-moon'"></i>
            <span>{{ isDarkMode ? "Light Mode" : "Dark Mode" }}</span>
        </div>
    </header>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue';
const isDarkMode = ref(localStorage.getItem("darkMode") === "true");
const toggleDarkMode = async () => {
    isDarkMode.value = !isDarkMode.value;
    localStorage.setItem("darkMode", isDarkMode.value);
    await nextTick();
    document.documentElement.classList.toggle("dark", isDarkMode.value);
    console.log("Dark mode:", isDarkMode.value); 
};

onMounted(() => {
    if (isDarkMode.value) {
        document.documentElement.classList.add("dark");
    }
});
</script>

<style scoped>
body {
    transition: background-color 0.9s ease-in-out, color 0.9s ease-in-out;
}
</style>
