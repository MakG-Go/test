import { createRouter, createWebHistory } from "vue-router"
import News from "@/views/News.vue";
import appE404 from "@/components/E404.vue";

const routes = [
    {
        path: '/',
        redirect: { name: 'home' }
    },
    {
        path: '/news',
        redirect: { name: 'home' }
    },
    {
        path: '/news/1',
        name: 'home',
        component: News,
        props: { isHomePage: true }
    },
    {
        path: '/news/:id',
        name: 'news',
        component: News,
    },
    { path: '/:any(.*)', component: appE404, name: 'e404' },
]


export default createRouter({
    routes,
    history: createWebHistory(),
    scrollBehavior(to, from, savedPosition) {
        return savedPosition || new Promise((resolve) => {
            setTimeout(() => { resolve({ top: 0, behavior: "smooth" }), 200 })
        })

    },
})