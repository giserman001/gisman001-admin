import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
import installElementPlusIcon from './plugins/elementIcons'
// 全局样式(reset)
import './styles/index.scss'
// 导入自定义svg
import installIcons from '@/icons'
// 全局导航守卫-全局用户登录状态拦截
import './permission'

const app = createApp(App)
installElementPlus(app)
installElementPlusIcon(app)
installIcons(app)
app.use(store).use(router).mount('#app')
