import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import { setToken } from './services/api.js';
import './assets/main.css';
import './style.css';


const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
app.use(router);


// read token from localStorage
const token = localStorage.getItem('token');
if (token) setToken(token);


app.mount('#app');