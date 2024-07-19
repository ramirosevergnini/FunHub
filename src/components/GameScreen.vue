<template>
    <div class="game-screen-container">
      <div class="game-content">
        <div class="ranking">
          <h2>Ranking</h2>
          <table class="ranking-table">
            <thead>
              <tr>
                <th>Posição</th>
                <th>Nome</th>
                <th>Pontuação</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(player, index) in players" :key="index">
                <td>{{ index + 1 }}</td>
                <td>{{ player.name }}</td>
                <td>{{ player.score }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="game-display">
          <!-- Conteúdo do jogo aqui -->
          <div class="game-area">
            <!-- Simulação do jogo -->
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Header from './Header.vue';
  
  export default {
    name: 'GameScreen',
    components: {
      Header,
    },
    data() {
      return {
        players: [
          { name: 'Player 1', score: 100 },
          { name: 'Player 2', score: 90 },
          { name: 'Player 3', score: 80 },
          { name: 'Player 4', score: 70 },
          { name: 'Player 5', score: 60 },
          { name: 'Player 6', score: 50 },
          { name: 'Player 7', score: 40 },
          { name: 'Player 8', score: 30 },
          { name: 'Player 9', score: 20 },
          { name: 'Player 10', score: 10 },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .game-screen-container {
    display: flex;
    flex-direction: column;
    height: 90vh;
  }
  
  .game-content {
    display: flex;
    flex: 1;
    padding: 20px;
  }
  
  .ranking {
    margin-top: 120px;
    width: 14%;
    background-color: #0044ff;
    color: white;
    padding: 20px;
    border-radius: 8px;
    height: 550px;
  }
  
  .ranking h2 {
    text-align: center;
  }
  
  .ranking-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }
  
  .ranking-table th, .ranking-table td {
    border: 1px solid white;
    padding: 10px;
    text-align: center;
  }
  
  .ranking-table th {
    background-color: #0033cc;
  }
  
  .ranking-table tbody tr:nth-child(odd) {
    background-color: #0055ff;
  }
  
  .ranking-table tbody tr:nth-child(even) {
    background-color: #0044ff;
  }
  
  .game-display {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .game-area {
    width: 48%;
    height: 80%;
    background-color: white;
    border: 2px solid #0044ff;
    border-radius: 8px;
    margin-right: 280px;
  }
  </style>
  