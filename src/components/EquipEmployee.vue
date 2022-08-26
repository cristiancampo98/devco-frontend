<script setup>
import CardComponent from "./CardComponent.vue";
import ModalComponent from "./ModalComponent.vue";
import ToastComponent from "../components/ToastComponent.vue";
import UsersSelect from "./users/UsersSelect.vue";

import EquipmentService from "../services/EquipmentService.js";

import { ref, watch } from "vue";

const equipmentId = ref("");
const equipment = ref({});
const message = ref("");
const type = ref("");

function submit() {
  type.value = "";
  EquipmentService.getById(equipmentId.value).then((res) => {
    if (res.data.status === 200) {
      equipment.value = res.data.data;
    } else {
      equipmentId.value = "";
      message.value = res.data.errors;
      type.value = "error";
    }
  });
}
function clearEquipment() {
  equipmentId.value = "";
  equipment.value = {};
}

function getEvent(data) {
  message.value = "";
  if (data.data.status === 200) {
    type.value = "success";
  }
  if (data.data.status === 400) {
    type.value = "error";
    message.value = data.data.errors;
  }
  clearEquipment();
}

watch(type, () => {
  if (type.value) {
    setTimeout(() => {
      type.value = "";
    }, 3000);
  }
});
</script>
<template>
  <CardComponent>
    <ModalComponent
      button-title="Dotar empleado"
      modal-title="Asignar dotación a empleado"
    >
      <form v-if="!Object.keys(equipment).length" @submit.prevent="submit">
        <div class="mt-2 form-control">
          <div class="input-group">
            <input
              v-model="equipmentId"
              type="text"
              placeholder="Buscar equipo"
              class="w-full input input-bordered"
            />
            <button :disabled="!equipmentId" class="btn btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </form>
      <div v-else>
        <ul>
          <h3>{{ equipment.name }}</h3>
          <li>{{ equipment.so }}</li>
          <li>{{ equipment.type }}</li>
        </ul>
        <div class="flex flex-col mt-3 space-y-3">
          <UsersSelect :equipment-id="equipment.id" @submit="getEvent" />
          <div>
            <button class="btn btn-outline" @click="clearEquipment">
              Limpiar
            </button>
          </div>
        </div>
      </div>
    </ModalComponent>
  </CardComponent>
  <ToastComponent v-if="type" :type="type" :message="message" />
</template>
