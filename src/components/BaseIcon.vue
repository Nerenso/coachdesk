<template>
  <component :is="iconName" />
</template>

<script>
import {
  CalendarLtr24Regular as CalendarIcon,
  AppFolder24Filled as DashboardIcon,
  SquareMultiple24Filled as SessionTypesIcon,
  FolderPerson20Regular as ClientsIcon,
  Textbox24Regular as FormsIcon,
  ReceiptMoney24Regular as InvoicesIcon,
  Person16Filled as ProfileIcon,
  SignOut24Regular as SignOutIcon,
  CalendarSettings20Regular as SettingsIcon,
  CheckmarkCircle20Regular as SuccessIcon,
} from "@vicons/fluent";
import { ChevronDown } from "@vicons/ionicons5";

export default {
  components: {
    CalendarIcon,
    DashboardIcon,
    SessionTypesIcon,
    ClientsIcon,
    FormsIcon,
    InvoicesIcon,
    ProfileIcon,
    ChevronDown,
    SignOutIcon,
    SettingsIcon,
    SuccessIcon,
  },
  props: ["iconName"],
  setup(props) {},
};
</script>

<style></style>
