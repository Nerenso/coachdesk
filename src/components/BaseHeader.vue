<template>
  <div class="p-5 bg-gray-50 flex justify-between items-center">
    <div class="flex gap-5 items-center">
      <div class="h-14 w-14 rounded-md bg-white shadow-md hidden md:block">
        <BaseIcon :iconName="headerIcon" class="p-3 text-brand" />
      </div>
      <div>
        <h2 class="text-2xl font-semibold">{{ title }}</h2>
        <p class="text-sm text-gray-500 hidden md:block">{{ subTitle }}</p>
      </div>
    </div>
    <slot name="actions"> </slot>
  </div>
</template>

<script>
import BaseIcon from "./BaseIcon.vue";
import { NButton } from "naive-ui";

export default {
  props: ["headerIcon", "title", "subTitle"],
  components: { NButton, BaseIcon },
  setup(props) {},
};
</script>

<style></style>
