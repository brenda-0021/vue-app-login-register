<template>
  <div class="dashboard-container">
    <h3 class="title is-3 has-text-centered mt-50">
      You are currently in your dashboard
    </h3>
    <div class="gif-container">
      <img
        src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif"
        alt="funny cat gif"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "UserDashboard",
  created() {
    console.log("creado");
  },
};
</script>

<style scoped>
.dashboard-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  text-align: center;
}

.gif-container {
  margin-top: 20px;
  max-width: 300px;
}

img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
}
</style>
