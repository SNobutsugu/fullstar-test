import './bootstrap';


import { createApp } from "vue";
import App from "./components/vue_site/App.vue";
const app = createApp(App);

console.log(app.version);

app.mount("#app");
