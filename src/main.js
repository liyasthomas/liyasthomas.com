import { createApp } from "vue";
import App from "./App.vue";
import "virtual:windi.css";
import { registerSW } from "virtual:pwa-register";

registerSW();
createApp(App).mount("#app");
