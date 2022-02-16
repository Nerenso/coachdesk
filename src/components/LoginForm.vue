<template>
  <div>
    <NCard class="" title="Login" size="medium">
      <NForm ref="formRef" :model="formModel" :rules="rules" size="large">
        <NFormItem label="Email" path="user.email">
          <NInput class="" size="large" v-model:value="formModel.user.email" placeholder="Your Email" />
        </NFormItem>
        <NFormItem label="Wachtwoord" path="user.password">
          <NInput class="" size="large" type="password" v-model:value="formModel.user.password" placeholder="Your Password" />
        </NFormItem>
        <div class="flex justify-between items-center">
          <NButton @click="handleLogin" class="my-5" type="primary" size="large">Inloggen</NButton>
          <router-link :to="{ name: 'ForgotPassword' }"
            ><p class="text-gray-400 text-xs hover:text-red-500 transition-all duration-300">Wachtwoord Vergeten?</p></router-link
          >
        </div>
      </NForm>
    </NCard>
    <div class="text-center mt-12">
      <p>
        Heb je nog geen account?
        <router-link :to="{ name: 'Register' }"
          ><span class="text-red-500 font-bold hover:text-red-700 transition-all duration-300">Registreren</span></router-link
        >
      </p>
    </div>
  </div>
</template>

<script>
import { NCard, NInput, NForm, NFormItem, NButton, useMessage } from "naive-ui";
import { useRouter } from "vue-router";
import { useAuthStore } from "../store/authStore";
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
    const router = useRouter();
    const formRef = ref(null);
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
            trigger: ["blur"],
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
            trigger: ["blur"],
          },
        ],
      },
    };

    const handleLogin = () => {
      formRef.value.validate(async (err) => {
        if (!err) {
          await authStore.login(formModel.value.user.email, formModel.value.user.password);
          if (!errorMsg.value) {
            router.push({ name: "Overview" });
          }
        }
      });
    };

    return { formRef, formModel, rules, handleLogin };
  },
};
</script>
