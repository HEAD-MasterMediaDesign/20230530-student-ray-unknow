import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import {useAppStore} from "./stores/counter"

const app = createApp(App)

app.use(createPinia())
app.use(router)

for (let levelsKey in useAppStore().data.levels) {
  const level = useAppStore().data.levels[levelsKey]
  router.addRoute({
    path: `/${levelsKey}`,
    name: level.titre,
    component: () => import('@/views/HomeView.vue'),
  })
}

app.mount('#app')
