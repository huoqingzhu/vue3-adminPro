<template>
  <div class="container">
    <div class="Tabbar">
      <!-- <Navigation></Navigation> -->
    </div>
    <div class="home">
      <RouterView />
    </div>
  </div>
</template>

<script lang="ts">
import Navigation from "@/components/layout/navigation.vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: {
    Navigation,
  },
});
</script>
<style lang="less" scoped>
.container {
  // background-color: #acbcd6;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #fff;

  .Tabbar {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #ccc;
    // box-shadow: 0px 3px 3px rgb(102, 190, 171);
    z-index: 10;
  }

  .home {
    width: 100%;
    margin-top: 6vh;
    // height: 100%-2rem;
    z-index: 1;
  }

  .footter {
    width: 100%;
    height: 20px;
    //     background: #5b6d81;
    line-height: 20px;
    text-align: center;
    /* 方法一 */
    position: fixed;
    bottom: 0;
  }
}
</style>
