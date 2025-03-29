<template>
    <div id="map" ref="mapContainer" class="-z-10"></div>
  </template>
  
  <script setup>
  import { onMounted, ref, watch } from "vue";
  import { useMapStore } from "../store/mapStore";
  import L from "leaflet";
  import "leaflet/dist/leaflet.css";
  
  const mapContainer = ref(null);
  const mapStore = useMapStore();
  let mapInstance = null;
  let marker = null;
  
  onMounted(() => {
    if (mapContainer.value) {
      mapInstance = L.map(mapContainer.value).setView([31.0444, 39.2357], 13);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap contributors",
      }).addTo(mapInstance);
  
      marker = L.marker([30.0444, 31.2357])
        .addTo(mapInstance)
        .bindPopup("Hello from Cairo! 🇪🇬")
        .openPopup();
    }
  });
  
  watch(
    () => mapStore.location,
    (newLocation) => {
      if (mapInstance && marker) {
        mapInstance.setView([newLocation.lat, newLocation.lon], 13);
        marker.setLatLng([newLocation.lat, newLocation.lon]).bindPopup("New Location").openPopup();
      }
    }
  );
  </script>
  
  <style scoped>
  #map {
    width: 100%;
    height: 100vh;
    min-height: 400px;
  }
  </style>
  