import { createApp } from 'vue';
// import { createPinia } from 'pinia'; // This is a store
import './style.css';
// import App from './App.vue';
import VueButton from './components/CoolButton.vue';
import VueIcon from './components/CoolIcon.vue';

// const pinia = createPinia();
// const app = createApp(App);
const app = createApp({
  name: 'main-app',
});
app.component('vue-button', VueButton);
app.component('vue-icon', VueIcon);

app.mount('#app');
