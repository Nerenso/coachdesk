<template>
  <div class="min-h-screen flex flex-col">
    <div class="relative flex flex-grow">
      <div class="xl:w-8/12 hidden xl:block p-20 bg-gray-100">
        <img src="../assets/login.svg" class="object-contain h-full mx-auto p-5 w-4/5" />
      </div>
      <div class="w-full xl:w-4/12 p-5 xl:p-16 2xl:px-24">
        <img src="../assets/CoachDeskLogo.svg" class="" />
        <div class="mx-auto h-full flex flex-col justify-center py-32 md:px-32 xl:px-0 max-w-screen-sm pt-10">
          <NCard class="" title="Registreren" size="medium">
            <NForm ref="formRef" :model="formModel" :rules="rules" size="large">
              <NFormItem label="Email" path="user.email">
                <NInput class="" size="large" v-model:value="formModel.user.email" placeholder="john@coachinglife.nl" />
              </NFormItem>
              <NFormItem label="Wachtwoord" path="user.password">
                <NInput class="" size="large" type="password" v-model:value="formModel.user.password" placeholder="Jouw Wachtwoord" />
              </NFormItem>
              <NFormItem label="Wachtwoord Bevestigen" path="user.confirmPassword">
                <NInput
                  class=""
                  size="large"
                  type="password"
                  v-model:value="formModel.user.confirmPassword"
                  placeholder="Jouw Wachtwoord Bevestigen"
                />
              </NFormItem>
              <NButton @click="handleLogin" class="my-5" type="primary" size="large">Registreren</NButton>
            </NForm>
          </NCard>
          <div class="text-center mt-12">
            <p>
              Heb je al een account? <router-link :to="{ name: 'Login' }"><span class="text-red-500 font-bold">Inloggen</span></router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { NCard, NInput, NForm, NFormItem, NButton } from "naive-ui";
import { useAuthStore } from "../store/authStore";
import { ref } from "@vue/reactivity";
export default {
  name: "Register",
  components: {
    NCard,
    NInput,
    NForm,
    NFormItem,
    NButton,
  },
  setup() {
    const authStore = useAuthStore();
    const formRef = ref(null);
    const formModel = ref({
      user: {
        email: "",
        password: "",
        confirmPassword: "",
      },
    });

    const rules = {
      user: {
        email: [
          {
            required: true,
            validator(rule, value) {
              if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value.trim())) {
                return true;
              }
              return new Error("Voer een geldig e-mail adres in");
            },
            trigger: ["input", "blur"],
          },
        ],
        password: [
          {
            required: true,
            validator(rule, value) {
              if (value.length < 6) {
                return new Error("Je wachtwoord moet minimaal uit 6 characters bestaan");
              }
              return true;
            },
            trigger: ["input", "blur"],
          },
        ],
        confirmPassword: [
          {
            required: true,
            validator(rule, value) {
              if (value !== formModel.value.user.password) {
                return new Error("Wachtwoorden komen niet overeen met elkaar");
              }
              return true;
            },
            trigger: ["input", "blur"],
          },
        ],
      },
    };

    const handleLogin = () => {
      authStore.login(formModel.value.user.email, formModel.value.user.password);
    };

    return { formRef, formModel, rules, handleLogin };
  },
};
</script>
