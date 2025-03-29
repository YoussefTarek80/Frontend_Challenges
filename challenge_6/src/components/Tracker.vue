<template>
    <section class="flex flex-col items-center justify-center gap-5">
      <div class="mt-10">
        <h1 class="text-white text-2xl font-bold">IP Address Tracker</h1>
      </div>

      <div class="relative text-white w-96">
        <input
          v-model="ipAddress"
          type="text"
          class="p-3 rounded-xl w-full text-black"
          placeholder="Enter IP Address..."
        />
        <span
          @click="fetchIPDetails"
          class="absolute right-0 top-0 bg-gray-800 w-10 h-12 flex items-center justify-center rounded-br-xl rounded-tr-xl cursor-pointer"
        >
          >
        </span>
      </div>
  
      <div class="results shadow-lg flex flex-wrap items-center w-11/12 justify-between gap-10 p-5 bg-white rounded-xl relative sm:top-10 top-40">
        <div class="p-5 flex flex-col justify-between ">
          <div class="text-gray-400 font-extrabold text-sm tracking-[1px]">IP ADDRESS</div>
          <div class="text-3xl font-semibold">{{ ipData.query || "N/A" }}</div>
        </div>
        <div class="border-l-2 border-gray-200 p-5 w-80">
          <div class="text-gray-400 font-extrabold text-sm tracking-[1px]">LOCATION</div>
          <div class="text-3xl font-semibold">{{ ipData.city }}, {{ ipData.country }}</div>
        </div>
        <div class="border-l-2 border-gray-200 p-5 w-80">
          <div class="text-gray-400 font-extrabold text-sm tracking-[1px]">TIME ZONE</div>
          <div class="text-3xl font-semibold">{{ ipData.timezone || "N/A" }}</div>
        </div>
        <div class="border-l-2 border-gray-200 p-5 w-80">
          <div class="text-gray-400 font-extrabold text-sm tracking-[1px]">ISP</div>
          <div class="text-3xl font-semibold">{{ ipData.isp || "N/A" }}</div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import { useMapStore } from "../store/mapStore";
  
  const ipAddress = ref("");
  const ipData = ref({});

  const mapStore = useMapStore();
  
  const fetchIPDetails = async () => {
    if (!ipAddress.value) return;
    
    try {
      const response = await fetch(`http://ip-api.com/json/${ipAddress.value}`);
      const data = await response.json();
      
      if (data.status === "success") {
        ipData.value = data;
        mapStore.updateLocation(data.lat, data.lon);
      } else {
        alert("Invalid IP Address!");
      }
    } catch (error) {
      console.error("Error fetching IP details:", error);
    }
  };
  </script>
  
  <style scoped>
  section {
    background: url("../assets/images/pattern-bg-desktop.png") no-repeat;
    background-size: cover;
  }
  </style>
  