<template>
  <div class="content">
    <div class="logo-container" @click="animateLogo">
      <img src="/logo2.jpg" alt="Logo" class="logo" :class="{ 'rotate': isRotating }">
    </div>
    <div class="labels">
      <label class="ctrl-gastos">Control de Gastos</label>
      <label class="est-rdos">Estado de Resultados</label>
    </div>
    <div class="dropdown">
      <label for="titular">Titular del Ingreso o del Gasto:</label>
      <select id="titular" name="titular">
        <option value="" selected>Seleccione el titular</option>
      </select>
    </div>
    <div class="textbox">
      <label for="monto">Monto Gasto:</label>
      <input type="text" id="monto" name="monto">
    </div>
    <div class="radio-buttons">
      <label for="pesos">Pesos:</label>
      <input type="radio" id="pesos" name="moneda" value="pesos">
      <label for="dolares">Dólares:</label>
      <input type="radio" id="dolares" name="moneda" value="dolares">
    </div>
    <div class="dropdown">
  <label for="concepto">Tipo de Gasto:</label>
  <select id="concepto" name="concepto">
    <option value="" selected>Seleccione un concepto</option>
  </select>
</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isRotating: false
    };
  },
  methods: {
    animateLogo() {
      this.isRotating = true;
      setTimeout(() => {
        this.isRotating = false;
      }, 500);
    }
  }
};


</script>



<style>

</style>
