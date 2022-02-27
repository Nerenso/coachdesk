<template>
  <div v-if="client">
    <!-- <BaseHeader></BaseHeader> -->
    Client Details Page
    {{ client.name }}
    {{ client.email }}
  </div>
</template>

<script>
import BaseHeader from "./BaseHeader.vue";
import { useClientStore } from "../store/clientStore";
export default {
  components: { BaseHeader },
  props: ["id"],
  setup(props) {
    const clientStore = useClientStore();

    const client = clientStore.getClient(parseInt(props.id));

    return { client };
  },
};
</script>

<style></style>
