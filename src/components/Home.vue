<template>
  <div class="main-screen">
    <div class="grid-container">
      <div v-for="index in 28" :key="index" class="grid-item">
        <router-link :to="{ name: 'GameScreen' }">
          <img src="../assets/gameInProgress.png" alt="Game in Progress">
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TelaPrincipal',
};
</script>

<style scoped>
.main-screen {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
}

.grid-item {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ddd;
  padding: 10px;
}

.grid-item img {
  width: 100px;
  height: 100px;
  cursor: pointer;
}
</style>
