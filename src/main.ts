import { createApp } from 'vue';
// import { createPinia } from 'pinia'; // This is a store
import './style.css';
// import App from './App.vue';
import VueButton from './components/CoolButton.vue';
import VueIcon from './components/CoolIcon.vue';

// const pinia = createPinia();
// const app = createApp(App);
const app = createApp({});
app.component('VueButton', VueButton);
app.component('VueIcon', VueIcon);

app.mount('#app');
