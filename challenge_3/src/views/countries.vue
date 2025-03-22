<template>
    <section class="m-20">
        <Search :countries="data" @filterCountries="updateFilteredCountries" />
        <section class="cards grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 gap-10 items-center mt-10">
        <div
            class="card w-full h-auto bg-white dark:bg-gray-800 rounded-lg shadow-2xl cursor-pointer hover:rotate-2 transition-all"
            @click="selectedCountry(country.numericCode)"
            v-for="country in filteredData"
            :key="country.numericCode"
        >
            <img :src="country.flags.png" alt="Flag" class="w-full h-40 object-cover rounded-t-lg" />
            <div class="p-7 text-black dark:text-white">
            <div class="font-bold text-lg mb-2">{{ country.name }}</div>
            <div class="text-sm space-y-1">
                <div><span class="font-semibold">Population: </span>{{ country.population }}</div>
                <div><span class="font-semibold">Region: </span>{{ country.region }}</div>
                <div><span class="font-semibold">Capital: </span>{{ country.capital }}</div>
            </div>
            </div>
        </div>
        </section>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Search from '../components/Search.vue';
import data from '../../data.json';

const router = useRouter(); 
const filteredData = ref(data);

const updateFilteredCountries = (filtered) => {
  filteredData.value = filtered;
};

const selectedCountry = (id) => {
  router.push(`/country/${id}`); 
  console.log(id);
};
</script>
