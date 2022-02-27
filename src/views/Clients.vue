<template>
  <router-view v-slot="{ Component }">
    <XyzTransition appear xyz="fade right-1 duration-3" mode="out-in">
      <component :is="Component" />
    </XyzTransition>
  </router-view>
</template>

<script>
export default {};
</script>

<style></style>
