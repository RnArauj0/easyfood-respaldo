<script>
export default {
  name: "navbar"
}
</script>

<template>
  <div class="p-navbar p-d-flex p-jc-between p-ai-center">
    <div class="p-col-2">
      <a href="#" class="p-navbar-brand p-text-white">
        <img src="/src/assets/logo-navbar-easyfood.png" alt="Easy Food Logo" class="p-mr-2">
        Easy Food
      </a>
    </div>
    <div class="p-col-10">
      <ul class="p-menubar p-menu-scrollable">
        <li class="p-menuitem">
          <a href="#">Inicio</a>
        </li>
        <li class="p-menuitem">
          <a href="#">Mi Perfil</a>
        </li>
      </ul>
    </div>

  </div>
</template>

<style scoped>
.p-navbar{
  background-color: #0A732F;
  color: #ffffff;
  padding: 1rem 2rem;
}
.p-menu-scrollable{
  overflow-x: auto  ;
  white-space: nowrap;
}
</style>