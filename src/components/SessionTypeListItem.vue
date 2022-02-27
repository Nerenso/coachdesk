<template>
  <section>
    <!-- Title and Duration -->
    <div :class="`p-5 bg-white flex items-center justify-between rounded-md border-l-4 border-${retrieveColor()}`">
      <div>
        <h3 class="text-base font-medium mb-1">{{ sessionTypeTitle }}</h3>
        <p class="text-xs text-gray-500">{{ duration }} minuten</p>
      </div>

      <!-- Edit Button -->
      <div>
        <NButton @click="handleEdit" :focusable="false" strong secondary circle class="text-gray-400 transition-all duration-300 hover:text-gray-700">
          <template #icon>
            <BaseIcon iconName="EditIcon" />
          </template>
        </NButton>
      </div>
    </div>
  </section>
</template>

<script>
import { NButton } from "naive-ui";
import { useSessionColorStore } from "../store/sessionColorStore";
import BaseIcon from "./BaseIcon.vue";

export default {
  props: ["sessionTypeTitle", "duration", "colorId"],
  components: { NButton, BaseIcon },
  setup(props, context) {
    const colorStore = useSessionColorStore();

    const retrieveColor = () => {
      const color = colorStore.getColor(props.colorId);
      return color.tailwindClass;
    };

    const handleEdit = () => {
      context.emit("editClicked");
    };

    return { retrieveColor, handleEdit };
  },
};
</script>

<style></style>
