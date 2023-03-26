<script>
import axios from "axios";

import Layout from "@/router/layouts/auth";
import {
  authMethods
} from "@/state/helpers";

import appConfig from "@/app.config";
import { required, email, helpers } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";

export default {
  setup() {
    return { v$: useVuelidate() };
  },
  page: {
    title: "Login",
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  components: {
    Layout,
  },
  data() {
    return {
      email: "",
      password: "",
      submitted: false,
      authError: null,
      tryingToLogIn: false,
      isAuthError: false,
      loading: false,
      message_login: "Entrar",
      disabled_button: false,
      notification: {
        message: "",
        type:""
      }
    };
  },
  validations: {
    email: {
      required: helpers.withMessage(
        "correo electronico es requerido",
        required
      ),
      email: helpers.withMessage(
        "Por favor introduzca un correo electrónico válido",
        email
      ),
    },
    password: {
      required: helpers.withMessage("se requiere contraseña", required),
    },
  },
  methods: {
    ...authMethods,
    tryToLogIn() {
      this.submitted = true;
      this.v$.$touch();
      if (this.v$.$invalid) {
        return;
      } else {
          this.message_login = "Cargando";
          this.loading = true;
          this.disabled_button = true;
          axios
            .post(process.env.VUE_APP_SERVER + "v1/user/login", {
              email: this.email,
              password: this.password,
            })
            .then((res) => {
              console.log("Res " , res.data)
              const { access_token, user_id } = res.data;
              const { id } = user_id
              this.setToken(access_token);
              this.setUserId(id);
              this.setLayoutLogin(true);
              this.$router.push({ name: "default" });
              this.message_login = "Entrar";
              this.loading = false;
              this.disabled_button = false;
            }).catch(() => {
            this.isAuthError = true
            this.message_login = "Entrar";
            this.loading = false;
            this.disabled_button = false;
            this.notification.message = "Usuario o contraseña incorrectos"
            this.notification.type = "alert-danger"
          });
      }
    },
  },
  mounted() {
  },
};
</script>

<template>
  <Layout>
    <div class="row justify-content-center">
      <div class="col-md-8 col-lg-6 col-xl-5">
        <div class="card overflow-hidden">
          <div class="bg-primary-login">
            <div class="row">
              <div class="col-12 d-flex pt-4 justify-content-center">
                <img src="@/assets/img/logo.png" alt height="155" />
              </div>
            </div>
          </div>
          <div class="card-body pt-0">
<!--            <b-alert v-model="isAuthError" variant="danger" class="mt-3" dismissible>{{ authError }}</b-alert>-->
            <div v-if="isAuthError" :class="'alert ' + notification.type" class="mt-5">
              {{ notification.message }}
            </div>

            <b-form class="p-2 pt-5" @submit.prevent="tryToLogIn">
              <b-form-group class="mb-3" id="input-group-1" :label="$t('login.email')" label-for="input-1">
                <b-form-input id="input-1" v-model="email" type="text" placeholder="Enter email" :class="{
                  'is-invalid': submitted && v$.email.$error,
                }"></b-form-input>
                <div v-for="(item, index) in v$.email.$errors" :key="index" class="invalid-feedback">
                  <span v-if="item.$message">{{ item.$message }}</span>
                </div>
              </b-form-group>

              <b-form-group class="mb-3" id="input-group-2" :label="$t('login.password')" label-for="input-2">
                <b-form-input id="input-2" v-model="password" type="password" placeholder="Enter password" :class="{
                  'is-invalid': submitted && v$.password.$error,
                }"></b-form-input>
                <div v-if="submitted && v$.password.$error" class="invalid-feedback">
                  <span v-if="v$.password.required.$message">{{
                      v$.password.required.$message
                  }}</span>
                </div>
              </b-form-group>

              <div class="mt-3 d-grid">
                <b-button type="submit" variant="primary" class="w-xs" :disabled="disabled_button">
                  <i v-if="loading" class="bx bx-loader bx-spin font-size-16 align-middle me-2"></i>
                  {{ message_login }}
                </b-button>
              </div>


            </b-form>
          </div>
          <!-- end card-body -->
        </div>
        <div class="mt-5 text-center">
          <p>© {{ new Date().getFullYear() }} Ministerio de Trabajo y Previsión Social</p>
        </div>
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->
  </Layout>
</template>