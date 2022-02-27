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

const redirectToDashboard = (to, from, next) => {
  const user = supabase.auth.user();
  if (user) {
    next({ name: "Overview" });
  } else {
    next();
  }
};

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    redirect: { name: "Overview" },
  },
  {
    path: "/auth",
    name: "Auth",
    component: Auth,
    children: [...authRoutes],
    beforeEnter: redirectToDashboard,
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
  linkActiveClass: "bg-red-100 text-brand rounded-md opacity-100",
  // linkExactActiveClass: "bg-red-100 text-brand rounded-md opacity-100",
});

export default router;
