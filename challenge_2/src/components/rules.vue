<template>
    <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
        <div class="rounded-xl p-10 bg-white w-96 h-96 relative m-5">
            <div class="flex items-center justify-between">
                <span class="text-2xl">RULES</span>
                <button @click="$emit('closeRules')" class="cursor-pointer text-2xl font-bold">
                    <img src="../assets/images/icon-close.svg" alt="">
                </button>
            </div>
            <div class="flex items-center justify-center my-5">
                <img src="../assets/images/image-rules.svg" alt="Rules" />
            </div>
        </div>
    </div>
</template>

<script setup>
defineEmits(['closeRules']);
</script>
