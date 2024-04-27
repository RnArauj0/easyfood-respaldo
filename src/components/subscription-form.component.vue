<script>
export default {
  data() {
    return {
      form: {
        name: 'subscription-form',
      },
    };
  },
  methods: {
    submitForm(event) {
      event.preventDefault();
      // Aquí puedes agregar la lógica de validación del formulario si es necesario
      // Luego redirige a la página de confirmación
      window.open('', '_blank');
    },
  },
  /*
    submitForm() {
      // Lógica de envío del formulario
    },
  },*/
};
</script>

<template>
  <form class="subscription-form" @submit="submitForm">
    <h2>Plan de suscripción</h2>
    <div class="form-group">
      <label for="name">Nombre</label>
      <input type="text" id="name" name="name" required>
    </div>

    <div class="form-group">
      <label for="surname">Apellidos</label>
      <input type="text" id="surname" name="surname" required>
    </div>

    <div class="form-group">
      <label for="email">Correo Electrónico</label>
      <input type="email" id="email" name="email" required>
    </div>

    <div class="form-group">
      <label for="dni">DNI</label>
      <input type="text" id="dni" name="dni" required>
    </div>

    <div class="form-group">
      <label for="cardNumber">Numero de tarjeta</label>
      <input type="text" id="cardNumber" name="cardNumber" required>
    </div>

    <div class="form-group">
      <label for="cvv">CVV</label>
      <input type="text" id="cvv" name="cvv" required>
    </div>

    <div class="form-group">
      <label for="subscriptionPeriod">Periodo de suscripción</label>
      <select id="subscriptionPeriod" name="subscriptionPeriod" required>
        <option value="">Selecciona...</option>
        <option value="1">1 mes</option>
        <option value="3">3 meses</option>
        <option value="6">6 meses</option>
        <option value="12">12 meses</option>
      </select>
    </div>
    <button type="submit">Confirmar</button>
  </form>
</template>

<style scoped>
body {
  background-color: #4caf50;
  font-family: Arial, sans-serif;
}

.subscription-form {
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
}

.subscription-form h2 {
  text-align: center;
  color: #4caf50;
  margin-bottom: 20px;
}

.subscription-form .form-group {
  margin-bottom: 20px;
}

.subscription-form .form-group label {
  display: block;
  margin-bottom: 5px;
}

.subscription-form .form-group input,
.subscription-form .form-group select {
  width: 100%;
  padding: 10px;
  border: 1px solid #dddddd;
  border-radius: 5px;
}

.subscription-form button {
  width: 100%;
  padding: 10px;
  background-color: #4caf50;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

</style>