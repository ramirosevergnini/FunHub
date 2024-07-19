<template>
    <div class="register-container">
        <div class="register-section">
        <h2 class="register-title">Register</h2>
        <form @submit.prevent="handleLogin">
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="email" required>
          </div>
          <div class="form-group">
            <label for="password">Senha</label>
            <input type="password" id="password" v-model="password" required>
          </div>
          <button type="submit" class="register-button">Entrar</button>
        </form>
        <p class="register-link">Já possui uma conta? <a @click="navigateToLogin">entre aqui</a></p>
      </div>
        <div class="logo-section">
        <img src="../assets/logo.png" alt="FunHub Logo" class="logo">
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'registerScreen',
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      handleregister() {
        // Lógica de login
        console.log('register:', this.email, this.password);
      },
      navigateToLogin() {
        this.$router.push('/login');
      }
    },
  };
  </script>
  
  <style scoped>
  .register-container {
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
  
  .register-section {
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
  
  .register-title {
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
  
  .register-button {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 4px;
    background-color: #4CAF50;
    color: white;
    font-size: 1rem;
    cursor: pointer;
  }
  
  .register-button:hover {
    background-color: #45a049;
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
  