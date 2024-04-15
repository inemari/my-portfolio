import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { config } from 'dotenv';
config();
createApp(App).mount('#app')
