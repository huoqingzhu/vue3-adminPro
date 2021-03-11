import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    redirect:"/home",
    meta: {
      title: "首页",
      keepAlive: true,
      iocn: "AppstoreOutlined",
    },
    component: () => import("../views/index.vue"),
    children:[
      {
        path: "/home",
        name: "home",
        meta: {
          title: "登录",
          keepAlive: true,
          iocn: "AppstoreOutlined",
        },
        component: () => import("../views/Home/index.vue"),
      }
    ]
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      title: "登录",
      keepAlive: true,
      iocn: "AppstoreOutlined",
    },
    component: () => import("../views/Login/index.vue"),
  },
];
localStorage.setItem("router",JSON.stringify(routes[0].children));
document
const router = createRouter({
  history: createWebHashHistory(),
  routes
});
export default router;
