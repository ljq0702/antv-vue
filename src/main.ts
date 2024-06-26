import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import './style.css'
import App from './App.vue'
import 'ant-design-vue/dist/reset.css'
import "./style/tailwind.css"
const app = createApp(App)
app.use(Antd).mount('#app')
