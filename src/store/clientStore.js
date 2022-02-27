import { defineStore } from "pinia";

export const useClientStore = defineStore("clientStore", {
  state: () => {
    return {
      clients: [
        { id: 1, name: "John Smith", email: "john@smith.com" },
        { id: 2, name: "Dennis da Silva", email: "dennis@smith.com" },
        { id: 3, name: "Antoinne Maccintosh", email: "john@smith.com" },
        { id: 4, name: "Johan Eijkelenboom", email: "john@smith.com" },
        { id: 5, name: "Vanessa de Jong", email: "john@smith.com" },
        { id: 6, name: "Jessica Boskamp", email: "john@smith.com" },
        { id: 7, name: "John Smith", email: "john@smith.com" },
        { id: 8, name: "Dennis da Silva", email: "dennis@smith.com" },
        { id: 9, name: "Antoinne Maccintosh", email: "john@smith.com" },
        { id: 10, name: "Johan Eijkelenboom", email: "john@smith.com" },
        { id: 11, name: "Vanessa de Jong", email: "john@smith.com" },
        { id: 12, name: "Jessica Boskamp", email: "john@smith.com" },
      ],
    };
  },
  actions: {
    getClient(id) {
      const foundClient = this.clients.find((client) => client.id === id);
      return foundClient;
    },
  },
});
