import { createApp } from 'vue'
// import 'bootstrap/dist/css/bootstrap.min.css'
import '@/scss/style.scss'
import 'virtual:svg-icons-register'
import router from "@/router/router.js"
import App from './App.vue'

createApp(App).use(router).mount('#app')
