
<script>
export default{
  name: "footer-content",
  data(){
    return{
      year: 2024
    }
  }
}
</script>

<template>
  <footer class="p-card-footer">
    <div class="container">
      <div class="footer-content">
        <div class="p-d-flex p-jc-center p-ai-center footer-content">
          <div class="p-d-flex p-jc-start p-ai-center p-col-4">
            <img src="/src/assets/logo-easyfood.png" alt="Easy Food Logo" class="logo"/>
          </div>
          <div class="p-d-flex p-jc-center p-ai-center p-col-8 contact">
            <div class="p-col-12">
              <h3>Contáctanos: </h3>
              <p><a href="mailto:easyfood@cybersavants.com">easyfood@cybersavants.com</a> </p>
              <p><a href="tel:+51997546689">+51 997 546 689</a> </p>
            </div>
          </div>
        </div>
      </div>
      <div class="copyright">
        <p>&copy; {{ 2024 }} Cyber Savants</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #0A732F;
  color: white;
  text-align: center;
  padding: 0;
}
.container {
  max-width: 2000px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
.footer-content {
  display: flex;
  align-items: center;
}
.logo {
  width: 90px;
  height: auto;
  margin-right: 20px;
}
.contact {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 500px;
}
.contact h3 {
  margin-bottom: 1px;
}
.contact a {
  color: #fff;
  text-decoration: whitesmoke;
}
.copyright {
  text-align: center;
  margin-top: auto;
}
</style>