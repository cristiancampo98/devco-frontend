<script setup lang="ts">
const props = defineProps<{
  type: string;
  message?: string;
}>();
</script>
<template>
  <div class="toast toast-end">
    <div v-if="props.type === 'success'" class="alert alert-success">
      <div>
        <span> {{ message ? message : "Guardado con exito." }}</span>
      </div>
    </div>
    <div v-if="props.type === 'error'" class="alert alert-error">
      <div>
        <span>{{ message ? message : "Oops! Algo falló." }}</span>
      </div>
    </div>
  </div>
</template>
