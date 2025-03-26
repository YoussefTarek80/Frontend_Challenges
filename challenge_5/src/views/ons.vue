<template>
    <div class="space-y-5 transition-all">
        <div class="space-y-3">
            <div class="text-4xl font-bold">Pick Add-ons</div>
            <div class="font-medium text-gray-400">Add-ons help enhance your gaming experience</div>
        </div>

        <div class="space-y-3">
            <label 
                v-for="service in services" 
                :key="service.id"
                class="flex items-center justify-between p-4 border rounded-lg cursor-pointer transition-all"
                :class="{ 'border-blue-500 bg-blue-100': props.all_information.services.includes(service.id) }"
            >
                <div class="flex items-center gap-4">
                    <input 
                        type="checkbox" 
                        v-model="props.all_information.services" 
                        :value="service.id" 
                        class="w-5 h-5 accent-blue-500"
                    >
                    <div>
                        <div class="font-bold">{{ service.title }}</div>
                        <div class="text-gray-500">{{ service.description }}</div>
                    </div>
                </div>
                <div class="text-blue-600 font-medium">
                    +${{ billingPrice(service.price) }}/{{ props.all_information.billing }}
                </div>
            </label>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps(['all_information'])

const services = [
    { id: 1, title: 'Online Services', description: 'Access to multiplayer games', price: 1 },
    { id: 2, title: 'Larger Storage', description: 'Extra 1TB of cloud save', price: 2 },
    { id: 3, title: 'Customizable Profile', description: 'Custom theme on your profile', price: 2 }
]


const billingPrice = (price) => {
    return props.all_information.billing === 'Yearly' ? price * 10 : price
}
</script>
