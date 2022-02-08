<template>
  <div class="h-screen bg-slate-200 flex flex-col">
    <!-- Sitcky TopBar -->
    <nav class="w-full bg-white h-16 mb-16 px-5 shadow-md fixed flex justify-between top-0 z-10">
      <img src="../assets/CoachDeskLogo.svg" alt="Coachdesk Logo" class="w-40" />

      <NPopover trigger="click" raw :show-arrow="false">
        <template #trigger>
          <div class="flex items-center gap-1 text-gray-400 cursor-pointer hover:text-gray-600 transition-all duration-300">
            <BaseIcon iconName="ProfileIcon" class="w-10 h-10 p-2 shadow-sm rounded-full bg-gray-100" />
            <BaseIcon iconName="ChevronDown" class="w-3 h-3" />
          </div>
        </template>
        <div class="bg-white -mt-3">
          <!-- Settings Button -->
          <div class="flex gap-2 cursor-pointer p-3 items-center hover:bg-gray-50">
            <BaseIcon iconName="SettingsIcon" class="h-6 w-6" />
            <p>Instellingen</p>
          </div>
          <!-- Sign Out Button -->
          <div @click="authStore.logout()" class="flex gap-2 cursor-pointer p-3 items-center hover:bg-gray-50">
            <BaseIcon iconName="SignOutIcon" class="h-6 w-6" />
            <p>Uitloggen</p>
          </div>
        </div>
      </NPopover>
    </nav>

    <div class="w-full flex flex-grow bg-zinc-300">
      <!-- Side NavBar -->
      <div class="w-20 hidden md:block pt-20 px-5 transition-all duration-300">
        <nav class="fixed mt-4 flex flex-col gap-7">
          <SideNavItem pageRoute="Overview" icon="DashboardIcon">
            <template #pageName>Overzicht</template>
          </SideNavItem>

          <SideNavItem pageRoute="Calendar" icon="CalendarIcon">
            <template #pageName> Kalender </template>
          </SideNavItem>

          <SideNavItem pageRoute="Session Types" icon="SessionTypesIcon">
            <template #pageName> Sessie Soorten </template>
          </SideNavItem>

          <SideNavItem pageRoute="Clients" icon="ClientsIcon">
            <template #pageName> Klanten </template>
          </SideNavItem>

          <SideNavItem pageRoute="Forms" icon="FormsIcon">
            <template #pageName> Formulieren </template>
          </SideNavItem>

          <SideNavItem pageRoute="Invoices" icon="InvoicesIcon">
            <template #pageName> Facturen </template>
          </SideNavItem>
        </nav>
      </div>

      <!-- Router View -->
      <div class="w-full bg-gray-100 mt-16">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import SideNavItem from "../components/SideNavItem.vue";
import BaseIcon from "../components/BaseIcon.vue";
import { useAuthStore } from "../store/authStore";
import { NIcon, NTooltip, NPopover } from "naive-ui";

export default {
  components: {
    SideNavItem,
    NIcon,
    NTooltip,
    BaseIcon,
    NPopover,
  },
  setup() {
    const link = "Overview";
    const authStore = useAuthStore();

    return { link, authStore };
  },
};
</script>

<style></style>
