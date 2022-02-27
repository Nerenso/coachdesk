<template>
  <div>
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
</template>

<script>
import { NCard, NInput, NForm, NFormItem, NButton, useMessage } from "naive-ui";
import { useAuthStore } from "../store/authStore";
import { useRouter } from "vue-router";
import { ref } from "@vue/reactivity";
import { computed, watchEffect } from "vue-demi";
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
      authStore.sendResetPasswordMail(formModel.value.user.email);
    };

    const returnToLogin = () => {
      router.push({ name: "Login" });
    };

    return { formRef, formModel, rules, handleReset, returnToLogin };
  },
};
</script>
