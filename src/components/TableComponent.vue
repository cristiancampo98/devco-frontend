<script setup lang="ts"></script>
<template>
  <div class="w-full mx-auto overflow-x-auto md:w-3/4 lg:w-3/5">
    <table class="table w-full">
      <!-- head -->
      <thead>
        <tr>
          <slot name="header"></slot>
        </tr>
      </thead>
      <tbody>
        <slot name="body"></slot>
      </tbody>
    </table>
  </div>
</template>
