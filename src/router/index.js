import { createRouter, createWebHistory } from "vue-router";
import { authRoutes } from "./authRoutes";
import { dashboardRoutes } from "./dashboardRoutes";
import { supabase } from "../supabase/supabase";
import Dash from "../views/Dash.vue";
import Home from "../views/Home.vue";
import Auth from "../views/Auth.vue";

const requireAuth = (to, from, next) => {
  const user = supabase.auth.user();
  if (!user) {
    next({ name: "Login" });
  } else {
    next();
  }
};

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
    beforeEnter: requireAuth,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "bg-red-100 rounded-md opacity-100",
});

export default router;
