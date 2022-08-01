import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// 目标：有两处在检查代码
// webpack开发服务器+eslint插件，在保存时，检查代码
// vscode+eslint插件+工作区根目录下.eslinrc.js配置，在保存时检查代码
