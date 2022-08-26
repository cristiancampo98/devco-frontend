<script setup>
import CardComponent from "./CardComponent.vue";
</script>
<template>
  <CardComponent>
    <div class="flex items-center justify-between">
      <h3 class="text-xl text-white">Nuevo equipo</h3>
      <RouterLink to="/equipment" class="text-white btn btn-glass"
        >Ir</RouterLink
      >
    </div>
  </CardComponent>
</template>
