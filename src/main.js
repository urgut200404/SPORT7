import { createApp } from 'vue' 
import './style.css'
import App from './App.vue'
import router from './Router/index.js'
import naive from "naive-ui" 

import CanvasJSChart from '@canvasjs/vue-charts';
const app = createApp(App)

app.use(router)
app.use(naive)  
app.use(CanvasJSChart);
app.mount('#app')

