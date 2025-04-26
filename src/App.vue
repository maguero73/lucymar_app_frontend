<template>
  <div id="app">
    <PaginaPrincipal />
  </div>
</template>

<script>
import PaginaPrincipal from './views/PaginaPrincipal.vue';

export default {
  name: 'App',
  components: {
    PaginaPrincipal
  }
};
</script>

<style>
/* Acá podés dejar estilos generales de la aplicación si querés */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}
</style>
