import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home')
    },
    {
        path: '/user',
        name: 'User',
        component: () => import('../views/User')
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})
export default router
