/* eslint-disable prettier/prettier */
import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import ToastComponent from "../ToastComponent.vue";

describe("ToastComponent.vue test", () => {
  it("renders message when component is created and type is success", () => {
    const wrapper = shallowMount(ToastComponent, {
      propsData: {
        type: "success",
      },
    });

    expect(wrapper.text()).toMatch("Guardado con exito.");
  });

  it("renders message when component is created and type is error", () => {
    const wrapper = shallowMount(ToastComponent, {
      propsData: {
        type: "error",
      },
    });

    expect(wrapper.text()).toMatch("Oops! Algo falló.");
  });

  it("does not render an alert error", () => {
    const wrapper = shallowMount(ToastComponent, {
      propsData: {
        type: "success",
      },
    });

    expect(wrapper.find(".alert-error").exists()).toBe(false);
  });
});
