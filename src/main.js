import { createApp } from "vue";
import "../src/styles/generals.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { router } from "./router.js";
import App from "./App.vue";

createApp(App).use(router).mount("#app");
