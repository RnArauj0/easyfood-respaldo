<script>
  import CompanyCardComponent from "./components/company-card.component.vue";
  import FooterComponent from "./public/components/footer.component.vue";

  export default {
    components: {
      CompanyCardComponent,
      FooterComponent,
    },
    data(){
      return{
        companies: [
          {id: 1, name: 'Empresa Pequeña', description: 'Es una empresa que se compone ' +
                'de 10 a 49 empleados'},
          {id: 2, name: 'Empresa Mediana', description: 'Es una empresa que se compone ' +
                'de 50 a 199 empleados'},
          {id: 3, name: 'Empresa Grande', description: 'Es una empresa que se compone ' +
                'de 200 a más trabajadores'}
        ],
      };
    },
  };
</script>

<template>
  <div id="app">
    <div class="p-d-flex p-flex-row p-jc-center p-ai-center p-flex-wrap">
      <company-card-component v-for="company in companies" :key="company.id" :company="company" />
    </div>
    <footer-component></footer-component>
  </div>
</template>