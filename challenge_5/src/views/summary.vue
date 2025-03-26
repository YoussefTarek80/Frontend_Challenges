<template>
    <div class="space-y-5 transition-all">
        <div class="space-y-5 transition-all">
            <div class="space-y-3">
                <div class="text-4xl font-bold">Finishing Up</div>
                <div class="font-medium text-gray-400">Double-check everything looks OK before confirming.</div>
            </div>
            <div class="p-4 border rounded-lg bg-gray-100">
                <div class="flex justify-between items-center">
                    <div>
                        <div class="font-bold text-lg">{{ props.all_information.plan.title }} ({{ props.all_information.billing }})</div>
                        <button @click="editPlan" class="text-blue-500 underline text-sm">Change</button>
                    </div>
                    <div class="font-bold">${{ planPrice }}/{{ billingCycle }}</div>
                </div>
            </div>
            <div class="p-4 border rounded-lg bg-gray-100" v-if="selectedServices.length">
                <div v-for="service in selectedServices" :key="service.id" class="flex justify-between">
                    <div class="text-gray-500">{{ service.title }}</div>
                    <div class="text-gray-900 font-medium">+${{ servicePrice(service.price) }}/{{ billingCycle }}</div>
                </div>
            </div>
            <div class="p-4 border-t flex justify-between items-center">
                <div class="text-gray-500">Total (per {{ billingCycle.toLowerCase() }})</div>
                <div class="text-xl font-bold text-blue-600">+${{ totalPrice }}/{{ billingCycle }}</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, ref, defineProps } from 'vue'
import iconPro from '../assets/assets/images/icon-pro.svg'
import iconArcade from '../assets/assets/images/icon-arcade.svg'
import iconAdvanced from '../assets/assets/images/icon-advanced.svg'

const props = defineProps(['all_information'])

const plans_methods = [
    { icon: iconArcade, title: 'Arcade Plan', price: 9 },
    { icon: iconAdvanced, title: 'Advanced Plan', price: 12 },
    { icon: iconPro, title: 'Pro Plan', price: 15 }
]

const selectedServices = ref([
    { id: 1, title: 'Online Services', price: 1 },
    { id: 2, title: 'Larger Storage', price: 2 }
])

const billingCycle = computed(() => props.all_information.billing === 'Yearly' ? 'yr' : 'mo')

const planPrice = computed(() => {
    return props.all_information.billing === 'Yearly' 
        ? props.all_information.plan.price * 10 
        : props.all_information.plan.price
})

const servicePrice = (price) => {
    return props.all_information.billing === 'Yearly' ? price * 10 : price
}

const totalPrice = computed(() => {
    let addonsTotal = selectedServices.value.reduce((sum, service) => sum + servicePrice(service.price), 0)
    return planPrice.value + addonsTotal
})

const selectPlan = (plan) => {
    props.all_information.plan = plan
}

const toggleBilling = () => {
    props.all_information.billing = props.all_information.billing === 'Monthly' ? 'Yearly' : 'Monthly'
}

const editPlan = () => {
    console.log("Edit plan clicked")
}
</script>
