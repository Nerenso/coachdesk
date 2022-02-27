<template>
  <div>
    <BaseHeader headerIcon="ClientsIcon" title="Klanten" subTitle="Bekijk, wijzig en creëer klant dossiers.">
      <template #actions>
        <NButton @click="handleShowDrawer" size="large" type="primary">Klant Toevoegen</NButton>
      </template>
    </BaseHeader>

    <!-- Clients Main Content -->
    <div class="p-6">
      <h1>Clients</h1>
      <div class="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-6">
        <!-- Client List -->
        <div
          v-for="client in clients"
          :key="client.id"
          @click="showDetail(client.id)"
          class="py-6 px-6 cursor-pointer flex flex-col gap-6 rounded-md bg-white shadow-sm transition-all duration-300 hover:shadow-xl"
        >
          <div class="flex justify-between">
            <img class="h-28 w-28 border-4 border-white shadow-md rounded-full" src="../assets/user.svg" alt="" />
            <div class="flex flex-col gap-3">
              <NButton
                @click.stop="handleEdit(client.id)"
                strong
                secondary
                :focusable="false"
                circle
                class="text-gray-400 transition-all duration-300 hover:text-gray-700"
              >
                <template #icon>
                  <BaseIcon iconName="EditIcon" />
                </template>
              </NButton>
              <NButton strong secondary circle class="text-gray-400 transition-all duration-300 hover:text-red-500">
                <template #icon>
                  <BaseIcon iconName="DeleteIcon" />
                </template>
              </NButton>
            </div>
          </div>
          <div>
            <label class="text-sm">Naam</label>
            <h2 class="text-base font-medium">{{ client.name }}</h2>
          </div>
          <div>
            <label class="text-sm">Email</label>
            <p class="text-xs text-gray-500">{{ client.email }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { NButton } from "naive-ui";
import { useRouter } from "vue-router";
import BaseHeader from "./BaseHeader.vue";
import BaseIcon from "./BaseIcon.vue";
export default {
  components: { BaseHeader, NButton, BaseIcon },
  setup() {
    const router = useRouter();
    const handleShowDrawer = () => {
      //
    };

    const showDetail = (id) => {
      router.push({ name: "Client Detail", params: { id } });
    };

    const clients = [
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
    ];

    const handleEdit = (id) => {
      console.log(`Edit clicked on ${id}`);
    };

    return { handleShowDrawer, clients, showDetail, handleEdit };
  },
};
</script>

<style></style>
