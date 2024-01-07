import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import "bootstrap-icons/font/bootstrap-icons.min.css";

const app = createApp(App);
app.use(createPinia());

app.use(router).mount("#app");
