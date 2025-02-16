import { createApp } from 'vue';
import App from './App.vue';
import './index.css'
import router from './renderer/router';
createApp(App).use(router).mount('#app');

console.log('👋 This message is being logged by "renderer.ts", included via Vite');
