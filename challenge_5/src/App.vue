<template>
    <div class="flex items-center justify-center sm:min-h-screen bg-gray-100">
        <div class="grid sm:grid-cols-4 grid-cols-1 sm:w-3/4   sm:h-[80vh] shadow-lg rounded-lg bg-white">
            <aside 
                class="fixed top-0 right-0 w-full h-full bg-white sm:relative  sm:p-4 sm:rounded-l-lg text-white transition-all"
            >
                <SideBar class="p-10" :activePage="currentPage" />
            </aside>
            <main class="col-span-3 sm:p-10 sm:m-0 m-5 h-full bg-white rounded-xl  flex flex-col z-10 mt-24 sm:mt-0 ">
                <div class="flex-grow sm:p-5 sm:m-0 rounded-xl h-full  ">
                    <component 
                        :is="currentPageComponent"  
                        class="sm:px-0 sm:py-0 px-5 py-10 h-full"
                        :all_information="all_information" 
                    />
                </div>
                <div class="mt-auto" v-if="!showThankYou">
                    <btns @next="nextPage" @previous="prevPage" :currentPage="currentPage" @confirmed="showThanks" />
                </div>
            </main>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import SideBar from './components/sideBar.vue'
import btns from './components/btn.vue'

import YourInfo from './views/info.vue'
import SelectPlan from './views/plans.vue'
import AddOns from './views/ons.vue'
import Summary from './views/summary.vue'
import Thanks from './views/thankyou.vue'

const pages = [YourInfo, SelectPlan, AddOns, Summary]
const currentPage = ref(0)
const showThankYou = ref(false)

const all_information =ref({
    name: '',
    email: '',
    phone: '',
    plan:'',
    billing:'Monthly',
    services:[]
})
const currentPageComponent = computed(() => {
    return showThankYou.value ? Thanks : pages[currentPage.value]
})

const nextPage = () => {
    if (currentPage.value < pages.length - 1) {
        currentPage.value++
    }
}

const prevPage = () => {
    if (currentPage.value > 0) {
        currentPage.value--
    }
}

const showThanks = () => {
    showThankYou.value = true
}
</script>

