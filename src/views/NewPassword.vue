<template>
  <div class="min-h-screen flex flex-col">
    <div class="relative flex flex-grow">
      <div class="xl:w-8/12 hidden xl:block p-20 bg-gray-100">
        <img src="../assets/login.svg" class="object-contain h-full mx-auto p-5 w-4/5" />
      </div>
      <div class="w-full xl:w-4/12 p-5 xl:p-16 2xl:px-24">
        <img src="../assets/CoachDeskLogo.svg" class="" />
        <div class="mx-auto h-full flex flex-col justify-center py-32 md:px-32 xl:px-0 max-w-screen-sm pt-10">
          <NCard class="" title="Wachtwoord Opnieuw Instellen" size="medium">
            <NForm ref="formRef" :model="formModel" :rules="rules" size="large">
              <NFormItem label="Wachtwoord" path="user.password">
                <NInput class="" size="large" type="password" v-model:value="formModel.user.password" placeholder="Wachtwoord" />
              </NFormItem>
              <NFormItem label="Wachtwoord Bevestigen" path="user.confirmPassword">
                <NInput class="" size="large" type="password" v-model:value="formModel.user.confirmPassword" placeholder="Wachtwoord Bevestigen" />
              </NFormItem>
              <div class="flex justify-between items-center">
                <NButton @click="handleUpdatePassword" :disabled="disableSubmit" class="my-5" type="primary" size="large">Instellen</NButton>
              </div>
            </NForm>
          </NCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { NCard, NInput, NForm, NFormItem, NButton, useMessage } from "naive-ui";
import { useAuthStore } from "../store/authStore";
import { useRouter } from "vue-router";
import { ref } from "@vue/reactivity";
import { computed, watchEffect } from "vue-demi";
export default {
  name: "Login",
  components: {
    NCard,
    NInput,
    NForm,
    NFormItem,
    NButton,
  },
  setup() {
    const authStore = useAuthStore();
    const message = useMessage();
    const formRef = ref(null);
    const router = useRouter();

    const errorMsg = computed(() => {
      return authStore.errorMsg;
    });

    const disableSubmit = computed(() => {
      return !formModel.value.user.password || !formModel.value.user.confirmPassword;
    });

    watchEffect(() => {
      if (errorMsg.value) {
        message.error(errorMsg.value, { duration: 5000 });
      }
    });

    const formModel = ref({
      user: {
        password: "",
        confirmPassword: "",
      },
    });

    const rules = {
      user: {
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
                return new Error("Wachtwoorden komen niet met elkaar overeen");
              }
              return true;
            },
            trigger: ["input", "blur"],
          },
        ],
      },
    };

    const handleUpdatePassword = () => {
      formRef.value.validate(async (err) => {
        if (!err) {
          await authStore.updatePassword(formModel.value.user.password);
          if (!errorMsg.value) {
            router.push({ name: "Dashboard" });
          }
        } else {
          message.error("Je wachtwoord voldoet niet aan de gestelde eisen", { duration: 5000 });
        }
      });
    };

    return { formRef, formModel, rules, handleUpdatePassword, disableSubmit };
  },
};
</script>
