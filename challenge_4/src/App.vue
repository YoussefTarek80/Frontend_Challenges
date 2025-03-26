<template>
    <div class="flex items-center justify-center min-h-screen  bg-gray-100 p-4 ">
        <div class="window grid sm:grid-cols-2 grid-cols-1  w-9/12 bg-white shadow-lg  ">
            <div class="col-span-1 ">
                <calculator @updateMonthlyPayment="updatePayment" @updateTotalPayment="updateTotal"></calculator>
            </div>
            <div class="col-span-1 bg-[#0E2A3A] borderRadius">
                <results :monthlyPayment="monthlyPayment" :total="TotalRepay"></results>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from "vue";
    import calculator from "./components/calculator.vue";
    import results from "./components/results.vue";

    const monthlyPayment = ref("");
    const TotalRepay=ref("")
    const updatePayment = (value) => {
        monthlyPayment.value = value;
    };
    const updateTotal = (value) => {
        TotalRepay.value = value;
    };
</script>

<style scoped>
.borderRadius {
    border-bottom-left-radius: 80px;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
}
</style>
