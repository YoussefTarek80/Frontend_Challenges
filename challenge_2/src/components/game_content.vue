<template>
    <section class="flex flex-wrap gap-5 sm:w-5/12 w-full my-6 items-center justify-center relative">
        <div class="absolute"> <img src="../assets/images/bg-triangle.svg" alt=""></div>
        <div 
            v-for="item in list" 
            :key="item.id" 
            class="flex items-center justify-center flex-wrap"
        > 
            <div 
                class="cursor-pointer p-8 rounded-full relative shadow-[inset_0_-10px_0px_rgba(0,0,0,0.3)]"
                :class="item.gradient"
                @click="userSelect(item)"
            >
                <img 
                    :src="item.img" 
                    :alt="item.name" 
                    class="bg-white rounded-full w-40 h-40 p-10 object-contain shadow-[inset_0_10px_0px_rgba(0,0,0,0.1)]"
                >
            </div>
        </div>
    </section>
</template>

<script setup>
import { computed, inject } from 'vue';

const list = inject('list');

const emit = defineEmits(['selectedUser','selectedComputer']);

const userSelect = (item) => {
    console.log("User selected:", item);
    emit('selectedUser', item); 
};

</script>
