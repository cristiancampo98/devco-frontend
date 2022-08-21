<script setup lang="ts">
import TableComponent from "../components/TableComponent.vue";
import ModalComponent from "../components/ModalComponent.vue";
const computers = [
  {
    id: 123456,
    name: "Asus D1030",
    so: "Windows 11",
    type: "Mesa",
  },
  {
    id: 342516,
    name: "HP Phantom",
    so: "Windows 10",
    type: "Mesa",
  },
];
</script>

<template>
  <div class="px-10 py-3 space-y-3">
    <div class="flex justify-end">
      <ModalComponent button-title="Agregar equipo" modal-title="Formulario">
        todo form
      </ModalComponent>
    </div>

    <TableComponent>
      <template #header>
        <td></td>
        <th>Nombre</th>
        <th>SO</th>
        <th>Tipo</th>
        <th></th>
      </template>
      <template #body>
        <tr v-for="(computer, index) in computers" :key="index">
          <td>{{ computer.id }}</td>
          <td>{{ computer.name }}</td>
          <td>{{ computer.so }}</td>
          <td>{{ computer.type }}</td>

          <td>actions</td>
        </tr>
      </template>
    </TableComponent>
  </div>
</template>
