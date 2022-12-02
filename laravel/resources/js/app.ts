import { createApp } from "vue"
import router from './components/router';
import App from "./components/vue_site/App.vue"

const app = createApp(App);
app.use(router);
app.mount("#app")
