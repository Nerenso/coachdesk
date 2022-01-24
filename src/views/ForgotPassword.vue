<template>
  <div class="min-h-screen flex flex-col">
    <div class="relative flex flex-grow">
      <div class="xl:w-8/12 hidden xl:block p-20 bg-gray-100">
        <img src="../assets/login.svg" class="object-contain h-full mx-auto p-5 w-4/5" />
      </div>
      <div class="w-full xl:w-4/12 p-5 xl:p-16 2xl:px-24">
        <img src="../assets/CoachDeskLogo.svg" class="" />
        <div class="mx-auto h-full flex flex-col justify-center py-32 md:px-32 xl:px-0 max-w-screen-sm pt-10">
          <NCard class="" title="Wachtwoord Resetten" size="medium">
            <NForm ref="formRef" :model="formModel" :rules="rules" size="large">
              <NFormItem label="Email" path="user.email">
                <NInput class="" size="large" v-model:value="formModel.user.email" placeholder="John@coachinglife.nl" />
              </NFormItem>
              <div class="flex gap-3">
                <NButton @click="handleReset" class="my-5" type="primary" size="large">Resetten</NButton>
                <NButton @click="returnToLogin" class="my-5" strong secondary size="large">Annuleren</NButton>
              </div>
            </NForm>
          </NCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { NCard, NInput, NForm, NFormItem, NButton } from "naive-ui";
import { useAuthStore } from "../store/authStore";
import { useRouter } from "vue-router";
import { ref } from "@vue/reactivity";
export default {
  name: "ForgotPassword",
  components: {
    NCard,
    NInput,
    NForm,
    NFormItem,
    NButton,
  },
  setup() {
    const router = useRouter();
    const authStore = useAuthStore();
    const formRef = ref(null);
    const formModel = ref({
      user: {
        email: "",
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
      },
    };

    const handleReset = () => {
      authStore.login(formModel.value.user.email, formModel.value.user.password);
    };

    const returnToLogin = () => {
      router.push({ name: "Login" });
    };

    return { formRef, formModel, rules, handleReset, returnToLogin };
  },
};
</script>
