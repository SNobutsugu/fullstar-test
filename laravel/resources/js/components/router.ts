import { createRouter,createWebHistory } from 'vue-router';

import one from "./vue_site/One.vue";
import two from "./vue_site/Two.vue";

const routes = [
    { path: '/vue/one', name: 'one', component: one },
    { path: '/vue/two', name: 'two', component: two },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
