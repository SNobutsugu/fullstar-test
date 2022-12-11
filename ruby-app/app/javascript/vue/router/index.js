import Vue from 'vue'
import Router from 'vue-router'
import One from "../one.vue"
import Two from "../two.vue"
Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'one',
            component: One
        },
        {
            path: '/two',
            name: 'two',
            component: Two
        }
    ]
})
export default router