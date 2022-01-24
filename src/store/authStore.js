import { defineStore } from "pinia";

export const useAuthStore = defineStore("authStore", {
  state: () => {
    return {
      user: null,
    };
  },
  actions: {
    login(email, password) {
      console.log(email, password);
    },
    register() {
      //
    },
    setUser() {
      //
    },
  },
});
