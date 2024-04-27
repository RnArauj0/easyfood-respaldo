<script>
export default {
  props: {
    company: Object,
  },
  methods:{
    buy(){

      this.$router.push('./Subscription-form');

    },
  },
};
</script>

<template>
  <div class="p-card">
    <div class="p-d-flex p-jc-center p-ai-center">
      <div class="p-mr-2">
        <img :src="company.image" alt="Company Logo" class="company-logo">
      </div>
      <div>
        <h5>{{ company.name }}</h5>
        <p>{{ company.description }}</p>
      </div>
    </div>
    <button class="p-button-success" @click="buy">Buy</button>
  </div>
</template>

<style scoped>
.p-card {
  width: 300px; /* Adjust as needed */
  margin: 1rem;
  border: 2px solid #D9D052;
  background-color: #D3F2CE;
  padding: 1rem; /* Add padding for the icon area */
}
.p-button-success{
  background-color: #ffffff;
  border: 1px solid #000000;
}
.company-logo {
  width: 90px;
  height: 90px;
}
</style>

