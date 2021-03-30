<template>
  <div>
    <svg height="210" width="500">
      <polygon
        points="100,10 40,198 190,78 10,78 160,198"
        style="fill: lime; stroke: purple; stroke-width: 5; fill-rule: nonzero"
      />
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
      <defs>
        <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" style="stop-color: rgb(255, 255, 255); stop-opacity: 0" />
          <stop offset="100%" style="stop-color: rgb(0, 0, 255); stop-opacity: 1" />
        </radialGradient>
      </defs>
      <circle cx="80" cy="80" r="40" stroke="black" stroke-width="2" fill="url(#grad1)" />
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" @click="rectClick">
      <defs>
        <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" style="stop-color: rgb(255, 255, 255); stop-opacity: 0" />
          <stop offset="100%" style="stop-color: rgb(0, 0, 255); stop-opacity: 1" />
        </radialGradient>
      </defs>
      <rect width="300" height="100" rx="20" ry="20" fill="url(#grad1)" />
    </svg>

    <examples />

    <Icon :style="{ color: 'pink', fontSize: '90px' }">
      <template #component>
        <svg
          t="1615974746533"
          viewBox="0 0 1024 1024"
          width="1em"
          height="1em"
          fill="currentColor"
          class="icon"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="1886"
        >
          <path
            d="M615.6 123.6h165.5L512 589.7 242.9 123.6H63.5L512 900.4l448.5-776.9z"
            fill="#41B883"
            p-id="1887"
          ></path>
          <path
            d="M781.1 123.6H615.6L512 303 408.4 123.6H242.9L512 589.7z"
            fill="#34495E"
            p-id="1888"
          ></path>
        </svg>
      </template>
    </Icon>
    <Icon-font type="icon-iconliangdu" />
    <Icon-font type="icon-ele-system-copy" :style="{ color: 'pink', fontSize: '90px' }" />
    <svg width="600" height="300" style="outline: 5px solid #e6e6e6">
      //x y 设定位置
      <rect x="10px" y="10px" width="10" height="10" fill="blue" />
      <rect x="4em" y="1em" width="10" height="10" fill="pink" />
      <rect x="10" y="50" width="1rem" height="1rem" fill="yellow" />
    </svg>
    <div>
      <svg width="300" height="300" viewBox="0 0 400 400">
        <circle cx="200" cy="200" r="200" fill="#fdd" stroke="none"></circle>
      </svg>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import examples from "@/components/Icon/example.vue";
import Icon from "@ant-design/icons-vue";
export default defineComponent({
  components: {
    examples,
    Icon,
  },
  setup() {
    const rect = {
      fill: "#000",
      strokeWidth: 2,
      stroke: "pink",
      fillOpacity: 0.4,
      strokeOpacity: 0.6,
      opacity: 1,
    };
    const rectClick = () => {
      rect.fill = "#000";
      console.log("点击了我");
    };
    return { rect, rectClick };
  },
});
</script>
