<template>
  <div class="examples">
    <div class="topExamples" :style="{ backgroundColor: color[0] }"></div>
    <div
      class="leftExamples"
      v-if="color.length !== 1"
      :style="{ backgroundColor: color[1] }"
    ></div>
    <span class="img" v-if="select">
      <img src="../../assets/check.png" alt="" />
    </span>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    color: {
      type: Array,
      default: () => ["#fff", "#fff"],
    },
    select: {
      type: Boolean,
      default: true,
    },
  },
});
</script>

<style lang="less" scoped>
.examples {
  width: 44px;
  height: 36px;
  margin-right: 12px;
  overflow: hidden;
  background-color: #f0f2f5;
  border-radius: 4px;
  box-shadow: 0 1px 2.5px 0 rgb(0 0 0 / 18%);
  position: relative;
  .topExamples {
    width: 100%;
    height: 25%;
    position: absolute;
    z-index: 1;
  }
  .leftExamples {
    position: absolute;
    top: 0;
    left: 0;
    width: 33%;
    z-index: 2;
    height: 100%;
  }
  .img {
    position: absolute;
    right: 6px;
    bottom: 4px;
    color: #1890ff;
    font-weight: 700;
    font-size: 14px;
    pointer-events: none;
  }
}
</style>
