import { createApp } from 'vue';
import './style.css';
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import { createPinia } from 'pinia';
import router from './router';
import ConfirmationService from 'primevue/confirmationservice';

const app = createApp(App)

app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: 'false'
    }
  }
})
app.use(createPinia()).use(router);
app.use(ConfirmationService);
app.mount('#app')