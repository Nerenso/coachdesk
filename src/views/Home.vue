<template>
  <div>
    <h1>CoachDesk</h1>
    <button @click="handleLogout">Logout</button>
  </div>
</template>

<script>
import { useAuthStore } from "../store/authStore";

export default {
  name: "Home",
  setup() {
    const authStore = useAuthStore();

    const handleLogout = () => {
      authStore.logout();
    };

    return { handleLogout };
  },
};
</script>
