import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue'
import InputPath from '../views/InputPath.vue'

const routes:Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home,
      },
      {
        path: '/inputPath',
        name: 'InputPath',
        component: InputPath,
      },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router;