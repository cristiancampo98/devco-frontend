<script setup lang="ts">
defineProps<{
  message: "";
}>();
</script>

<template>
  <div class="w-full mx-auto shadow-lg alert md:w-3/4 lg:w-3/5">
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        class="flex-shrink-0 w-6 h-6 stroke-info"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
      <span>{{ message }}</span>
    </div>
  </div>
</template>
