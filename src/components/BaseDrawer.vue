<template>
  <NDrawer :auto-focus="false" v-model:show="showDrawer" @update:show="handleClose" :width="338">
    <NDrawerContent closable>
      <template #header>
        <div class="flex gap-2 items-center">
          <BaseIcon class="w-5 h-5 text-brand" :iconName="iconName" />
          <p class="py-2">{{ title }}</p>
        </div>
      </template>

      <slot name="content"></slot>

      <template #footer>
        <div class="flex gap-4">
          <NButton size="large" ghost type="error" v-if="deleteButtonText">{{ deleteButtonText }}</NButton>
          <NButton @click="handleSave" :disabled="saveDisabled" type="success" size="large">{{ saveButtonText }}</NButton>
        </div>
      </template>
    </NDrawerContent>
  </NDrawer>
</template>

<script>
import { NDrawer, NDrawerContent, NButton } from "naive-ui";
import BaseIcon from "./BaseIcon.vue";
export default {
  props: ["showDrawer", "title", "iconName", "saveButtonText", "saveDisabled", "deleteButtonText"],
  components: { NDrawer, NDrawerContent, BaseIcon, NButton },
  setup(props, context) {
    const handleClose = () => {
      context.emit("drawerClosed");
    };

    const handleSave = () => {
      context.emit("saveClicked");
    };

    return { handleClose, handleSave };
  },
};
</script>

<style></style>
