import { createRouter, createWebHistory } from 'vue-router'
import Header from '../components/Header.vue'
import TelaPrincipal from '../components/TelaPrincipal.vue'

const routes = [
  { path: '/', component: TelaPrincipal }
  // Adicione mais rotas conforme necessário
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
