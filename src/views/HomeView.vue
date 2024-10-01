<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title has-text-white">Welcome to the Home Page!</h1>
        <h2 class="subtitle has-text-white">
          This is a simple application registration/login page practice using
          Vue.js and Firebase. Developed by Brenda Z. Ramírez
        </h2>
        <h2 class="subtitle has-text-white">
          Access the menu in the upper right corner to navigate to another
          section or log out
        </h2>
        <button
          class="button is-success is-medium mt-20 is-rounded"
          @click="goToDashboard"
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomeView",
  methods: {
    goToDashboard() {
      this.$router.push({ name: "dashboard" });
    },
  },
};
</script>

<style scoped>
.mt-20 {
  margin-top: 20px;
}
</style>
