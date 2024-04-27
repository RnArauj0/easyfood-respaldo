import CompanyCardComponent from "../components/company-card.component.vue";
import SubscriptionFormComponent from "../components/subscription-form.component.vue";

const routes =[
    {path: '/company-card', component: CompanyCardComponent},
    {path: '/Subscription-form', component: SubscriptionFormComponent}

];
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
