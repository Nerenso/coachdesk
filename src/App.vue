<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <router-view />
  </n-config-provider>
</template>

<script>
import { NConfigProvider } from "naive-ui";

export default {
  components: { NConfigProvider },
  setup() {
    return {
      themeOverrides: {
        common: {
          primaryColor: "#FE6078",
          primaryColorHover: "#FD8772",
          primaryColorPressed: "#CB4D60",
        },
      },
    };
  },
};
</script>
