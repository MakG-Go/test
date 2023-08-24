import { createRouter, createWebHistory } from "vue-router"
import News from "@/views/News.vue";
import appE404 from "@/components/E404.vue";

const routes = [
    {
        path: '/news',
        name: 'home',
        component: News,
        props: { isHomePage: true }
    },
    {
        path: '/news/:id',
        name: 'news',
        component: News,
        props: { isHomePage: false }
        // props: route => ({ isHomePage: false, id: route.params.id })
    },
    // { path: '/:any(.*)', component: appE404 },
]


export default createRouter({
    routes,
    history: createWebHistory()
})