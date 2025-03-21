<template>
    <div class="flex flex-wrap items-center justify-center my-20 sm:gap-20 gap-10">
        <div class="userPick flex flex-col items-center gap-10" >
            <div class="text-3xl text-white">YOU PICKED</div>
            <div 
                class="cursor-pointer sm:p-12 p-5 rounded-full relative shadow-[inset_0_-10px_0px_rgba(0,0,0,0.3)]"
                :class="selectedItem.gradient"
            >
                <img 
                    :src="selectedItem.img" 
                    :alt="selectedItem.name" 
                    class="bg-white rounded-full sm:w-52 w-40 sm:h-52 h-40 p-10  object-contain shadow-[inset_0_10px_0px_rgba(0,0,0,0.1)]"
                >
            </div> 
        </div>
        <div class="result  text-white flex flex-col items-center justify-center gap-2">
            <span class="text-5xl">{{ result }}</span>
            <button class="text-black text-xl bg-white px-20 rounded-xl font-medium py-4" @click="playAgain">PLAY AGAIN</button>
        </div>
        <div class="computerPick flex flex-col items-center gap-10">
            <div class="text-3xl text-white">THE HOUSE PICKED</div>
            <div 
                class="cursor-pointer sm:p-12 p-5 rounded-full relative shadow-[inset_0_-10px_0px_rgba(0,0,0,0.3)]"
                :class="Computer.gradient"
            >
                <img 
                    :src="Computer.img" 
                    :alt="Computer.name" 
                    class="bg-white rounded-full sm:w-52 w-40 sm:h-52 h-40 p-10 object-contain shadow-[inset_0_10px_0px_rgba(0,0,0,0.1)]"
                >
            </div> 
        </div>
    </div>
</template>
<script setup>
    import { ref, defineEmits } from 'vue';

    const props = defineProps(['selectedItem', 'Computer']);
    const result = ref('');
    const emit = defineEmits(['playAgain', 'updateScore']);

    const game_logic = () => {
        if (props.selectedItem.name === props.Computer.name) {
            result.value = 'TAILS';
        } 
        else if (
            (props.selectedItem.name === 'rock' && props.Computer.name === 'scissors') ||
            (props.selectedItem.name === 'scissors' && props.Computer.name === 'paper') ||
            (props.selectedItem.name === 'paper' && props.Computer.name === 'rock')
        ) {
            result.value = 'YOU WIN';
            emit('updateScore', 1);
        } 
        else {
            result.value = 'YOU LOST';
            emit('updateScore', -1);
        }
    };

    game_logic();

    const playAgain = () => {
        emit('playAgain');
};
</script>