<script setup lang="ts">
import TableComponent from "../components/TableComponent.vue";
import ModalComponent from "../components/ModalComponent.vue";
import EmployeeService from "../services/EmployeeService.js";
import ToastComponent from "../components/ToastComponent.vue";
import AlertComponent from "../components/AlertComponent.vue";
import { onMounted, reactive, ref } from "vue";

const users = ref([]);
const errors = ref([]);
const type = ref("");
const form = reactive({
  name: "",
  email: "",
});

onMounted(() => {
  getAllEmployee();
});

function getAllEmployee() {
  EmployeeService.getAllEmployee().then((res) => {
    users.value = res.data.data;
  });
}
function submit($event) {
  $event.prevent;
  EmployeeService.createEmployee(form)
    .then((res) => {
      if (res.data.status === 200) {
        form.name = "";
        form.email = "";
        errors.value = [];
        type.value = "success";
        getAllEmployee();
      }
      if (res.data.status === 400) {
        errors.value = res.data.errors;
        type.value = "error";
      }
    })
    .catch((error) => {
      console.log(error);
    });

  setTimeout(() => {
    type.value = "";
  }, 3000);
}
</script>

<template>
  <div class="px-10 py-3 space-y-3">
    <div class="flex justify-end">
      <ModalComponent button-title="Agregar" modal-title="Formulario">
        <form @submit.prevent="submit">
          <!-- employee name -->
          <div class="w-full max-w-xs form-control">
            <label class="label">
              <span class="label-text">Nombre</span>
            </label>
            <input
              v-model="form.name"
              type="text"
              placeholder="Escribe el nombre"
              class="w-full max-w-xs input input-bordered"
            />
            <label class="label">
              <span
                v-for="(error, key) in errors.name"
                :key="key"
                class="text-red-500 label-text-alt"
              >
                {{ error }}
              </span>
            </label>
          </div>
          <!-- employee mail -->
          <div class="w-full max-w-xs form-control">
            <label class="label">
              <span class="label-text">Correo</span>
            </label>
            <input
              v-model="form.email"
              type="email"
              placeholder="Escribe el correo"
              class="w-full max-w-xs input input-bordered"
            />
            <label class="label">
              <span
                v-for="(error, key) in errors.email"
                :key="key"
                class="text-red-500 label-text-alt"
              >
                {{ error }}
              </span>
            </label>
          </div>
          <div class="flex justify-end">
            <button class="btn btn-glass">Guardar</button>
          </div>
        </form>
      </ModalComponent>
    </div>
    <TableComponent v-if="users.length">
      <template #header>
        <td></td>
        <th>Nombre</th>
        <th>Email</th>
        <th class="flex justify-center lg:justify-start">Dotación</th>
      </template>
      <template #body>
        <tr v-for="(user, index) in users" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td class="flex justify-center lg:justify-start">
            <span v-if="user.equipment">✔</span>
            <span v-else>⚫</span>
          </td>
        </tr>
      </template>
    </TableComponent>
    <div v-else>
      <AlertComponent message="No hay resultados" />
    </div>
    <ToastComponent v-if="type" :type="type" :time="3" />
  </div>
</template>
