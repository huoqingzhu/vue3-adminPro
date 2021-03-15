import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    redirect:"/login",
    meta: {
      title: "首页",
      keepAlive: true,
      iocn: "AppstoreOutlined",
    },
    component: () => import("../views/index.vue"),
    children:[
      {
        path: "/dashboard",
        name: "仪表盘",
        meta: {
          title: "仪表盘",
          keepAlive: true,
          iocn: "AppstoreOutlined",
        },
        component: () => import("../views/dashboard/index.vue"),
        children:[
          {
            path: "/dashboard/analysis",
            name: "分析页",
            meta: {
              title: "分析页",
              keepAlive: true,
              iocn: "AppstoreOutlined",
            },
            component: () => import("../views/dashboard/analysis.vue"),
          },{
            path: "/dashboard/workplace",
            name: "监控台",
            meta: {
              title: "监控台",
              keepAlive: true,
              iocn: "AppstoreOutlined",
            },
            component: () => import("../views/dashboard/workplace.vue"),
          }
        ]
      },
      {
        path: "/form",
        name: "表单页",
        meta: {
          title: "表单页",
          keepAlive: true,
          iocn: "AppstoreOutlined",
        },
        component: () => import("../views/form/index.vue"),
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
