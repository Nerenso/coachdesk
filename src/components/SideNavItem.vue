<template>
  <router-link :to="{ name: pageRoute }">
    <n-tooltip placement="right" trigger="hover">
      <template #trigger>
        <div class="w-10 h-10 p-2 rounded-md text-gray-400 cursor-pointer hover:bg-red-100 hover:text-brand transition-all duration-300">
          <BaseIcon :iconName="iconToRender" />
        </div>
      </template>
      <slot name="pageName">
        <span class="">Nav Link</span>
      </slot>
    </n-tooltip>
  </router-link>
</template>

<script>
import BaseIcon from "./BaseIcon.vue";
import { NTooltip, NIcon } from "naive-ui";

export default {
  components: { NTooltip, NIcon, BaseIcon },
  props: ["icon", "pageRoute"],
  setup(props) {
    const iconToRender = props.icon;
    const pageRoute = props.pageRoute;

    return { iconToRender, pageRoute };
  },
};
</script>

<style scoped>
.router-link-exact-active svg {
  color: #fe6078;
}
</style>
