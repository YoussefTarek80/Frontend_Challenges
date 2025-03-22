<template>
    <div class="bg-gray-100 dark:bg-gray-900 text-black dark:text-white min-h-screen">
        <NavbarView />
        <router-view />
    </div>
</template>

<script setup>
import NavbarView from './components/NavbarView.vue'
</script>