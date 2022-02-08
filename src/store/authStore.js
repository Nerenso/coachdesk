import { defineStore } from "pinia";
import { useRouter } from "vue-router";
import { supabase } from "../supabase/supabase";

export const useAuthStore = defineStore("authStore", {
  state: () => {
    return {
      user: null,
      authEventType: null,
      errorMsg: null,
    };
  },
  actions: {
    async login(email, password) {
      try {
        const { error } = await supabase.auth.signIn({
          email,
          password,
        });

        if (error) throw error;
      } catch (error) {
        this.setError(error.message);
      }
    },

    async logout() {
      const { error } = await supabase.auth.signOut();
    },

    async register(email, password) {
      try {
        const { error } = await supabase.auth.signUp({ email, password });

        if (error) throw error;
      } catch (error) {
        this.setError(error.message);
      }
    },

    async sendResetPasswordMail(email) {
      try {
        const { error } = await supabase.auth.api.resetPasswordForEmail(email);
        if (error) throw error;
      } catch (error) {
        this.setError(error.message);
      }
    },

    async updatePassword(password) {
      try {
        const { error } = await supabase.auth.update({ password });

        if (error) throw error;
      } catch (error) {
        this.setError(error.message);
      }
    },

    setUser(session) {
      this.user = session ? session.user : null;
    },

    setError(message) {
      this.errorMsg = message;
      setTimeout(() => {
        this.errorMsg = null;
      }, 6000);
    },

    setAuthEventType(event) {
      this.authEventType = event;
    },
  },
});
