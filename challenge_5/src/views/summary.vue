<template>
    <div class="space-y-5 transition-all">
        <div class="space-y-3">
            <div class="text-4xl font-bold">Finishing Up</div>
            <div class="font-medium text-gray-400">Double-check everything looks OK before confirming.</div>
        </div>
        <div class="p-4 border rounded-lg bg-gray-100">
            <div class="flex justify-between items-center">
                <div>
                    <div class="font-bold text-lg">{{ selectedPlan.title }} ({{ billingCycle }})</div>
                    <button @click="editPlan" class="text-blue-500 underline text-sm">Change</button>
                </div>
                <div class="font-bold">${{ selectedPlan.price }}/{{ billingCycle === 'Monthly' ? 'mo' : 'yr' }}</div>
            </div>
        </div>
        <div class="p-4 border rounded-lg bg-gray-100" v-if="selectedServices.length">
            <div v-for="service in selectedServices" :key="service.id" class="flex justify-between">
                <div class="text-gray-500">{{ service.title }}</div>
                <div class="text-gray-900 font-medium">+${{ service.price }}/mo</div>
            </div>
        </div>

        <div class="p-4 border-t flex justify-between items-center">
            <div class="text-gray-500">Total (per {{ billingCycle.toLowerCase() }})</div>
            <div class="text-xl font-bold text-blue-600">+${{ totalPrice }}/{{ billingCycle === 'Monthly' ? 'mo' : 'yr' }}</div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'

const selectedPlan = {
    title: 'Pro Plan',
    price: 15
}

const selectedServices = [
    { id: 1, title: 'Online Services', price: 1 },
    { id: 2, title: 'Larger Storage', price: 2 }
]

const billingCycle = 'Monthly' 

const totalPrice = computed(() => {
    let addonsTotal = selectedServices.reduce((sum, service) => sum + service.price, 0)
    return selectedPlan.price + addonsTotal
})

const editPlan = () => {
    console.log("Edit plan clicked")
}
</script>
