<template>
  <div class="min-h-screen flex flex-col">
    <div class="relative flex flex-grow">
      <div class="xl:w-8/12 hidden xl:block p-20 lg:p-28 2xl:p-48 bg-gray-100">
        <img src="../assets/login.svg" class="object-contain h-full mx-auto p-5 w-4/5" />
      </div>
      <div class="w-full xl:w-4/12 p-5 xl:p-16 2xl:px-24">
        <img src="../assets/CoachDeskLogo.svg" class="" />
        <div class="mx-auto h-full flex flex-col justify-center py-32 md:px-32 xl:px-0 max-w-screen-sm pt-10">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useMessage } from "naive-ui";

import { useAuthStore } from "../store/authStore";

import { computed, watchEffect } from "vue-demi";
export default {
  name: "Login",

  setup() {
    const authStore = useAuthStore();
    const message = useMessage();
    const errorMsg = computed(() => {
      return authStore.errorMsg;
    });

    watchEffect(() => {
      if (errorMsg.value) {
        message.error(errorMsg.value, { duration: 5000 });
      }
    });
  },
};
</script>
