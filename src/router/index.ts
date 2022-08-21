import { createRouter, createWebHistory } from "vue-router";
import EndowmentView from "../views/EndowmentView.vue";
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
      path: "/endowment",
      name: "endowment",
      component: EndowmentView,
    },
  ],
});

export default router;
