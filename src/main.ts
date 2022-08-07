import { createApp } from 'vue';
import { createPinia } from 'pinia';
import piniaPersist from 'pinia-plugin-persist';
import './style.css';
import App from './App.vue';
import VueButton from './components/VueButton.vue';

let app;
const pinia = createPinia();
pinia.use(piniaPersist);

if (process.env.NODE_ENV === 'production') {
  app = createApp({
    name: 'main-app',
  });
  app.component('vue-button', VueButton);
} else {
  app = createApp(App);
}

app.use(pinia);
app.mount('#app');
