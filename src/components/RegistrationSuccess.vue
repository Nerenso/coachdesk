<template>
  <div>
    <NCard size="medium">
      <div class="flex flex-col gap-4">
        <BaseIcon class="text-green-400 w-20 h-20 -ml-2" iconName="SuccessIcon" />
        <h2 class="text-2xl font-semibold">Registratie Voltooid!</h2>
        <p>Er is een mailtje onderweg naar jouw inbox met een activatielink, klik op de link in de mail om je account te activeren.</p>
        <p>Heb je na 5 minuten nog niets ontvangen? Check dan even in je spam map.</p>
        <p>
          Lukt het niet? <span><a href="#" class="text-brand font-bold">Mail ons</a> dan helpen we je graag verder. </span>
        </p>
      </div>
    </NCard>
  </div>
</template>

<script>
import { NCard } from "naive-ui";
import BaseIcon from "./BaseIcon.vue";

export default {
  name: "Register",
  components: {
    NCard,
    BaseIcon,
  },
  setup() {},
};
</script>
