<template>
  <div id="map2">
    <div class="tag"></div>
  </div>
</template>
<script lang="ts">
import Map from "@/utils/map";
import { defineComponent, onMounted } from "vue";
export default defineComponent({
  setup() {
    // 初始化 Map
    function init() {
      let container: any = document.getElementById("map2");
      let map = new Map(container, true, true, false);
      map.init();
    }
    onMounted(() => {
      init();
    });
  },
});
</script>
<style lang="less" scoped>
#map2 {
  width: 100%;
  height: 100%;
  background-color: seagreen;
  position: relative;
  .tag {
    position: absolute;
    width: 100%;
    height: 50px;
    background-color: pink;
  }
}
</style>
