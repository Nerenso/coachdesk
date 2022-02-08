<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <n-message-provider>
      <div v-if="appReady">
        <router-view v-slot="{ Component }">
          <XyzTransition appear xyz="fade down-1 duration-3" mode="out-in">
            <component :is="Component" />
          </XyzTransition>
        </router-view>
      </div>
    </n-message-provider>
  </n-config-provider>
</template>

<script>
import { NConfigProvider, NMessageProvider } from "naive-ui";
import { useRouter } from "vue-router";
import { useAuthStore } from "./store/authStore";
import { supabase } from "./supabase/supabase";
import { ref, watchEffect } from "vue-demi";

export default {
  components: { NConfigProvider, NMessageProvider },
  setup() {
    const appReady = ref(false);
    const router = useRouter();
    const user = supabase.auth.user();
    const authStore = useAuthStore();

    if (!user) {
      appReady.value = true;
    }

    supabase.auth.onAuthStateChange((event, session) => {
      authStore.setUser(session);
      authStore.setAuthEventType(event);
      console.log(event);
      appReady.value = true;
    });

    watchEffect(() => {
      if (authStore.authEventType === "PASSWORD_RECOVERY") {
        router.push({ name: "NewPassword" });
      }
      if (authStore.authEventType === "SIGNED_OUT") {
        router.push({ name: "Login" });
      }
    });

    return {
      appReady,
      themeOverrides: {
        common: {
          primaryColor: "#FE6078",
          primaryColorHover: "#FD8772",
          primaryColorPressed: "#CB4D60",
          successColor: "#17D1A1",
          successColorHover: "#45DAB4",
          successColorPressed: "#15BC91",
        },
      },
    };
  },
};
</script>

<style>
html {
  overflow-x: hidden;
  overflow-y: scroll;
}
</style>
