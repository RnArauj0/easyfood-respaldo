<template>
  <div class="p-card">
    <div class="p-d-flex p-jc-center p-ai-center">
      <div class="p-mr-2">
        <i class="pi pi-home"></i>
      </div>
      <div>
        <h5>{{ company.name }}</h5>
        <p>{{ company.description }}</p>
      </div>
    </div>
    <button class="p-button-success" @click="buy">Buy</button>
  </div>
</template>

<script>
//import buy from 'src/model/buy.js'
export default {
  props: {
    company: Object,
  },
  methods:{
    buy(){
      // Open a new window with the URL of purchase form.
      window.open('', '_blank');
      const buy = new buy(this.company);
      buy.buy();
    },
  },
};
</script>

<style scoped>
.p-card {
  width: 400px;
  margin: 1rem;
  border: 2px solid #D9D052;
  background-color: #D3F2CE;
}
.p-button-success{
  background-color: #ffffff;
  border: 1px solid #000000;
}
</style>

