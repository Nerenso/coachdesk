<template>
  <NCard class="" title="Registreren" size="medium">
    <NForm ref="formRef" :model="formModel" :rules="rules" size="large">
      <NFormItem label="Email" path="user.email">
        <NInput class="" size="large" v-model:value="formModel.user.email" placeholder="john@coachinglife.nl" />
      </NFormItem>
      <NFormItem label="Wachtwoord" path="user.password">
        <NInput class="" size="large" type="password" v-model:value="formModel.user.password" placeholder="Jouw Wachtwoord" />
      </NFormItem>
      <NFormItem label="Wachtwoord Bevestigen" path="user.confirmPassword">
        <NInput class="" size="large" type="password" v-model:value="formModel.user.confirmPassword" placeholder="Jouw Wachtwoord Bevestigen" />
      </NFormItem>
      <NButton @click="handleRegister" :disabled="formModel.user.confirmPassword === ''" class="my-5" type="primary" size="large"
        >Registreren</NButton
      >
    </NForm>
  </NCard>
  <div class="text-center mt-12">
    <p>
      Heb je al een account? <router-link :to="{ name: 'Login' }"><span class="text-red-500 font-bold">Inloggen</span></router-link>
    </p>
  </div>
</template>

<script>
import { NCard, NInput, NForm, NFormItem, NButton, useMessage } from "naive-ui";
import { useAuthStore } from "../store/authStore";
import { ref } from "@vue/reactivity";
import { computed, watchEffect } from "vue-demi";
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
    const message = useMessage();

    const errorMsg = computed(() => {
      return authStore.errorMsg;
    });

    watchEffect(() => {
      if (errorMsg.value) {
        message.error(errorMsg.value, { duration: 5000 });
      }
    });

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

    const handleRegister = async () => {
      await authStore.register(formModel.value.user.email, formModel.value.user.password);
      if (!errorMsg.value) {
        //
      }
    };

    return { formRef, formModel, rules, handleRegister };
  },
};
</script>
