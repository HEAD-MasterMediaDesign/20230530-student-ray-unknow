import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import {data} from "./data";

const app = createApp(App)

for (let levelsKey in data.levels) {
    const level = data.levels[levelsKey]
    console.log(levelsKey)
    router.addRoute({
        path: `/${levelsKey}`,
        name: level.titre,
        component: () => import('@/views/HomeView.vue'),
    })
}

app.use(createPinia())
app.use(router)

app.mount('#app')
