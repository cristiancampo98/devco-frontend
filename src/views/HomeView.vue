<script setup>
import UserCard from "../components/UserCard.vue";
import EquipmentCard from "../components/EquipmentCard.vue";
import EquipEmployee from "../components/EquipEmployee.vue";
import CardComponent from "../components/CardComponent.vue";
import TableComponent from "../components/TableComponent.vue";
import AlertComponent from "../components/AlertComponent.vue";
import EmployeeService from "../services/EmployeeService.js";

import { ref, onMounted } from "vue";

onMounted(() => {
  getAllEmployee();
});

const users = ref([]);
function getAllEmployee() {
  EmployeeService.getEmployeeWithEquipment().then((res) => {
    users.value = res.data.data;
  });
}

function formatDate(date) {
  const newDate = new Date(date);

  const dateFormat = newDate
    .toLocaleDateString("es-CO", {
      month: "long",
      day: "numeric",
      year: "numeric",
    })
    .split(" ");
  return parseInt(dateFormat[0]) + "/" + dateFormat[2] + "/" + dateFormat[4];
}
</script>
<template>
  <div
    class="flex flex-col mt-20 mb-10 space-y-10 md:space-y-0 md:flex-row md:justify-around"
  >
    <div class="flex justify-center flex-auto">
      <UserCard />
    </div>
    <div class="flex justify-center flex-auto">
      <EquipmentCard />
    </div>
    <div class="flex justify-center flex-auto">
      <EquipEmployee />
    </div>
  </div>
  <div v-if="users.length" class="flex justify-center px-12 lg:px-36">
    <TableComponent>
      <template #header>
        <td></td>
        <th>Nombre</th>
        <th>Equipo</th>
        <th>Fecha de dotación</th>
        <th></th>
      </template>
      <template #body>
        <tr v-for="(user, index) in users" :key="index">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.equipment.name }}</td>
          <td>{{ formatDate(user.equipment.updated_at) }}</td>
        </tr>
      </template>
    </TableComponent>
  </div>
  <div v-else class="px-10">
    <AlertComponent message="No hay empleados con dotación" />
  </div>
</template>
