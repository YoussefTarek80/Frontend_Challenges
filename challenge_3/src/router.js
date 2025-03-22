import { createRouter, createWebHistory } from "vue-router";
import countriesView from "./views/countries.vue";
import countriesInfo from "./views/countryInfo.vue";
const routes = [
  { path: "/", component: countriesView },
  { path: "/country/:id", component:countriesInfo  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
