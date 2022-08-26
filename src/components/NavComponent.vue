<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>
<template>
  <div class="btm-nav">
    <RouterLink to="/users" active-class="active"> Usuarios </RouterLink>
    <RouterLink to="/" active-class="active "> Inicio </RouterLink>
    <RouterLink to="/equipment" active-class="active "> Dotación </RouterLink>
  </div>
</template>
