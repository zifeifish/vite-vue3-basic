import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
// 从根组件提供数据
app.provide('userInfo', { name: 'hcy' })
app.mount('#app')
