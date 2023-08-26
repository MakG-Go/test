import { createApp } from 'vue'
import { getData } from "@/scripts/getData.js"
import global from "@/global/constants.js"
import '@/scss/style.scss'
import 'virtual:svg-icons-register'
import router from "@/router/router.js"
import App from './App.vue'

(async () => {
    try {
        const navData = await getData(global.URLS.START_URL)
        const app = createApp(App).use(router)
        app.config.globalProperties.$navData = navData
        app.mount('#app')
    }
    catch (err) {
        console.error
    }
})();


