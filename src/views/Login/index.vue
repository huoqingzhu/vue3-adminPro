<template>
  <div id="map"></div>
</template>
<script lang="ts">
// 引入tree.js
import Map from "../../utils/map";
import { defineComponent, onMounted } from "vue";

export default defineComponent({
  name: "Dome1",
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
<style scoped>
#map {
  width: 100vw;
  height: 100vh;
  background-color: #000;
  background-image: radial-gradient(circle, rgb(3, 3, 63), rgb(1, 6, 24), #000);
}
</style>
