<template>
    <div class="flex flex-col items-center justify-center m-5 relative">
        <score :score="userScore" />
        <Game_content @selectedUser="userSelect" v-if="!selectedUser" />
        <Game_logic 
            v-if="selectedUser" 
            :selectedItem="selectedUser" 
            :Computer="computerSelect" 
            @playAgain="play_again" 
            @updateScore="updateScore"
        />
        <div>
            <rules v-if="showRules" @closeRules="showRules = false" />
            <button 
                @click="showRules = true" 
                class="border-2 border-gray-300 text-white px-10 py-2 rounded-2xl cursor-pointer absolute -bottom-3 right-0"
            >
                RULES
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, provide } from 'vue';
import Game_content from './components/game_content.vue';
import Game_logic from './components/game_logic.vue';
import score from './components/score.vue';
import rules from './components/rules.vue';
import scissorsImg from './assets/images/icon-scissors.svg';
import paperImg from './assets/images/icon-paper.svg';
import rockImg from './assets/images/icon-rock.svg';

const list = [
    { id: '1', name: 'scissors', img: scissorsImg, gradient: 'bg-gradient-to-b from-[#FFB703] to-[#FFC300]' },
    { id: '2', name: 'paper', img: paperImg, gradient: 'bg-[linear-gradient(to_bottom,hsl(230,89%,62%),hsl(230,89%,65%))]' },
    { id: '3', name: 'rock', img: rockImg, gradient: 'bg-[linear-gradient(to_bottom,hsl(349,71%,52%),hsl(349,70%,56%))]' }
];

provide('list', list);

const selectedUser = ref(null);
const userScore = ref(0);
const showRules = ref(false); // Track rules modal visibility

const userSelect = (item) => {
    selectedUser.value = item;
};

const computerSelect = computed(() => {
    const randomIndex = Math.floor(Math.random() * list.length);
    return list[randomIndex];
});

const updateScore = (value) => {
    userScore.value += value;
};

const play_again = () => {
    selectedUser.value = null;
};
</script>
