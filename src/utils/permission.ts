import router from "../router/index";
import store from "../store/index";
// import { Notify } from "vant";
// import { getToken } from "@/utils/auth"; // get token from cookie
// import getPageTitle from "@/utils/get-page-title";

const whiteList = ["/login", "/register"]; // 白名单列表

router.beforeEach(async (to, from, next) => {
  // 设置页面标题
  document.title = to.meta.title;
  console.log(`要去哪${to.path}`);
  console.time("路由跳转时间")
  console.log(store)
  store.commit("changeLoading",true)
  const hasToken = 1===1;
  if (hasToken) {
    if (to.path === "/login") {
        next(); // 已经登录，跳转到首页
    }else{
      // 获取用户信息
      const hasGetUserInfo =store.getters.userData && store.getters.userData.name;
      if (hasGetUserInfo) {
        next();
      }else {
        try {
          next();
          } catch (error) {
             // 清除用户信息，退出登录，跳转登录页
            store.commit("user/LOGOUT");
          next(`/login?redirect=${to.path}`);
        }
      }
    }
  } else {
    /* has no token */
    if (whiteList.indexOf(to.path) !== -1) {
      // 白名单中，无需验证
      next();
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next(`/login?redirect=${to.path}`);
    }
  }
});

router.afterEach((to, from) => {
  console.log(`到达${to.path}`);
  console.timeEnd("路由跳转时间")
  store.commit("changeLoading",false)
});