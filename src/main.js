import { createApp } from 'vue'
import './style.css'
import App from './app.vue'
//import router from "./routes/index.js";

import 'primevue/resources/themes/saga-green/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css';
import CompanyCardComponent from "./components/company-card.component.vue";

createApp(App).mount('#app');
app.Component(CompanyCardComponent);