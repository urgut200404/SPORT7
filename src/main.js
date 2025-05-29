// import { createApp } from 'vue';
// import './style.css';
// import App from './App.vue';
// import router from './Router/index.js';
// import naive from "naive-ui"; 

// const app = createApp(App);

// app.use(router);
// app.use(naive);

// // Global event listenerlar
// window.addEventListener("touchmove", (event) => {}, { passive: true });
// window.addEventListener("touchstart", (event) => {}, { passive: true });

// app.mount('#app');


import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './Router/index.js';
import naive from 'naive-ui';

const app = createApp(App);

router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title;
  } else {
    document.title = 'JDPU - Jismoniy Madaniyat Kafedrasi';
  }
  next();
});

app.use(router);
app.use(naive);

// Global event listenerlar
window.addEventListener('touchmove', (event) => {}, { passive: true });
window.addEventListener('touchstart', (event) => {}, { passive: true });

app.mount('#app');
