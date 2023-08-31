import './assets/main.css'

import { createApp } from 'vue'
import Buefy from '@ntohq/buefy-next'
import '@ntohq/buefy-next/dist/buefy.css'

import App from './App.vue'

const app = createApp(App)
app.use(Buefy)

app.mount('#app')
