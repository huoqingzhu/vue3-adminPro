<template>
  <div ref="charts" style="width: 100%; height: 100%"></div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref, onUnmounted } from "vue";
import * as echarts from "echarts/core";
import {
  BarChart,
  // 系列类型的定义后缀都为 SeriesOption
  BarSeriesOption,
  RadarChart,
  LineChart,
  LineSeriesOption,
  PieChart,
  GaugeChart,
  PieSeriesOption,
} from "echarts/charts";
import {
  TitleComponent,
  LegendComponent,
  // 组件类型的定义后缀都为 ComponentOption
  TooltipComponent,
  TitleComponentOption,
  GridComponent,
  GridComponentOption,
} from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";

// 通过 ComposeOption 来组合出一个只有必须组件和图表的 Option 类型
type ECOption = echarts.ComposeOption<
  | BarSeriesOption
  | LineSeriesOption
  | TitleComponentOption
  | GridComponentOption
  | PieSeriesOption
>;

// 注册必须的组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  BarChart,
  CanvasRenderer,
  LineChart,
  PieChart,
  GaugeChart,
  RadarChart,
]);

export default defineComponent({
  props: {
    option: {
      type: Object,
      default() {
        return {
          xAxis: {
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
          },
          yAxis: {},
          series: [
            {
              name: "销量",
              type: "bar",
              data: [5, 20, 36, 10, 10, 2],
            },
          ],
        };
      },
    },
  },
  setup(props: any) {
    const charts: any = ref(null);
    let myChart: any;
    onMounted(() => {
      myChart = echarts.init(charts.value);
      myChart.setOption(props.option);
    });
    const resize = (option: any) => {
      myChart.resize();
    };
    const init = () => {
      myChart.setOption(props.option);
    };
    window.addEventListener("resize", resize);
    onUnmounted(() => {
      window.removeEventListener("resize", resize);
    });
    return {
      charts,
      init,
    };
  },
});
</script>
