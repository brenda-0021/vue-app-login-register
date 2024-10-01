<template>
  <div class="container mt-50">
    <div class="columns">
      <div class="column is-6 is-offset-3">
        <h3 class="title is-3 has-text-centered">Log In</h3>
        <hr />
        <form action="#" @submit.prevent="login">
          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input
                class="input is-rounded"
                type="email"
                placeholder="e.g. alexsmith@gmail.com"
                v-model="email"
              />
            </div>
          </div>

          <div class="field">
            <label class="label">Password</label>
            <div class="control">
              <div class="field has-addons">
                <div class="control is-expanded">
                  <input
                    class="input is-rounded"
                    :type="showPassword ? 'text' : 'password'"
                    v-model="password"
                  />
                </div>
                <div class="control">
                  <button
                    class="button is-rounded"
                    type="button"
                    @click="togglePasswordVisibility"
                  >
                    <span class="icon">
                      <i
                        :class="
                          showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'
                        "
                      ></i>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="field has-text-centered">
            <button
              type="submit"
              class="button is-primary is-success is-rounded mt-5"
            >
              Log In
            </button>
          </div>
        </form>
        <div class="notification is-danger mt-10" v-if="error">
          {{ error }}
        </div>
        <div class="has-text-centered mt-5">
          <p>
            <router-link to="/register" class="is-link"
              >Create Account</router-link
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { auth } from "@/firebase/init";
import { signInWithEmailAndPassword } from "firebase/auth";

export default {
  data() {
    return {
      email: "",
      password: "",
      error: "",
      showPassword: false, // Para controlar la visualización de la contraseña
    };
  },
  name: "UserLogin",
  methods: {
    login() {
      this.error = "";
      if (this.email && this.password) {
        signInWithEmailAndPassword(auth, this.email, this.password)
          .then(() => {
            this.$router.push({ name: "dashboard" });
          })
          .catch((err) => {
            this.error = err.message;
          });
      } else {
        this.error = "All fields are required";
      }
    },
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
  },
};
</script>

<style scoped>
.has-text-centered {
  text-align: center;
}
</style>
