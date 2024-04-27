<script>
import CompanyCardComponent from "./planing/components/company-card.component.vue";
import SubscriptionFormComponent from "./planing/components/subscription-form.component.vue";
import FooterComponent from "./public/components/footer.component.vue";
import SmallCompany from './assets/empresa-pequeña.png';
import MediumCompany from './assets/empresa-mediana.png';
import BigCompany from './assets/empresa-grande.png';

export default {
  components: {
    CompanyCardComponent,
    FooterComponent,
    SubscriptionFormComponent
  },
  data() {
    return {
      companies: [
        {id: 1, name: 'Empresa Pequeña', description: 'Este paquete incluye almuerzos destinados ' +
              'para empresas cuyo número de empleados oscila entre 10 y 49 empleados.',
          image: SmallCompany},
        {id: 2, name: 'Empresa Mediana', description: 'Este paquete incluye almuerzos destinados ' +
              'para empresas cuyo número de empleados oscila entre 50 y 199 empleados.',
          image: MediumCompany},
        {id: 3, name: 'Empresa Grande', description: 'Este paquete incluye almuerzos destinados ' +
              'para empresas cuyo número de empleados supera los 200.'
          , image: BigCompany}
      ],
      items: [
        {label: 'company-card', to:'/company-card'},
        {label: 'subscription-form', to: '/subscription-form'},
      ]
    };
  },
};
</script>

<template>
  <div id="app">
    <main>
      <router-view></router-view>
      <div style="display: flex; flex-direction: row; justify-content: space-around;">
        <company-card-component v-for="company in companies" :key="company.id" :company="company" />
      </div>
    </main>
    <footer-component></footer-component>
  </div>
</template>