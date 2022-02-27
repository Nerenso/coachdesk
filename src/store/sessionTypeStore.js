import { defineStore } from "pinia";
import { useAuthStore } from "./authStore";
import { supabase } from "../supabase/supabase";

export const useSessionTypeStore = defineStore("sessionTypeStore", {
  state: () => {
    return {
      selectedSessionType: null,
      sessionTypes: [],
    };
  },
  actions: {
    setSelectedSessionType(id) {
      if (id) {
        this.selectedSessionType = this.sessionTypes.find((sessionType) => sessionType.id === id);
      } else {
        this.selectedSessionType = null;
      }
    },

    async updateSessionType(title, duration, colorId) {
      const sessionTypeToUpdate = this.selectedSessionType;

      this.selectedSessionType.type_name = title;
      this.selectedSessionType.type_duration = duration;
      this.selectedSessionType.color_id = colorId;
      try {
        const { error } = await supabase
          .from("session_types")
          .update({
            type_name: title,
            type_duration: duration,
            color_id: colorId,
          })
          .eq("id", this.selectedSessionType.id);
        if (error) throw error;
      } catch (error) {
        console.log(error.message);
        this.selectedSessionType = sessionTypeToUpdate;
      }
    },

    async addSessionType(newType) {
      try {
        const { error } = await supabase.from("session_types").insert([newType]);
        this.getSessionTypes();
        if (error) throw error;
      } catch (error) {
        console.log(error.message);
      }
    },

    async getSessionTypes() {
      const authStore = useAuthStore();

      try {
        const { data, error } = await supabase
          .from("session_types")
          .select("*")
          .eq("linked_user_id", authStore.user.id)
          .order("created_at", { ascending: true });
        if (error) throw error;
        this.sessionTypes = data;
      } catch (error) {
        console.log(error.message);
      }
    },
  },
});
