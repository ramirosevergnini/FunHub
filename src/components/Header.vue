<template>
  <div>
    <header class="header">
      <div class="logo-container">
        <img src="../assets/control.png" alt="Game Controller" class="logo">
        <span class="brand">FunHub</span>
      </div>
      <div class="search-container">
        <img src="../assets/search.png" alt="Search" class="search">
        <input type="text" placeholder="Buscar..." class="search-input">
      </div>
      <div class="auth-buttons">
        <button class="button" @click="navigateToRegister">Register</button>
        <button class="button" @click="navigateToLogin">Login</button>
      </div>
    </header>
    <nav class="navigation">
      <div class="nav-item" @click="navigateToTwoPlayers">
        <img src="../assets/twoPlayers.png" alt="2 Jogadores" class="nav-icon">
        <span>2 Jogadores</span>
      </div>
      <div class="nav-item" @click="navigateToDressUp">
        <img src="../assets/dress.png" alt="Vestir" class="nav-icon">
        <span>Vestir</span>
      </div>
      <div class="nav-item" @click="navigateToCars">
        <img src="../assets/carros.png" alt="Carros" class="nav-icon">
        <span>Carros</span>
      </div>
      <div class="nav-item" @click="navigateToCooking">
        <img src="../assets/cozinhar.png" alt="Cozinhar" class="nav-icon">
        <span>Cozinhar</span>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    navigateToLogin() {
      this.$router.push('/login');
    },
    navigateToRegister() {
      this.$router.push('/register');
    },
    navigateToTwoPlayers() {
      this.$router.push('/twoPlayers');
    },
    navigateToDressUp() {
      this.$router.push('/dressUp'); 
    },
    navigateToCars() {
      this.$router.push('/cars'); 
    },
    navigateToCooking() {
      this.$router.push('/cooking'); 
    }
  },
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #0044ff;
}

.logo-container {
  display: flex;
  align-items: center;
}

.logo {
  width: 60px;
  height: 60px;
}

.brand {
  font-family: "Luckiest Guy", cursive;
  font-size: 2.3rem;
  font-weight: bold;
  color: white;
}

.search {
  height: 40px;
  width: 40px;
}

.search-container {
  display: flex;
  flex: 1;
  margin: 0 20px;
}

.search-input {
  width: 100%;
  padding: 8px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.auth-buttons {
  display: flex;
}

.button {
  margin-left: 15px;
  padding: 8px 16px;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  background-color: white;
  border: 1px solid black;
  color: black;
  cursor: pointer;
  width: 100px;
  transition: 0.2s;
}

.button:hover {
  background-color: gainsboro;
}

.navigation {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #0033cc;
  padding: 1px 0;
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  cursor: pointer;
}

.nav-icon {
  width: 25px;
  height: 25px;
}

.nav-item:hover {
  opacity: 0.8;
}
</style>
