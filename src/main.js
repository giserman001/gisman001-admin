import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
import installElementPlusIcon from './plugins/elementIcons'
// 全局样式
import './styles/index.scss'

const app = createApp(App)
installElementPlus(app)
installElementPlusIcon(app)
app.use(store).use(router).mount('#app')
