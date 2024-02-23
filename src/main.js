
import { createApp } from 'vue'
import { plugin, defaultConfig} from '@formkit/vue'
import App from './App.vue'
import router from './router'
import config from '../formkit.config'
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


import './assets/main.css'
import 'bootstrap/dist/js/bootstrap'

const app = createApp(App)
app.use(router)
app.use(plugin, defaultConfig(config))

app.mount('#app')
