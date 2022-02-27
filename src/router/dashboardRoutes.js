import Overview from "../components/Overview.vue";
import Calendar from "../components/Calendar.vue";
import SessionTypes from "../components/SessionTypes.vue";
import ClientsList from "../components/ClientsList.vue";
import Clients from "../views/Clients.vue";
import Forms from "../components/Forms.vue";
import Invoices from "../components/Invoices.vue";
import Quotes from "../components/Quotes.vue";
import ClientDetail from "../components/ClientDetail.vue";

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
    children: [
      {
        path: "",
        name: "Clients List",
        component: ClientsList,
      },
      {
        path: ":id",
        name: "Client Detail",
        component: ClientDetail,
        props: true,
      },
    ],
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
  {
    path: "quotes",
    name: "Quotes",
    component: Quotes,
  },
];
