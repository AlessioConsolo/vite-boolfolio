import { createRouter, createWebHistory } from "vue-router";

import Homepage from "./components/Homepage.vue";
import Portfolio from "./components/Portfolio.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "homepage",
      component: Homepage,
    },
    {
      path: "/portfolio",
      name: "portfolio",
      component: Portfolio,
    },
  ],
});

export { router };
