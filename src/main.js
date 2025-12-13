import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import store from "./stores";
import router from './router'
import './style.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(store)

app.mount('#app')
