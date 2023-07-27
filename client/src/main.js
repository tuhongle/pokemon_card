import './assets/style.scss'

import { createApp } from 'vue'
import mitt from 'mitt'
import App from './App.vue'
import router from './router'
import 'bootstrap'

const emitter = mitt()
const app = createApp(App)

app.use(router)
app.provide('emitter', emitter)
app.mount('#app')
