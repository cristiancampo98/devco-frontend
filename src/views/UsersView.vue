<script setup lang="ts">
import TableComponent from "../components/TableComponent.vue";
import ModalComponent from "../components/ModalComponent.vue";
const users = [
  {
    name: "Jane Done",
    email: "janedone@mail.com",
    endowment: true,
  },
  {
    name: "pher Done",
    email: "pherdone@mail.com",
    endowment: false,
  },
];
</script>

<template>
  <div class="px-10 py-3 space-y-3">
    <div class="flex justify-end">
      <ModalComponent button-title="Agregar usuario" modal-title="Formulario">
        todo form
      </ModalComponent>
    </div>

    <TableComponent>
      <template #header>
        <td></td>
        <th>Nombre</th>
        <th>Email</th>
        <th>Dotación</th>
        <th></th>
      </template>
      <template #body>
        <tr v-for="(user, index) in users" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td class="flex justify-center">
            <span v-if="user.endowment">✔</span>
            <span v-else>⚫</span>
          </td>
          <td>actions</td>
        </tr>
      </template>
    </TableComponent>
  </div>
</template>
