<template>
    <section class="flex flex-wrap gap-3 items-center justify-between">
        <div class="lg:w-5/12 w-full md:w-5/12 relative">
            <input 
                v-model="searchTerm"
                type="text" 
                placeholder="Search for a country..." 
                class="shadow-xl px-12 py-3 w-full rounded-lg bg-white text-black dark:bg-gray-800 dark:text-white"
                @input="filterCountries"
            >
            <i class="fa-solid fa-magnifying-glass absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-300"></i>
        </div>

        <div class="lg:w-2/12 w-full md:w-5/12">
            <select 
                v-model="selectedRegion" 
                class="shadow-xl px-10 py-3 w-full rounded-lg bg-white text-black dark:bg-gray-800 dark:text-white" 
                @change="filterCountries"
            >
                <option value="" selected disabled>Filter by Region</option>
                <option v-for="region in regions" :key="region" :value="region">
                    {{ region }}
                </option>
            </select>
        </div>
    </section>
</template>

<script setup>
import { ref, computed, defineProps, defineEmits } from 'vue';

const props = defineProps(['countries']);
const emit = defineEmits(['filterCountries']);

const searchTerm = ref('');
const selectedRegion = ref('');

const regions = computed(() => {
    return [...new Set(props.countries.map(country => country.region))];
});

const filterCountries = () => {
    const filtered = props.countries.filter(country => {
        const matchesRegion = selectedRegion.value ? country.region === selectedRegion.value : true;
        const matchesSearch = searchTerm.value
            ? country.name.toLowerCase().includes(searchTerm.value.toLowerCase())
            : true;
        return matchesRegion && matchesSearch;
    });

    emit('filterCountries', filtered);
};
</script>

<style scoped>
input::placeholder {
    color: #a0a0a0; 
    font-size: 14px;
}
</style>
