<script setup lang="ts">
import EmployeeService from "../../services/EmployeeService.js";
import EquipmentService from "../../services/EquipmentService.js";
import { ref, onMounted, reactive } from "vue";

const emit = defineEmits(["submit"]);

const props = defineProps<{
  equipmentId: number;
}>();

onMounted(() => {
  getEmployeeWithoutEquipment();
});

const form = reactive({
  employee_id: null,
});

const users = ref([]);
const errors = ref({});

async function getEmployeeWithoutEquipment() {
  const result = await EmployeeService.getEmployeeWithoutEquipment();
  users.value = result.data.data;
}

function submit() {
  EquipmentService.updateEquipment(props.equipmentId, form).then((res) => {
    if (res.data.status === 200) {
      form.employee_id = null;
      emit("submit", res);
    }
    if (res.data.status === 400) {
      errors.value = res.data.errors;
    }
  });
}
</script>
<template>
  <form @submit.prevent="submit">
    <div class="form-control">
      <div class="input-group">
        <select v-model="form.employee_id" class="w-3/4 select select-bordered">
          <option disabled selected>Seleccione un usuario</option>
          <option
            v-for="(user, index) in users"
            :key="index"
            :value="user.id"
            data-test="employee-item"
          >
            {{ user.name }}
          </option>
        </select>
        <button class="btn">Asignar</button>
      </div>
    </div>
    <label v-if="Object.keys(errors).length" class="label">
      <span
        v-for="(error, key) in errors.employee_id"
        :key="key"
        class="text-red-500 label-text-alt"
        data-test="error-item"
      >
        {{ error }}
      </span>
    </label>
  </form>
</template>
