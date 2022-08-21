<script setup>
import CardComponent from "../components/CardComponent.vue";
import { RouterLink } from "vue-router";
</script>
<template>
  <CardComponent>
    <div class="flex justify-between items-center">
      <h3 class="text-white text-xl">Crear usuario</h3>
      <RouterLink to="/users" class="btn btn-glass text-white">Ir</RouterLink>
    </div>
  </CardComponent>
</template>
