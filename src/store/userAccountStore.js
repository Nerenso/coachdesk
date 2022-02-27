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

    setError(message) {
      this.errorMsg = message;
      setTimeout(() => {
        this.errorMsg = null;
      }, 6000);
    },
  },
});
