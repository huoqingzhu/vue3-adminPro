<template>
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
      <circle cx="100" cy="50" r="40" stroke="black" stroke-width="2" fill="red" />
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
  setup() {},
});
</script>
