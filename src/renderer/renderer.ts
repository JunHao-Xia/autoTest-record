import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './index.css';
import App from './App.vue';
import router from './router';
import '@/assets/fonts/iconfont.css' /* 引入阿里巴巴图标 */
createApp(App).use(router).use(createPinia()).mount('#app');

console.log('👋 This message is being logged by "renderer.ts", included via Vite');
