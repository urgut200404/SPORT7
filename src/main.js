import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './Router/index.js';
import naive from "naive-ui"; 

const app = createApp(App);

app.use(router);
app.use(naive);

// Global event listenerlar
window.addEventListener("touchmove", (event) => {}, { passive: true });
window.addEventListener("touchstart", (event) => {}, { passive: true });

app.mount('#app');