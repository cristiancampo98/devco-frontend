<script setup lang="ts">
import EquipmentService from "../services/EquipmentService.js";
import TableComponent from "../components/TableComponent.vue";
import ModalComponent from "../components/ModalComponent.vue";
import ToastComponent from "../components/ToastComponent.vue";
import AlertComponent from "../components/AlertComponent.vue";
import { onMounted, ref, reactive } from "vue";
const computers = ref([]);
const errors = ref([]);
const type = ref("");
const form = reactive({
  name: "",
  so: "",
  type: "",
});

onMounted(() => {
  getAllEquipment();
});

function getAllEquipment() {
  EquipmentService.getAllEquipment().then((res) => {
    computers.value = res.data.data;
  });
}

function submit($event) {
  $event.prevent;
  EquipmentService.createEquipment(form)
    .then((res) => {
      if (res.data.status === 200) {
        form.name = "";
        form.so = "";
        form.type = "";
        errors.value = [];
        type.value = "success";
        getAllEquipment();
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
          <!-- computer name -->
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
          <!-- computer mail -->
          <div class="w-full max-w-xs form-control">
            <label class="label">
              <span class="label-text">SO</span>
            </label>
            <select v-model="form.so" class="select select-bordered">
              <option disabled selected>Seleccione un SO</option>
              <option value="Windows 11">Windows 11</option>
              <option value="Windows 10">Windows 10</option>
              <option value="Windows 8">Windows 8</option>
              <option value="Linux Ubuntu">Ubuntu</option>
              <option value="Linux Mint">Mint</option>
              <option value="MacOs">Mac</option>
            </select>
            <label class="label">
              <span
                v-for="(error, key) in errors.so"
                :key="key"
                class="text-red-500 label-text-alt"
              >
                {{ error }}
              </span>
            </label>
          </div>
          <!-- computer type -->
          <div class="w-full max-w-xs form-control">
            <label class="label">
              <span class="label-text">Tipo</span>
            </label>
            <div class="form-control">
              <label class="cursor-pointer label">
                <span class="label-text">Desktop</span>
                <input
                  v-model="form.type"
                  value="desktop"
                  type="radio"
                  name="radio-6"
                  class="radio checked:bg-red-500"
                />
              </label>
            </div>
            <div class="form-control">
              <label class="cursor-pointer label">
                <span class="label-text">Laptop</span>
                <input
                  v-model="form.type"
                  value="laptop"
                  type="radio"
                  name="radio-6"
                  class="radio checked:bg-blue-500"
                />
              </label>
            </div>
            <label class="label">
              <span
                v-for="(error, key) in errors.type"
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

    <TableComponent v-if="computers.length">
      <template #header>
        <td></td>
        <th>Nombre</th>
        <th>SO</th>
        <th>Tipo</th>
      </template>
      <template #body>
        <tr v-for="(computer, index) in computers" :key="index">
          <td>{{ computer.id }}</td>
          <td>{{ computer.name }}</td>
          <td>{{ computer.so }}</td>
          <td>{{ computer.type }}</td>
        </tr>
      </template>
    </TableComponent>
    <div v-else>
      <AlertComponent message="No hay resultados" />
    </div>
    <ToastComponent v-if="type" :type="type" :time="3" />
  </div>
</template>
<style scoped>
td {
  text-transform: capitalize;
}
</style>
