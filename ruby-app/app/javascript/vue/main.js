import Vue from 'vue'
import App from '../vue/App.vue'
import router from '../vue/router'

Vue.config.productionTip = false

document.addEventListener('DOMContentLoaded', () => {
    const app = new Vue({
        router,
        render: h => h(App)
    }).$mount()
    document.body.appendChild(app.$el)
})