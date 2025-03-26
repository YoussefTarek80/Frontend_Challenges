<template>
        <div class="flex flex-col items-center justify-center sm:h-full text-center sm:p-0 p-5 " v-if="!monthlyPayment">
            <div>
                <img src="../assets/assets/images/illustration-empty.svg" alt="">
            </div>
            <div class="flex flex-col items-center justify-center gap-5 text-white">
                <span class="text-3xl">Results shown here</span>
                <span  class="text-gray-500 font-medium sm:w-9/12 ">
                    Complete form and click "Calculate Repayment" to see what your monthly repayment would be.
                </span>
            </div>
        </div>
        <div v-else class="text-white sm:p-12 flex flex-col gap-5  p-5" >
            <span class="text-3xl ">Your results</span>
            <span class="text-gray-500 font-medium">Your results are shown below  based on the information your provided. To adjust the results. edit the form and click "calculate repayment" again. </span>
            <div class="result_window flex flex-col bg-gray-900 px-5 border-t-4 border-[#C5D82A] rounded-t-lg  ">
                <div class="flex flex-col gap-3 my-5">
                    <span class="text-gray-400">Your monthly repayments </span>
                    <span class="text-[#C5D82A] text-5xl">{{ formatCurrency(monthlyPayment) }}</span>
                </div>
                <hr class="border-gray-500">
                <div class="flex flex-col gap-1 my-5">
                    <span class="text-gray-400">Total you'll repay over the term </span>
                    <span class=" text-2xl">{{ formatCurrency(total) }}</span>
                </div>

            </div>
        </div>
    
</template>

<script setup>

import useCurrency from "../composables/useCurrency";
const { formatCurrency } = useCurrency();

defineProps({
        monthlyPayment: String,
        total:String
    });
</script>
