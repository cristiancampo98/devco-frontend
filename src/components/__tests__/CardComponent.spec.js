/* eslint-disable prettier/prettier */
import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import CardComponent from "../CardComponent.vue";

describe("CardComponent.vue test", () => {
    it("renders slot when component is created and type is success", () => {
        const wrapper = shallowMount(CardComponent, {
            slots: {
                default: 'Main content'
            }
        });

        expect(wrapper.html()).toContain("Main content");
    });
});
