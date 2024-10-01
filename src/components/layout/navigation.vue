<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link class="navbar-item" to="/">
        <h3 class="title is-4 navbar-item">New App</h3>
      </router-link>

      <a
        role="button"
        class="navbar-burger"
        :class="{ 'is-active': isOpen }"
        @click.prevent="toggleMenu"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div
      id="navbarBasicExample"
      class="navbar-menu"
      :class="{ 'is-active': isOpen }"
    >
      <div class="navbar-start">
        <router-link class="navbar-item" to="/"> Home </router-link>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <template v-if="user">
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link"> {{ user.displayName || user.email }} </a>
              <div class="navbar-dropdown">
                <router-link class="navbar-item" to="dashboard">
                  Dashboard
                </router-link>
                <a class="navbar-item" @click.prevent="logout"> Log Out </a>
              </div>
            </div>
          </template>
          <template v-else>
            <div class="buttons">
              <router-link
                class="button is-primary is-success is-rounded"
                to="/register"
              >
                <strong>Register</strong>
              </router-link>
              <router-link class="button is-light is-rounded" to="/login">
                Log in
              </router-link>
            </div>
          </template>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

export default {
  data() {
    return {
      isOpen: false,
      user: null,
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    logout() {
      const auth = getAuth();
      signOut(auth).then(() => {
        this.$router.push({ name: "login" });
      });
    },
  },
  name: "AppNavigation",
  created() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.user = user;
      } else {
        this.user = null;
      }
    });
  },
};
</script>
