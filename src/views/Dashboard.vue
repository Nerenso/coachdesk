<template>
  <div class="flex flex-col min-h-screen bg-gray-300">
    <div class="h-full relative flex flex-grow bg-green-200 shadow-lg">
      <aside class="h-screen z-10 border-r border-gray-200 w-72 hidden lg:block sticky top-0 bg-white">
        <div class="p-6">
          <img class="w-36" src="../assets/CoachDeskLogo.svg" alt="" />
        </div>
      </aside>
      <div class="w-full bg-gray-50">
        <nav class="w-full h-20 px-7 flex items-center shadow-sm justify-between bg-white sticky top-0">
          <p>Nav Bar</p>
          <button class="py-2 px-4 bg-indigo-500 lg:hidden rounded-md text-white">Menu</button>
        </nav>

        <div class="w-96 h-3/4 p-5 mx-auto">
          <NPopover
            class="bg-white"
            raw
            :overlap="false"
            :show="showPopover"
            width="trigger"
            :show-arrow="false"
            placement="bottom-end"
            @clickoutside="showPopover = !showPopover"
            trigger="manual"
          >
            <template #trigger>
              <NButton @click="showPopover = !showPopover" class="w-full flex justify-between items-center mt-5" size="large" icon-placement="right">
                <template #icon>
                  <n-icon size="16" class="pt-1 ml-3">
                    <cash-icon />
                  </n-icon>
                </template>
                <div v-if="selectedValue" class="-ml-1">{{ selectedValue }}</div>
                <div v-else>Select a Client</div>
              </NButton>
            </template>
            <div class="p-2">
              <NInput size="large" placeholder="Search for Firstname" clearable v-model:value="searchTerm" />
            </div>
            <NScrollbar v-if="filterablePeople" class="max-h-64 w-full p-0">
              <div
                v-for="person in filterablePeople"
                :key="person.id"
                @click="logName(person.name)"
                class="py-2 px-3 border-b border-gray-100 hover:bg-gray-50"
              >
                <h3 class="text-base mb-2 font-medium">
                  {{ person.name }}
                </h3>
                <p class="text-xs text-gray-500">{{ person.job }}</p>
              </div>
            </NScrollbar>
          </NPopover>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { NSelect, NButton, NIcon, NPopover, NScrollbar, NDivider, NInput } from "naive-ui";
import { ChevronDown as CashIcon } from "@vicons/ionicons5";

import { computed, ref, watchEffect } from "vue-demi";
export default {
  components: {
    NSelect,
    NButton,
    CashIcon,
    NIcon,
    NPopover,
    NInput,
    NScrollbar,
    NDivider,
  },
  setup() {
    const selectedValue = ref(null);
    const showPopover = ref(false);
    const searchTerm = ref("");

    const people = [
      {
        name: "John Doe",
        job: "Designer",
        id: 1,
      },
      {
        name: "Vanessa Smith",
        job: "Dentist",
        id: 2,
      },
      {
        name: "Sheldon Cooper",
        job: "Scientist",
        id: 3,
      },
      {
        name: "Johny Bravo",
        job: "Designer",
        id: 4,
      },
      {
        name: "Mona Lisa",
        job: "Dentist",
        id: 5,
      },
      {
        name: "Jenny Anderson",
        job: "Scientist",
        id: 6,
      },
      {
        name: "Arnold James",
        job: "Designer",
        id: 7,
      },
      {
        name: "Raymond Benson",
        job: "Dentist",
        id: 8,
      },
      {
        name: "Phil Davidson",
        job: "Scientist",
        id: 9,
      },
    ];

    const filterablePeople = computed(() => {
      if (searchTerm.value) {
        return people.filter((person) => {
          return person.name.toLowerCase().includes(searchTerm.value.trim().toLowerCase());
        });
      } else {
        return people;
      }
    });

    // watchEffect(() => {
    //   if (searchTerm.value) {
    //     filterablePeople.value = people.filter((person) => {
    //       return person.name.toLowerCase().includes(searchTerm.value.trim().toLowerCase());
    //     });
    //   } else {
    //     filterablePeople.value = people;
    //   }
    // });

    const logName = (name) => {
      selectedValue.value = name;
      showPopover.value = !showPopover.value;
    };

    return { selectedValue, showPopover, logName, searchTerm, filterablePeople };
  },
};
</script>

<style></style>
