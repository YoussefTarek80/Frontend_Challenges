<template>
    <div class="space-y-5 transition-all">
        <div class="space-y-3">
            <div class="text-4xl font-bold">Select Your Plan</div>
            <div class="font-medium text-gray-400">You have the option of monthly or yearly billing</div>
        </div>
        <div class="plans_methods space-y-3 flex flex-wrap items-center justify-around sm:gap-5">
            <div 
                v-for="plan in plans_methods" 
                :key="plan.title" 
                @click="selectPlan(plan)"
                class="flex flex-col cursor-pointer gap-4 sm:h-40 sm:w-52 w-full transition-all justify-between p-5 border rounded-lg"
                :class="{ 'border-gray-900 bg-gray-200': props.all_information.plan.title === plan.title, 'hover:border-gray-900 hover:bg-gray-200': props.all_information.plan !== plan.title }"
            >
                <img :src="plan.icon" alt="Plan Icon" class="w-10 h-10">
                <div>
                    <div class="font-bold">{{ plan.title }}</div>
                    <div class="text-gray-500">${{ plan.price }}/<span>{{ props.all_information.billing }}</span></div>
                    <div class="MT-1" v-if="props.all_information.billing==='Yearly'">
                        2 Months free
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-wrap justify-center gap-5 bg-gray-100 p-4 rounded-lg">
            <span :class="{ 'text-gray-900 font-bold': props.all_information.billing === 'Monthly' }">Monthly</span>
            <div 
                @click="toggleBilling" 
                class="w-14 h-7 flex items-center bg-gray-900 rounded-full p-1 cursor-pointer transition-all"
                :class="{ 'bg-gray-900': props.all_information.billing === 'Yearly' }"
            >
                <div 
                    class="w-5 h-5 bg-white rounded-full shadow-md transition-all"
                    :class="{ 'translate-x-7': props.all_information.billing === 'Yearly' }"
                ></div>
            </div>
            <span :class="{ 'text-gray-900 font-bold': props.all_information.billing === 'Yearly' }">Yearly</span>
        </div>
    </div>
</template>

<script setup>
import { ref, defineProps } from 'vue'
import iconPro from '../assets/assets/images/icon-pro.svg'
import iconArcade from '../assets/assets/images/icon-arcade.svg'
import iconAdvanced from '../assets/assets/images/icon-advanced.svg'

const props = defineProps(['all_information'])

const plans_methods = [
    { icon: iconArcade, title: 'Arcade Plan', price: 9 },
    { icon: iconAdvanced, title: 'Advanced Plan', price: 12 },
    { icon: iconPro, title: 'Pro Plan', price: 15 }
]

const selectedBilling = ref('Monthly') 

const selectPlan = (plan) => {
    props.all_information.plan = plan
}

const toggleBilling = () => {
    selectedBilling.value = selectedBilling.value === 'Monthly' ? 'Yearly' : 'Monthly'
    props.all_information.billing = selectedBilling.value
}
</script>
