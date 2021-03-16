# Admin-pro

# 项目目的

主要是利用vue3最新技术栈搭建出一套相对基础的后台开发框架,后来者可以在此基础上拓展。

# 项目特点

* 基于vite2
* 基于vue3.x
* 基于TS
* 基于template风格
* 集成vue-router
* 集成vuex
* 配置ant design vue2.x 按需引入
* 集成Three.js
* 集成echarts5 支持按需引入
* 配置路由导航守卫
* 集成axios
* 响应式布局
* 配置好打包分析插件
* 入口文件400Kb

# 开发

npm run dev

# 打包

npm run build

# 项目详细介绍

## 已经配置好ant的按需引入 （尽量在局部组件引入）

局部引入

```
import { Dropdown } from "ant-design-vue";
components: {
    GithubOutlined,
    [Dropdown.name]: Dropdown,
},
```

全局引入在utils/ant.ts配置

## 路由导航守卫的配置在utils/permission.ts配置

## axios的配置在utils/request.ts

# 项目预览

<http://xiaohuo.online/admin>
