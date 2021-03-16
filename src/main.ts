import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";
// import ant from 'ant-design-vue';

import ant from "./utils/ant";
import "@/utils/permission"//配置路由导航守卫
// import 'ant-design-vue/dist/antd.css';//引入ant 全局样式
import "@/style/index.less"

createApp(App)
.use(router)
.use(store)
.use(ant)
.mount('#app')

