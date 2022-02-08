<template>
  <div>
    <BaseHeader headerIcon="InvoicesIcon" title="Facturen" subTitle="Bekijk alle gegenereerde facturen, wijzig je factuur sjabloon.">
      <template v-if="selectedTab === 'factuur sjabloon'" #actions>
        <XyzTransition appear xyz="small-100% origin-center duration-2">
          <NButton size="large" type="primary">Facturatie Instellingen</NButton>
        </XyzTransition>
      </template>
    </BaseHeader>

    <NTabs class="px-5 bg-gray-50 h-10" type="line" size="medium" @update:value="handleUpdate">
      <NTabPane name="alle facturen" tab="Alle Facturen">
        <h1>Invoices</h1>
      </NTabPane>
      <NTabPane name="factuur sjabloon" tab="Factuur Sjabloon"></NTabPane>
    </NTabs>
  </div>
</template>

<script>
import BaseHeader from "./BaseHeader.vue";
import { NTabs, NTabPane, NButton } from "naive-ui";
import { onBeforeUnmount, ref } from "vue-demi";

export default {
  components: { BaseHeader, NTabPane, NTabs, NButton },
  setup() {
    const selectedTab = ref(null);

    const handleUpdate = (value) => {
      selectedTab.value = value;
    };

    onBeforeUnmount(() => {
      console.log("Invoices Unmounted");
    });

    return { handleUpdate, selectedTab };
  },
};
</script>

<style></style>
