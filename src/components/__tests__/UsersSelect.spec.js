import { describe, it, expect, vi } from "vitest";
import { shallowMount, flushPromises } from "@vue/test-utils";
import UsersSelect from "../users/UsersSelect.vue";
import { employees, equipments } from "../../mocks/handlers.ts";

const employeesWithout = employees.filter((item) => item.equipment === null);
let objTestEquipment = {}
vi.mock("../../services/EmployeeService", () => {
  return {
    default: {
      getEmployeeWithoutEquipment: vi.fn(() =>
        Promise.resolve({ data: { data: employeesWithout } })
      ),
    },
  };
});
vi.mock("../../services/EquipmentService", () => {
  return {
    default: {
      updateEquipment: vi.fn(() => Promise.resolve(objTestEquipment)),
    },
  };
});

describe("UsersSelect.vue test", () => {
  it("renders list users when mounted", async () => {
    const wrapper = shallowMount(UsersSelect, {
      propsData: {
        equipmentId: 2,
      },
    });
    await flushPromises();
    const users = wrapper.findAll('[data-test="employee-item"]');
    expect(users.length).toBeTruthy();
  });

  it("emitted event when send form successfully", async () => {

    objTestEquipment = {
      data: {
        data: 1,
        status: 200,
      },
    }
    const wrapper = shallowMount(UsersSelect, {
      propsData: {
        equipmentId: 2,
      },
    });
    await flushPromises();
    await wrapper.find("select").setValue();
    await wrapper.find("form").trigger("submit.prevent");
    expect(wrapper.emitted("submit")[0][0]).toStrictEqual({
      data: {
        data: 1,
        status: 200,
      },
    });
  });

  it("emitted event when send form fails", async () => {
    objTestEquipment = {
      data: {
        errors: {
          employee_id: ["The employee id field is required."],
        },
        status: 400,
      },
    }
    const wrapper = shallowMount(UsersSelect, {
      propsData: {
        equipmentId: 2,
      },
    });
    await flushPromises();
    await wrapper.find("select").setValue();
    await wrapper.find("form").trigger("submit.prevent");
    await flushPromises();
    const errors = wrapper.findAll('[data-test="employee-item"]');
    expect(errors.length).toBeTruthy();
  });
});
