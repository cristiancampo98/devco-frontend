<script setup>
import CardComponent from "../components/CardComponent.vue";
import { RouterLink } from "vue-router";
</script>
<template>
  <CardComponent>
    <div class="flex items-center justify-between">
      <h3 class="text-xl text-white">Nuevo trabajador</h3>
      <RouterLink to="/users" class="text-white btn btn-glass">Ir</RouterLink>
    </div>
  </CardComponent>
</template>
