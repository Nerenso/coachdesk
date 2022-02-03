import { createRouter, createWebHistory } from "vue-router";
import { authRoutes } from "./authRoutes";
import { dashboardRoutes } from "./dashboardRoutes";
import Dash from "../views/Dash.vue";
import Home from "../views/Home.vue";
import Auth from "../views/Auth.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/auth",
    name: "Auth",
    component: Auth,
    children: [...authRoutes],
  },

  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dash,
    children: [...dashboardRoutes],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "bg-red-100 rounded-md opacity-100",
});

export default router;
