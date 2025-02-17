import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import './index.css'
import router from './renderer/router';
createApp(App).use(router).use(createPinia()).mount('#app');

console.log('👋 This message is being logged by "renderer.ts", included via Vite');
