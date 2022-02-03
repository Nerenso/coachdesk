<template>
  <div class="h-screen bg-slate-200 flex flex-col">
    <!-- Sitcky TopBar -->
    <nav class="w-full bg-white h-16 mb-16 px-5 shadow-md fixed flex top-0 z-10">
      <img src="../assets/CoachDeskLogo.svg" alt="Coachdesk Logo" class="w-40" />
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
import { NIcon, NTooltip } from "naive-ui";
import {
  CalendarLtr24Regular as CalendarIcon,
  AppFolder24Filled as DashboardIcon,
  SquareMultiple24Filled as SessionTypesIcon,
  FolderPerson20Regular as ClientsIcon,
  Textbox24Regular as FormsIcon,
  ReceiptMoney24Regular as InvoicesIcon,
} from "@vicons/fluent";
export default {
  components: {
    SideNavItem,
    NIcon,
    CalendarIcon,
    DashboardIcon,
    SessionTypesIcon,
    ClientsIcon,
    FormsIcon,
    InvoicesIcon,
    NTooltip,
  },
  setup() {
    const link = "Overview";

    return { link };
  },
};
</script>

<style></style>
