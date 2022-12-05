import "./plugins/bootstrap-vue";
import "./plugins/bootstrap-vue";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import bootstrap from "bootstrap";
import "./assets/app.scss";

createApp(App).use(store).use(router).use(bootstrap).mount("#app");
