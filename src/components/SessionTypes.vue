<template>
  <div>
    <BaseHeader
      headerIcon="SessionTypesIcon"
      title="Sessie Soorten"
      subTitle="Wijzig, voeg toe of verwijder sessie soorten die je aanbiedt aan jouw klanten."
    >
      <template #actions>
        <NButton @click="handleShowDrawer" :focusable="false" size="large" type="primary">Soort Toevoegen</NButton>
      </template>
    </BaseHeader>

    <!-- Content -->
    <main class="px-5 py-5 grid grid-cols-1 gap-x-5 gap-y-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4">
      <SessionTypeListItem
        @editClicked="handleEdit(sessionType.id)"
        v-for="sessionType in sessionTypes"
        :key="sessionType.id"
        :sessionTypeTitle="sessionType.type_name"
        :duration="sessionType.type_duration"
        :colorId="sessionType.color_id"
      />
    </main>

    <!-- New Session Type -->
    <BaseDrawer
      :showDrawer="showDrawer"
      @drawerClosed="showDrawer = false"
      iconName="SessionTypesIcon"
      title="Soort Toevoegen"
      saveButtonText="Voeg Toe"
      :saveDisabled="false"
      @saveClicked="handleAddType"
    >
      <template #content>
        <div class="flex flex-col gap-6">
          <div>
            <p class="text-sm mb-2">Titel Sessie Soort</p>
            <NInput v-model:value="sessionTypeTitle" placeholder="Business Coaching" size="large" />
          </div>
          <div>
            <p class="text-sm mb-2">Sessie Tijdsduur</p>
            <NInputNumber v-model:value="sessionTypeDuration" placeholder="90" :show-button="false" size="large">
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

    <!-- Edit Session Type -->
    <BaseDrawer
      :showDrawer="showEditDrawer"
      @drawerClosed="editDrawerClosed"
      iconName="SessionTypesIcon"
      title="Soort Wijzigen"
      saveButtonText="Opslaan"
      :saveDisabled="false"
      @saveClicked="handleUpdateType"
      deleteButtonText="Soort Verwijderen"
    >
      <template #content>
        <div class="flex flex-col gap-6">
          <div>
            <p class="text-sm mb-2">Titel Sessie Soort</p>
            <NInput :focusable="false" v-model:value="editTitle" placeholder="Business Coaching" size="large" />
          </div>
          <div>
            <p class="text-sm mb-2">Sessie Tijdsduur</p>
            <NInputNumber v-model:value="editDuration" placeholder="90" :show-button="false" size="large">
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
                  v-if="colorStore.selectedColor.id === color.id"
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
  </div>
</template>

<script>
import BaseHeader from "./BaseHeader.vue";
import BaseIcon from "./BaseIcon.vue";
import BaseDrawer from "./BaseDrawer.vue";
import SessionTypeListItem from "./SessionTypeListItem.vue";
import { useAuthStore } from "../store/authStore";
import { useSessionColorStore } from "../store/sessionColorStore";
import { useSessionTypeStore } from "../store/sessionTypeStore";
import { NButton, NDrawer, NDrawerContent, NInput, NInputNumber } from "naive-ui";
import { computed, ref, watchEffect } from "vue-demi";
import { v4 as uuid } from "uuid";

export default {
  components: { BaseHeader, NButton, NDrawer, NDrawerContent, BaseIcon, BaseDrawer, NInput, NInputNumber, SessionTypeListItem },
  setup() {
    const showDrawer = ref(false);
    const showEditDrawer = ref(false);
    const authStore = useAuthStore();
    const colorStore = useSessionColorStore();
    const sessionTypeStore = useSessionTypeStore();
    const sessionTypes = computed(() => sessionTypeStore.sessionTypes);
    const sessionTypeTitle = ref("");
    const sessionTypeDuration = ref(null);
    const typeToEdit = computed(() => sessionTypeStore.selectedSessionType);
    const editTitle = ref("");
    const editDuration = ref(null);

    const colors = colorStore.allColors;

    sessionTypeStore.getSessionTypes();

    const handleColorSelect = (id) => {
      colorStore.setSelectedColor(id);
    };

    const handleShowDrawer = () => {
      colorStore.setSelectedColor(1);
      showDrawer.value = true;
    };

    const handleAddType = () => {
      const newType = {
        id: uuid(),
        linked_user_id: authStore.user.id,
        type_name: sessionTypeTitle.value,
        type_duration: sessionTypeDuration.value,
        color_id: colorStore.selectedColor.id,
      };

      sessionTypeStore.addSessionType(newType);
      resetValues();
    };

    const resetValues = () => {
      showDrawer.value = false;
      sessionTypeTitle.value = "";
      sessionTypeDuration.value = null;
      colorStore.setSelectedColor(1);
    };

    const handleEdit = (id) => {
      sessionTypeStore.setSelectedSessionType(id);
      editTitle.value = typeToEdit.value.type_name;
      editDuration.value = typeToEdit.value.type_duration;
      colorStore.setSelectedColor(typeToEdit.value.color_id);
      showEditDrawer.value = true;
    };

    const handleUpdateType = () => {
      sessionTypeStore.updateSessionType(editTitle.value, editDuration.value, colorStore.selectedColor.id);
      editDrawerClosed();
    };

    const editDrawerClosed = () => {
      showEditDrawer.value = false;
      setTimeout(() => {
        sessionTypeStore.setSelectedSessionType(null);
      }, 300);
    };

    return {
      showDrawer,
      colors,
      handleColorSelect,
      colorStore,
      handleShowDrawer,
      sessionTypeTitle,
      sessionTypeDuration,
      handleAddType,
      sessionTypes,
      handleEdit,
      showEditDrawer,
      editDrawerClosed,
      editTitle,
      editDuration,
      handleUpdateType,
    };
  },
};
</script>

<style></style>
