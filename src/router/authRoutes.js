import LoginForm from "../components/LoginForm.vue";
import RegistrationForm from "../components/RegistrationForm.vue";
import ForgotPasswordForm from "../components/ForgotPasswordForm.vue";
import NewPasswordForm from "../components/NewPasswordForm.vue";

export const authRoutes = [
  {
    path: "",
    redirect: { name: "Login" },
  },
  {
    path: "login",
    name: "Login",
    component: LoginForm,
  },
  {
    path: "register",
    name: "Register",
    component: RegistrationForm,
  },
  {
    path: "forgotpassword",
    name: "ForgotPassword",
    component: ForgotPasswordForm,
  },
  {
    path: "newpassword",
    name: "NewPassword",
    component: NewPasswordForm,
  },
];
