import { defineStore } from "pinia";
import { ref } from "vue";

export const useMapStore = defineStore("mapStore", () => {
    const location = ref({ lat: 30.0444, lon: 31.2357 });

    const updateLocation = (lat, lon) => {
        location.value = { lat, lon };
    };

    return { location, updateLocation };
});