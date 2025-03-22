<template>
    <section class="my-10 px-6 relative">
        <button 
            @click="router.push('/')" 
            class="px-5 py-2 mx-20 rounded-lg shadow-md text-lg  my-10
                bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-white 
                hover:bg-gray-300 dark:hover:bg-gray-700 transition duration-200"
        >
            Back
        </button>
        <div class="flex flex-wrap items-center justify-center gap-10 lg:gap-20" v-if="country">
            
            <div class="w-full sm:w-8/12 md:w-5/12 lg:w-4/12">
                <img :src="country.flags.png" alt="Flag" class="w-full rounded-lg shadow-md" />
            </div>
            <div class="flex flex-col gap-8 w-full md:w-6/12">
                <div class="text-3xl md:text-4xl font-bold">{{ country.name }}</div>

                <div class="grid sm:grid-cols-2 grid-cols-1 gap-5">
                    <div>
                        <div><strong class="mr-2">Native Name:</strong> {{ country.nativeName }}</div>
                        <div><strong class="mr-2">Population:</strong> {{ country.population }}</div>
                        <div><strong class="mr-2">Region:</strong> {{ country.region }}</div>
                        <div><strong class="mr-2">Subregion:</strong> {{ country.subregion }}</div>
                        <div><strong class="mr-2">Capital:</strong> {{ country.capital }}</div>
                    </div>
                    <div>
                        <div><strong class="mr-2">Top Level Domain:</strong> {{ country.topLevelDomain?.[0] }}</div>
                        <div>
                            <strong class="mr-2">Currencies:</strong>
                            <span v-for="cur in country.currencies" :key="cur.code">{{ cur.code }} </span>
                        </div>
                        <div>
                            <strong class="mr-2">Languages:</strong>
                            <span v-for="lang in country.languages" :key="lang.iso639_1">{{ lang.nativeName }} </span>
                        </div>
                    </div>
                </div>

                <div>
                    <strong class="text-lg">Border Countries:</strong>
                    <div class="flex flex-wrap gap-2 mt-2">
                        <span 
                            v-for="b in country.borders" 
                            :key="b"
                            class="px-3 py-1 rounded-lg shadow-sm text-sm 
                                         bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-white"
                        > 
                            {{ b }}  
                        </span>
                    </div>
                </div>
            </div>
        </div>
        
        <div v-else class="text-center text-xl font-bold mt-10">Country not found</div>
    </section>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import data from '../../data.json';
import { useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();
const countryId = route.params.id;

const country = computed(() => {
    return data.find((item) => item.numericCode === countryId);
});

console.log(country.value);
</script>
