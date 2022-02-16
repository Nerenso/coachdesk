<template>
  <div>
    <BaseHeader
      headerIcon="SessionTypesIcon"
      title="Sessie Soorten"
      subTitle="Wijzig, voeg toe of verwijder sessie soorten die je aanbiedt aan jouw klanten."
    >
      <template #actions>
        <NButton @click="handleShowDrawer" size="large" type="primary">Soort Toevoegen</NButton>
      </template>
    </BaseHeader>

    <BaseDrawer
      :showDrawer="showDrawer"
      @drawerClosed="showDrawer = false"
      iconName="SessionTypesIcon"
      title="Soort Toevoegen"
      saveButtonText="Voeg Toe"
      :saveDisabled="false"
    >
      <template #content>
        <div class="flex flex-col gap-6">
          <div>
            <p class="text-sm mb-2">Titel Sessie Soort</p>
            <NInput placeholder="Business Coaching" size="large" />
          </div>
          <div>
            <p class="text-sm mb-2">Sessie Tijdsduur</p>
            <NInputNumber placeholder="90" :show-button="false" size="large">
              <template #suffix> minuten </template>
            </NInputNumber>
          </div>
          <div>
            <p class="text-sm mb-2">Label Kleur</p>
            <div class="grid grid-cols-6 gap-x-2 gap-y-3">
              <div
                v-for="color in colors"
                :key="color.id"
                :class="`w-8 h-8 mx-auto cursor-pointer rounded-full bg-${color.tailwindClass} flex items-center justify-center`"
                @click="handleColorSelect(color.id)"
              >
                <div
                  v-if="colorStore.selectedColor?.id === color.id"
                  class="w-6 h-6 bg-white rounded-full bg-opacity-30 flex items-center justify-center"
                >
                  <BaseIcon class="text-white rounded-full h-5 w-5" iconName="CheckBoldIcon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </BaseDrawer>
    <h1>Session Types</h1>
  </div>
</template>

<script>
import BaseHeader from "./BaseHeader.vue";
import BaseIcon from "./BaseIcon.vue";
import BaseDrawer from "./BaseDrawer.vue";
import { useSessionColorStore } from "../store/sessionColorStore";
import { NButton, NDrawer, NDrawerContent, NInput, NInputNumber } from "naive-ui";
import { ref } from "vue-demi";
export default {
  components: { BaseHeader, NButton, NDrawer, NDrawerContent, BaseIcon, BaseDrawer, NInput, NInputNumber },
  setup() {
    const showDrawer = ref(false);
    const colorStore = useSessionColorStore();

    const colors = colorStore.allColors;

    const handleColorSelect = (id) => {
      colorStore.setSelectedColor(id);
    };

    const handleShowDrawer = () => {
      colorStore.setSelectedColor(1);
      showDrawer.value = true;
    };

    return { showDrawer, colors, handleColorSelect, colorStore, handleShowDrawer };
  },
};
</script>

<style></style>
