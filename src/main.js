import { createApp } from "vue";
import App from "./App.vue";
import axios from "axios";
import router from "./router";
import store from "./store";
import "./main.css"

import VueToast from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";

import VueJivosite from "@bchteam/vue-jivosite";

axios.defaults.baseURL = process.env.VUE_APP_BASE_URL;

let app = createApp(App);
app.use(router);
app.use(store);
app.use(VueToast);
app.mount("#app");
app.use(VueJivosite, { widgetId: "JnwJIhy8mD" });
