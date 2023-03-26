<script>
import axios from "axios";

import Layout from "@/router/layouts/auth";
import { authMethods } from "@/state/helpers";
import appConfig from "@/app.config";

import { required, email, helpers } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";

/**
 * Forgot Password component
 */
export default {
  setup() {
    return { v$: useVuelidate() };
  },
  validations: {
    email: {
      required: helpers.withMessage("Email is required", required),
      email: helpers.withMessage("Please enter valid email", email),
    },
  },
  page: {
    title: "Forgot Password",
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
      submitted: false,
      error: null,
      tryingToReset: false,
      isResetError: false,
    };
  },
  methods: {
    ...authMethods,
    // Try to register the user in with the email, fullname
    // and password they provided.
    tryToReset() {
      this.submitted = true;
      // stop here if form is invalid
      this.v$.$touch();

      if (this.v$.$invalid) {
        return;
      } else {
        if (process.env.VUE_APP_DEFAULT_AUTH === "firebase") {
          this.tryingToReset = true;
          // Reset the authError if it existed.
          this.error = null;
          return (
            this.resetPassword({
              email: this.email,
            })
              // eslint-disable-next-line no-unused-vars
              .then((token) => {
                this.tryingToReset = false;
                this.isResetError = false;
              })
              .catch((error) => {
                this.tryingToReset = false;
                this.error = error ? error : "";
                this.isResetError = true;
              })
          );
        } else if (process.env.VUE_APP_DEFAULT_AUTH === "authapi") {
          axios
            .post("http://127.0.0.1:8000/api/password/create", {
              email: this.email,
            })
            .then((res) => {
              this.isResetError = true;
              this.error = res.data;
              return res;
            });
        }
      }
    },
  },
};
</script>

<template>
  <Layout>
    <div class="row justify-content-center">
      <div class="col-md-8 col-lg-6 col-xl-5">
        <div class="card overflow-hidden">
          <div class="bg-soft-login bg-primary-login">
            <div class="row">
              <div class="col-8">
                <div class="text-primary-login p-4">
                  <h4 class="text-primary-login">Restablecer la contraseña</h4>
                  <p>Comunicación Visual S.A</p>
                </div>
              </div>
              <div class="col-4 align-self-end">
                <img
                  src="@/assets/images/profile-img.png"
                  alt
                  class="img-fluid"
                />
              </div>
            </div>
          </div>
          <div class="card-body pt-0">
            <div>
              <router-link to="/">
                <div class="avatar-md profile-user-wid mb-4">
                  <span class="avatar-title rounded-circle bg-light">
                    <img src="@/assets/images/logo.svg" alt height="34" />
                  </span>
                </div>
              </router-link>
            </div>

            <div class="p-2">
              <b-alert
                v-model="isResetError"
                class="mb-4"
                variant="danger"
                dismissible
                >{{ error }}</b-alert
              >
              <form @submit.prevent="tryToReset">
                <div class="mb-3">
                  <label for="useremail">{{ $t("login.email") }}</label>
                  <input
                    type="email"
                    v-model="email"
                    class="form-control"
                    id="useremail"
                    :placeholder="$t('login.placeholder-reset')"
                    :class="{ 'is-invalid': submitted && v$.email.$errors }"
                  />
                  <div
                    v-for="(item, index) in v$.email.$errors"
                    :key="index"
                    class="invalid-feedback"
                  >
                    <span v-if="item.$message">{{ item.$message }}</span>
                  </div>
                </div>
                <div class="mb-3 row mb-0">
                  <div class="col-12 text-end">
                    <button class="btn btn-danger w-md" type="submit">
                      {{ $t("login.reset") }}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card -->

        <div class="mt-5 text-center">
          <p>© {{ new Date().getFullYear() }} SIGN Comunicación Visual</p>
        </div>
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->
  </Layout>
</template>

<style lang="scss" module></style>
