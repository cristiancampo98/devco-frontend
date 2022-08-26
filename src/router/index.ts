import { createRouter, createWebHistory } from "vue-router";
import EquipmentView from "../views/EquipmentView.vue";
import HomeView from "../views/HomeView.vue";
import UsersView from "../views/UsersView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/users",
      name: "users",
      component: UsersView,
    },
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/equipment",
      name: "equipment",
      component: EquipmentView,
    },
  ],
});

export default router;
