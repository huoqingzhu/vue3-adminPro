<template>
  <div class="work" @mousemove="mousemove">
    <!-- <div>X:{{ offsetX }};Y:{{ offsetY }}</div> -->
    <div class="flex" style="height: 100%">
      <div class="side">
        <h1>图表</h1>
        <div v-for="item in typeChart" :key="item.name" class="name">
          {{ item.name }}
          <a-button type="primary" @click="change(item)">新增</a-button>
        </div>
      </div>
      <div class="content">
        <template v-for="item in data" :key="item.id">
          <div
            class="box"
            :id="item.id"
            :style="item.style"
            @click="onmousedown($event, item.id)"
          >
            <Echarts :option="item.option" />
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import Echarts from "@/components/Echarts.vue";
import chartData from "@/utils/chart";
const option = {
  xAxis: {
    data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
  },
  yAxis: {},
  series: [
    {
      name: "销量",
      type: "line",
      data: [5, 20, 36, 10, 10, 2],
    },
  ],
};
export default defineComponent({
  components: {
    Echarts,
  },
  name: "workplace",
  setup() {
    console.log("我执行了");
    const state = reactive({
      offsetX: 0,
      offsetY: 0,
      echart: null,
      typeChart: chartData,
      data: [{ id: "box1", style: { left: "0px", top: "0px" }, option: option }],
      seletName: "box1",
    });
    let x = 0;
    let y = 0;
    let l = 0;
    let t = 0;
    var isDown = false;
    const mousemove = (a: any, b: any) => {
      // console.log(a.offsetX, a.offsetY);
      const ndoe: any = document.getElementById(`${state.seletName}`);
      state.offsetX = a.offsetX;
      state.offsetY = a.offsetY;
      if (isDown == false) {
        return;
      }
      //获取x和y
      var nx = a.clientX;
      var ny = a.clientY;
      //计算移动后的左偏移量和顶部的偏移量
      var nl = nx - (x - l);
      var nt = ny - (y - t);
      ndoe.style.left = nl + "px";
      ndoe.style.top = nt + "px";
    };
    const change = (value: { name: string; type: string; option: any }) => {
      // console.log(value);
      // option.series[0].type = value.type;
      // (state.echart as any).init();
      let obj = {
        id: "box2",
        style: { left: "400px", top: "400px" },
        option: option,
      };
      obj.id = `box${state.data.length + 1}`;
      obj.option = value.option;
      // obj.style.left = `${400 * state.data.length}px`;
      // console.log(obj);
      state.data.push(obj);
    };
    const onmousedown = (e: any, id: string) => {
      console.log(e, id);
      const node: any = document.getElementById(`${id}`);
      state.seletName = id;
      //获取x坐标和y坐标
      x = e.clientX;
      y = e.clientY;
      //获取左部和顶部的偏移量
      l = node.offsetLeft;
      t = node.offsetTop;
      isDown = !isDown;
      console.log(node.style.left, node.style.top);
      let obj = state.data.find((item: any) => item.id === id);
      // console.log(obj);
      obj!.style.left = node.style.left;
      obj!.style.top = node.style.top;

      //开关打开
      // isDown = true;
    };
    return { mousemove, ...toRefs(state), change, option, onmousedown };
  },
});
</script>
<style lang="less" scoped>
.work {
  width: 100%;
  height: 100%;

  .side {
    width: 10%;
    height: 100%;
    border: 1px solid #ccc;
    .name {
      width: 100%;
      height: 40px;
      left: 30px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: rgb(255, 255, 255);
    }
    .name:hover {
      background-color: rgb(111, 200, 118);
    }
  }
  .content {
    width: 60%;
    height: 100%;
    position: relative;
    .box {
      height: 100px;
      position: absolute;
      width: 300px;
      height: 300px;
      border: 1px solid #ccc;
    }
  }
}
</style>
