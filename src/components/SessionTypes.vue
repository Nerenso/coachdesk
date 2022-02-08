<template>
  <div>
    <BaseHeader
      headerIcon="SessionTypesIcon"
      title="Sessie Soorten"
      subTitle="Wijzig, voeg toe of verwijder sessie soorten die je aanbiedt aan jouw klanten."
    >
      <template #actions>
        <NButton @click="showDrawer = true" size="large" type="primary">Soort Toevoegen</NButton>
      </template>
    </BaseHeader>

    <BaseDrawer
      :showDrawer="showDrawer"
      @drawerClosed="showDrawer = false"
      iconName="SessionTypesIcon"
      title="Soort Toevoegen"
      saveButtonText="Voeg Toe"
      :saveDisabled="false"
    />
    <h1>Session Types</h1>
  </div>
</template>

<script>
import BaseHeader from "./BaseHeader.vue";
import BaseIcon from "./BaseIcon.vue";
import BaseDrawer from "./BaseDrawer.vue";
import { NButton, NDrawer, NDrawerContent } from "naive-ui";
import { ref } from "vue-demi";
export default {
  components: { BaseHeader, NButton, NDrawer, NDrawerContent, BaseIcon, BaseDrawer },
  setup() {
    const showDrawer = ref(false);

    return { showDrawer };
  },
};
</script>

<style></style>
