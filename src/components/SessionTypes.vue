<template>
  <BaseHeader
    headerIcon="SessionTypesIcon"
    title="Sessie Soorten"
    subTitle="Wijzig, voeg toe of verwijder sessie soorten die je aanbiedt aan jouw klanten."
  >
    <template #actions>
      <NButton @click="showDrawer = true" size="large" type="primary">Soort Toevoegen</NButton>
    </template>
  </BaseHeader>

  <NDrawer v-model:show="showDrawer" :width="330">
    <NDrawerContent closable>
      <template #header>
        <div class="flex gap-2 items-center">
          <BaseIcon class="w-5 h-5 text-brand" iconName="SessionTypesIcon" />
          <p class="py-2">Soort Toevoegen</p>
        </div>
      </template>
    </NDrawerContent>
  </NDrawer>
  <h1>Session Types</h1>
</template>

<script>
import BaseHeader from "./BaseHeader.vue";
import BaseIcon from "./BaseIcon.vue";
import { NButton, NDrawer, NDrawerContent } from "naive-ui";
import { ref } from "vue-demi";
export default {
  components: { BaseHeader, NButton, NDrawer, NDrawerContent, BaseIcon },
  setup() {
    const showDrawer = ref(false);

    return { showDrawer };
  },
};
</script>

<style></style>
