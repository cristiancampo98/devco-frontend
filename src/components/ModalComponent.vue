<script setup lang="ts">
defineProps<{
  buttonTitle: string;
  modalTitle: string;
}>();
</script>
<template>
  <!-- The button to open modal -->
  <label for="my-modal-3" class="btn modal-button">{{ buttonTitle }}</label>

  <!-- Put this part before </body> tag -->
  <input type="checkbox" id="my-modal-3" class="modal-toggle" />
  <div class="modal">
    <div class="modal-box relative">
      <label
        for="my-modal-3"
        class="btn btn-sm btn-circle absolute right-2 top-2"
        >✕</label
      >
      <h3 class="text-lg font-bold">{{ modalTitle }}</h3>
      <slot></slot>
    </div>
  </div>
</template>
