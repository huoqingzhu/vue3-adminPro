<template>
  <div class="login">
    <div class="frame">
      <div class="center logo">
        <img src="../../assets/favicon.png" alt="" />
      </div>
      <input type="text" placeholder="请输入用户名" />
      <input type="password" placeholder="请输入密码" />
      <div class="button center" @click="goMain">登录</div>
    </div>
    <iframe lang="zh" src="http://xiaohuo.online/Wave/" id="map"></iframe>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  name: "login",
  setup() {
    // 初始化 Map

    const router = useRouter();
    const goMain = () => {
      router.push("/dashboard/analysis");
      let node: any = document.getElementById("body");
      node.style.backgroundColor = "#fff";
    };
    onMounted(() => {});
    return { goMain };
  },
});
</script>

<style lang="less" scoped>
.login {
  position: relative;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
}
#map {
  width: 100%;
  height: 100%;
  background-color: #000;
  background-image: radial-gradient(circle, rgb(3, 3, 63), rgb(1, 6, 24), #000);
  border: none;
  // background: url("https://static.zhihu.com/heifetz/assets/sign_bg.db29b0fb.png");
}
.frame {
  position: absolute;
  width: 30vw;
  height: 30vh;
  margin-left: 50%;
  margin-top: 50vh;
  transform: translate(-50%, -65%); /* 50%为自身尺寸的一半 */
  color: #fff;
  // border: 1px solid pink;
  input {
    display: block;
    background-color: transparent;
    border: none;
    border-bottom: 0.2vh solid #00ffd1;
    margin-top: 3vh;
    width: 100%;
    color: #fff;
  }
  input::-webkit-input-placeholder {
    /* WebKit browsers */

    color: #fff;
  }
  .button {
    margin-top: 6vh;
    width: 100%;
    background-color: #52ad9c;
    height: 4vh;
  }
  input:focus {
    outline: none;
  }
}
.logo {
  height: 30%;
  img {
    width: 5vw;
  }
}
</style>
