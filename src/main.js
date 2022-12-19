import { createApp } from 'vue';
import './style.css';
import {createRouter, createWebHistory} from 'vue-router';
import routes from './data/routes';

import App from './App.vue';

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes,
})

app.use(router);
app.mount('#app');
