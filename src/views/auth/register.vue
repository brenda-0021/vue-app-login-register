<template>
  <div class="container mt-50">
    <div class="columns">
      <div class="column is-6 is-offset-3">
        <h3 class="title is-3 has-text-centered">Create Account</h3>
        <hr />
        <form action="#" @submit.prevent="register">
          <div class="field">
            <label class="label">Name</label>
            <div class="control">
              <input
                class="input is-rounded"
                type="text"
                placeholder="e.g Alex Smith"
                v-model="name"
              />
            </div>
          </div>

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
            <div class="control has-icons-right">
              <input
                class="input is-rounded"
                :type="showPassword ? 'text' : 'password'"
                v-model="password"
              />
              <span
                class="icon is-small is-right"
                @click="togglePasswordVisibility"
              >
                <i
                  :class="showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"
                ></i>
              </span>
            </div>
          </div>
          <div class="field has-text-centered">
            <button
              type="submit"
              class="button is-primary is-success is-rounded mt-5"
            >
              Register
            </button>
          </div>
        </form>
        <div class="notification is-danger mt-10" v-if="error">
          {{ error }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      error: "",
      showPassword: false, // Estado para mostrar u ocultar la contraseña
    };
  },
  name: "UserRegister",
  methods: {
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword; // Cambiar el estado de visibilidad de la contraseña
    },
    register() {
      this.error = "";
      if (this.name && this.email && this.password) {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, this.email, this.password)
          .then((userCredential) => {
            const user = userCredential.user;
            updateProfile(user, {
              displayName: this.name,
            })
              .then(() => {
                this.name = "";
                this.email = "";
                this.password = "";
                this.$router.push({ name: "dashboard" });
              })
              .catch((err) => {
                this.error = err.message;
              });
          })
          .catch((err) => {
            this.error = err.message;
          });
      } else {
        this.error = "All fields are required";
      }
    },
  },
};
</script>
