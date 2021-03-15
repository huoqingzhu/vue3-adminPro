<template>
  <div class="login">
    <div class="frame">
      <div class="center logo">
        <img src="../../assets/favicon.png" alt="" />
      </div>
      <input type="text" placeholder="请输入用户名" />
      <input type="password" placeholder="请输入密码" />
      <div class="button center" @click="$router.push('/dashboard/analysis')">登录</div>
    </div>
    <div id="map"></div>
  </div>
</template>
<script lang="ts">
// 引入tree.js
import Map from "../../utils/map";
import { defineComponent, onMounted } from "vue";

export default defineComponent({
  name: "login",

  setup() {
    // 初始化 Map
    function init() {
      let container: any = document.getElementById("map");
      let map = new Map(container, true, true, true);
      //初始化map
      map.camera.position.set(0, 0, 1000); //设置相机位置
      map.camera.lookAt(map.scene.position); //设置相机方向(指向的场景对象)
      map.init();
    }
    onMounted(() => {
      init();
    });
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
