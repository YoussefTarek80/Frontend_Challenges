<template>
    <div class="p-6 max-w-lg mx-auto bg-white  ">
        <div class="flex flex-wrap justify-between items-center mb-6">
        <span class="text-xl font-semibold text-slate-900">Mortgage Calculator</span>
        <button @click="clearAll" class=" text-gray-400 font-medium underline">Clear All</button>
        </div>
        <div class="space-y-4">
            <div class="flex flex-col">
                <label for="mortgageAmount" class="label">Mortgage Amount</label>
                <div class="relative">
                        <span 
                        :class="{'bg-[#C5D82A]': isFocused, 'bg-[#73A1C1]': !isFocused}" 
                        class="absolute rounded-tl-md rounded-bl-md inset-y-0 left-0 px-3 flex items-center 
                            text-slate-700 font-medium transition-colors"
                    >
                        $
                    </span>                    
                    <input 
                        type="text" 
                        id="mortgageAmount" 
                        v-model="mortgageAmount" 
                        class="input p-2 pl-10 focus:outline-[#C5D82A] " 
                        @focus="isFocused = true" 
                        @blur="isFocused = false"
                        >
                </div>
            </div>
            <div class="flex flex-wrap sm:gap-4 gap-2 w-full">
                <div class="flex flex-col sm:flex-1  w-full">
                    <label for="mortgageTerm" class="label">Mortgage Term</label>
                    <div class="relative ">
                        <input type="text" id="mortgageTerm" v-model="mortgageTerm" class="input p-2 pr-10 outline-none ">
                        <span 
                            class="absolute rounded-tr-md rounded-br-md inset-y-0 right-0 px-3 border-2 border-t-[#73A1C1] border-b-[#73A1C1] border-r-[#73A1C1] flex items-center 
                                text-slate-700 font-medium transition-colors bg-[#D6E7F2]"
                        >
                           years
                        </span>  
                    </div>
   
                </div>
                <div class="flex flex-col sm:flex-1 w-full">
                    <label for="interestRate" class="label">interest Rate</label>
                    <div class="relative">
                        <input type="text" id="interestRate" v-model="interestRate" class="input p-2 pr-10 outline-none">
                        <span 
                            class="absolute rounded-tr-md rounded-br-md inset-y-0 right-0 px-3 border-2 border-t-[#73A1C1] border-b-[#73A1C1] border-r-[#73A1C1] flex items-center 
                                text-slate-700 font-medium transition-colors bg-[#D6E7F2]"
                        >
                           %
                        </span>  
                    </div>
   
                </div>
            </div>
            <div class="flex flex-col">
                <label class="label">Mortgage Type</label>
                <div class="flex gap-4 flex-col">
                    <label 
                        class="flex items-center gap-2 border-2 border-[#73A1C1] rounded-md p-2 transition"
                        :class="{'bg-[#c4d82a52] text-black': mortgageType === 'Repayment'}"
                    >
                        <input type="radio" v-model="mortgageType" value="Repayment" class="radio">
                        Repayment
                    </label>
                    <label 
                        class="flex items-center gap-2 border-2 border-[#73A1C1] rounded-md p-2 transition"
                        :class="{'bg-[#c4d82a52] text-black': mortgageType === 'Interest'}"
                    >
                        <input type="radio" v-model="mortgageType" value="Interest" class="radio">
                        Interest only
                    </label>
                </div>
            </div>


            <button @click="calculateMortgage" class="bg-[#C5D82A] text-black flex items-center gap-2 py-3 px-8 w-full justify-center rounded-3xl transition">
                <img src="../assets/assets/images/icon-calculator.svg" alt="">
                <span>
                    Calculate Repayments
                </span>
            </button>
        </div>
    </div>
</template>

<script setup>
    import { ref,defineEmits} from "vue";
    const isFocused=ref(false)
    const mortgageAmount = ref("");
    const mortgageTerm = ref("");
    const interestRate = ref("");
    const mortgageType = ref("fixed");
    const totalRepayment = ref(null);
    const emit = defineEmits(["updateMonthlyPayment"]);
    const clearAll = () => {
        mortgageAmount.value = "";
        mortgageTerm.value = "";
        interestRate.value = "";
        mortgageType.value = "fixed";
        emit("updateMonthlyPayment", "");
    };

    const calculateMortgage = () => {
        if (!mortgageAmount.value || !mortgageTerm.value || !interestRate.value) {
            return;
        }
        const principal = parseFloat(mortgageAmount.value);
        const years = parseFloat(mortgageTerm.value);
        const rate = parseFloat(interestRate.value) / 100 / 12; 
        const months = years * 12;
        let monthlyPayment;
        if (mortgageType.value === "Repayment") {
            monthlyPayment = (principal * rate) / (1 - Math.pow(1 + rate, -months));
        } else {
            monthlyPayment = principal * rate;
        }
        monthlyPayment = monthlyPayment.toFixed(2); 
        totalRepayment.value = (monthlyPayment * months).toFixed(2); 
        emit("updateMonthlyPayment", monthlyPayment);
        emit("updateTotalPayment", totalRepayment.value);
    };

</script>

<style scoped>
    .input {
        @apply border-2 border-[#73A1C1]  rounded-md  text-slate-900 w-full;
    }

    .label {
    @apply text-sm font-medium text-slate-700 mb-1;
    }

    .radio {
    @apply accent-[#C5D82A];
    }
</style>
