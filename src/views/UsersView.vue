<script setup lang="ts">
const users = [
  {
    name: "Jane Done",
    email: "janedone@mail.com",
  },
  {
    name: "pher Done",
    email: "pherdone@mail.com",
  },
];
</script>

<template>
  <ul>
    <li v-for="(user, index) in users" :key="index">{{ user.name }}</li>
  </ul>
</template>
