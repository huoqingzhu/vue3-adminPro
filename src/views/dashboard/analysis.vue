<template>
  <div style="width: 80%; height: 40%"><Echarts :option="option" /></div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Echarts from "@/components/Echarts.vue";
import * as echarts from "echarts/core";
export default defineComponent({
  components: {
    Echarts,
  },

  setup() {
    const option = {
      series: [
        {
          type: "gauge",
          axisLine: {
            lineStyle: {
              width: 30,
              color: [
                [0.3, "#67e0e3"],
                [0.7, "#37a2da"],
                [1, "#fd666d"],
              ],
            },
          },
          pointer: {
            itemStyle: {
              color: "auto",
            },
          },
          axisTick: {
            distance: -30,
            length: 8,
            lineStyle: {
              color: "#fff",
              width: 2,
            },
          },
          splitLine: {
            distance: -30,
            length: 30,
            lineStyle: {
              color: "#fff",
              width: 4,
            },
          },
          axisLabel: {
            color: "auto",
            distance: 40,
            fontSize: 16,
          },
          detail: {
            valueAnimation: true,
            fontSize: 16,
            formatter: "{value} km/h",
            color: "auto",
          },
          data: [
            {
              value: 70,
            },
          ],
        },
      ],
    };

    return { option };
  },
});
</script>
