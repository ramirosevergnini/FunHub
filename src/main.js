import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js' // Importe o arquivo index.js do diretório router
import Header from './components/Header.vue' // Importe o componente Header.vue

const app = createApp(App)
app.component('Header', Header) // Registre o componente Header globalmente
app.use(router)
app.mount('#app')
