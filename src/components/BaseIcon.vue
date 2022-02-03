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
} from "@vicons/fluent";

export default {
  components: { CalendarIcon, DashboardIcon, SessionTypesIcon, ClientsIcon, FormsIcon, InvoicesIcon },
  props: ["iconName"],
  setup(props) {},
};
</script>

<style></style>
