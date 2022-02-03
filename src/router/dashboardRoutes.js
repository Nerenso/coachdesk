import Overview from "../components/Overview.vue";
import Calendar from "../components/Calendar.vue";
import SessionTypes from "../components/SessionTypes.vue";
import Clients from "../components/Clients.vue";
import Forms from "../components/Forms.vue";
import Invoices from "../components/Invoices.vue";

export const dashboardRoutes = [
  {
    path: "",
    redirect: { name: "Overview" },
  },
  {
    path: "overview",
    name: "Overview",
    component: Overview,
  },
  {
    path: "calendar",
    name: "Calendar",
    component: Calendar,
  },
  {
    path: "sessiontypes",
    name: "Session Types",
    component: SessionTypes,
  },
  {
    path: "clients",
    name: "Clients",
    component: Clients,
  },
  {
    path: "forms",
    name: "Forms",
    component: Forms,
  },
  {
    path: "invoices",
    name: "Invoices",
    component: Invoices,
  },
];
