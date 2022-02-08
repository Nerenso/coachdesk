import { defineStore } from "pinia";
import { supabase } from "../supabase/supabase";

export const useAccountStore = defineStore("accountStore", {
  state: () => {
    return {
      userAccount: null,
      errorMsg: null,
    };
  },
  actions: {
    setUserAccount() {},

    async createUserAccount(user) {
      console.log(user.id);
      try {
        const { error } = await supabase.from("userAccount").insert([{ id: user.id }]);
        if (error) throw error;
      } catch (error) {
        this.setError(error.message);
      }
    },

    setError(message) {
      this.errorMsg = message;
      setTimeout(() => {
        this.errorMsg = null;
      }, 6000);
    },
  },
});
