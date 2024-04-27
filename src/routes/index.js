
import { createRouter, createWebHistory } from 'vue-router';
import CompanyCardComponent from '../planing/components/company-card.component.vue';
import SubscriptionFormComponent from '../planing/components/subscription-form.component.vue';

const routes = [
    { path: '/company-card', component: CompanyCardComponent },
    { path: '/subscription-form', component: SubscriptionFormComponent },
    { path: '/', redirect: '/company-card' },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
