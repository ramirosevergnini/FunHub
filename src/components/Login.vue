<template>
  <div class="login-container">
    <div class="logo-section">
      <img src="../assets/logo.png" alt="FunHub Logo" class="logo">
    </div>
    <div class="login-section">
      <h2 class="login-title">Login</h2>
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" required>
        </div>
        <div class="form-group">
          <label for="password">Senha</label>
          <input type="password" id="password" v-model="password" required>
        </div>
        <button type="submit" class="login-button">Entrar</button>
      </form>
      <p class="register-link">Não possui uma conta? <a @click="navigateToRegister">crie aqui</a></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginScreen',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    handleLogin() {
      // Lógica de login
      console.log('Login:', this.email, this.password);
    },
    navigateToRegister() {
      this.$router.push('/register');
    }
  },
};
</script>

<style scoped>
.login-container {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
}

.logo-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 20px;
  max-width: 500px;
  height: 400px;
}

.logo {
    width: 220px;
    height: 120px;
  }

.brand {
  font-size: 1.5rem;
  margin-top: 10px;
}

.login-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #0044ff;
  color: white;
  padding: 20px;
  max-width: 500px;
  height: 400px;
}

.login-title {
  font-size: 1.5rem;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
  width: 100%;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input {
  width: 100%;
  padding: 8px;
  border: none;
  border-radius: 4px;
}

.login-button {
    width: 108%;
    padding: 10px;
    border: none;
    border-radius: 4px;
    background-color: #ffffff;
    color: rgb(0, 0, 0);
    font-size: 1rem;
    cursor: pointer;
    transition: 0.2s;
  }
  
  .login-button:hover {
    background-color: #1100ff;
    color: white;
    border: 1px solid black;
  }

.register-link {
  margin-top: 20px;
  text-align: center;
}

.register-link a {
  color: #ffd700;
  cursor: pointer;
  text-decoration: none;
}

.register-link a:hover {
  text-decoration: underline;
}
</style>
