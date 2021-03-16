<template>
  <div class="logo">
    <img src="../../assets/favicon.png" class="imgLogo" alt="logo" />
    <span style="margin-left: 15px" :style="{ color }"> Admin Pro</span>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    color: {
      type: String,
      default: "#fff",
    },
  },
});
</script>

<style lang="less" scoped>
.logo {
  width: 80%;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 18px;
  align-items: center;
  .imgLogo {
    width: 32px;
  }
}
</style>
