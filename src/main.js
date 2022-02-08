import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css";
import VueAnimXyz from "@animxyz/vue3";
import "@animxyz/core"; // Import css here if you haven't elsewhere

const app = createApp(App);
app.use(createPinia());
app.use(VueAnimXyz);
app.use(router);

app.mount("#app");
