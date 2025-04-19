<template>
    <div class="content">
      <div class="logo-container">
        <img
          src="/logo2.jpg"
          alt="Logo"
          class="logo"
          :class="{ rotate: isRotating }"
        />
      </div>
      <div class="labels">
        <label class="ctrl-gastos">Control de Gastos</label>
        <label class="est-rdos">Estado de Resultados</label>
      </div>
      <div class="dropdown">
        <label for="titular">Titular del Ingreso o del Gasto:</label>
        <select v-model="titularSeleccionado" id="titular" name="titular">
          <option disabled value="">Seleccione un titular</option>
          <option v-for="titular in titulares" :key="titular.id" :value="titular.id">
            {{ titular.nombre }}
          </option>
        </select>
      </div>
      <div class="textbox">
        <label for="monto">Monto Gasto:</label>
        <input type="text" id="monto" name="monto" />
      </div>
      <div class="radio-buttons">
        <label for="pesos">Pesos:</label>
        <input type="radio" id="pesos" name="moneda" value="pesos" />
        <label for="dolares">Dólares:</label>
        <input type="radio" id="dolares" name="moneda" value="dolares" />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        titulares: [],
        titularSeleccionado: null,
        isRotating: false
      };
    },
    mounted() {
      this.verificarLogin();
      this.animateLogo();
      this.cargarTitulares();
    },
    methods: {
      verificarLogin() {
        if (!window.localStorage.getItem("loggedIn")) {
          window.location.href = "http://localhost:8081/Login.html";
        }
      },
      animateLogo() {
        this.isRotating = true;
        setTimeout(() => {
          this.isRotating = false;
        }, 1000);
      },
      async cargarTitulares() {
        try {
          const response = await fetch("http://localhost:8080/api/titulares");
          this.titulares = await response.json();
        } catch (error) {
          console.error("Error al cargar titulares:", error);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .logo {
    width: 100px;
    height: 100px;
    transition: transform 1s ease-in-out;
  }
  
  .rotate {
    transform: rotate(360deg);
  }
  
  /* Agregá tus otros estilos personalizados aquí */
  </style>
  