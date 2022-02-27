<template>
  <div>
    <BaseHeader headerIcon="CalendarIcon" title="Kalender" subTitle="Plan sessies en evenementen">
      <template #actions>
        <NButton type="primary" size="large">Event Inplannen</NButton>
      </template>
    </BaseHeader>
    <h1>Calendar</h1>
  </div>
</template>

<script>
import BaseHeader from "./BaseHeader.vue";
import { NButton } from "naive-ui";
export default {
  components: { BaseHeader, NButton },
};
</script>

<style></style>
