<template>
  <section class="layout">
    <header class="header">
      <div class="logo"><Logo :color="nav.logo" /></div>
      <div style="width: 76vw">
        <Meau v-if="header.show" :theme="config.theme" :mode="config.mode" />
        <MenuUnfoldOutlined
          v-if="!header.show && !nav.show"
          :style="{ fontSize: '30px' }"
          @click="visible = true"
        />
      </div>
      <div class="center logo left">
        <User />
      </div>
    </header>
    <nav class="nav" v-if="nav.show">
      <div class="logo"><Logo :color="nav.logo" /></div>
      <Meau :mode="config.mode" :theme="config.theme" />
    </nav>
    <main class="center main">
      <a-affix
        v-if="header.show || nav.show"
        :style="{
          position: 'absolute',
          top: '200px',
          right: 0,
        }"
        :offset-top="10"
      >
        <div class="affix center" @click="visible = true">
          <SettingOutlined style="font-size: 24px; color: #fff" />
        </div>
      </a-affix>
      <router-view v-slot="{ Component }">
        <transition>
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </transition>
      </router-view>
    </main>
    <a-drawer placement="right" width="240" :closable="false" v-model:visible="visible">
      <div>
        <h3>整体风格设置</h3>
        <div class="flex">
          <Example :select="theme('light')" @click="config.theme = 'light'" />
          <Example
            :select="theme('dark')"
            @click="config.theme = 'dark'"
            :color="['#fff', '#041527']"
          />
        </div>
      </div>
      <a-divider />
      <div>
        <h3>导航模式</h3>
        <div class="flex">
          <Example :select="mode('inline')" @click="config.mode = 'inline'" />
          <Example
            :select="mode('horizontal')"
            @click="config.mode = 'horizontal'"
            :color="['#041527']"
          />
        </div>
      </div>
    </a-drawer>
  </section>
</template>
<script lang="ts" setup="props">
import { onMounted, onUnmounted, reactive, watch, ref, computed } from "vue";
import { MenuUnfoldOutlined, SettingOutlined } from "@ant-design/icons-vue";
import Example from "@/components/layout/examples.vue";

import Logo from "./layout/logo.vue";
import setRem from "../utils/rem";
import Meau from "./layout/meau.vue";
import User from "./layout/user.vue";
import Table from "./layout/table.vue";
setRem();
const detection = () => {
  setRem();
  if (document.body.clientWidth < 600) {
    Mobile();
  } else {
    if (nav.mode == "nav") {
      changeLayout("nav");
    } else {
      changeLayout("header");
    }
  }
};
onUnmounted(() => {
  window.removeEventListener("resize", detection);
});
onMounted(() => {
  detection();
});
window.addEventListener("resize", detection);

const config = reactive({
  theme: "dark", //主题颜色
  mode: "inline", //侧边栏模式
});
const visible = ref<boolean>(false);

// 观察主题的变化
watch(
  () => config.mode,
  (a, b) => {
    changeLayout(a);
  }
);
watch(
  () => config.theme,
  (a, b) => {
    changeColor(a);
  }
);
const state = ref<number>(1);
const change = (value: number) => {
  state.value = value;
};
const theme = computed(() => {
  return (value: string) => (config.theme === value ? true : false);
});
const mode = computed(() => {
  return (value: string) => (config.mode === value ? true : false);
});
const header = reactive({
  width: "88vw",
  height: "1.22667rem",
  ml: "12vw",
  bg: "#fff",
  show: false,
});
const nav = reactive({
  height: "100vh",
  width: "12vw",
  mt: "-1.22667rem",
  logo: "#fff",
  show: true,
  mode: "nav",
  bg: "#041527",
});
/**
 * 切换布局
 */
const changeLayout = (type = "inline"): void => {
  if (type === "horizontal") {
    header.width = "100vw";
    header.ml = "0";
    nav.width = "0";
    nav.show = false;
    header.show = true;
    nav.mode = "header";
    if (config.theme === "dark") {
      header.bg = "#041527";
    }
    console.log(nav);
  } else {
    header.width = "88vw";
    nav.width = "12vw";
    header.ml = "12vw";
    header.bg = "#fff";
    nav.show = true;
    header.show = false;
    nav.mode = "nav";
  }
  // detection();
};
/**
 * 切换颜色
 */
const changeColor = (type = "light") => {
  if (type == "light") {
    nav.bg = "#fff";
    nav.logo = "#1890ff";
    header.bg = "#fff";
  } else {
    nav.bg = "#041527";
    nav.logo = "#fff";
    if (config.mode === "horizontal") {
      header.bg = "#041527";
    }
  }
};
// 切换移动端
const Mobile = () => {
  header.show = false;
  nav.logo = "#1890ff";
  if (nav.mode == "nav") {
    header.width = "100vw";
    header.ml = "0";
    nav.width = "80vw";
    header.bg = "#fff";
    nav.show = false;
  }
};
</script>
<style lang="less" scoped>
.layout {
  width: 100vw;
  height: 100vh;
  position: relative;
}
.nav {
  position: absolute;
  height: 100vh;
  margin-top: -1.22667rem;
  width: v-bind("nav.width");
  background-color: v-bind("nav.bg");
}
.logo {
  height: v-bind("header.height");
  width: 12vw;
  color: v-bind("nav.logo");
  // background-color: v-bind("nav.bg");
}
.left {
  display: flex;
  justify-content: flex-end;
}
.header {
  // position: absolute;
  display: flex;
  justify-content: space-between;
  background-color: v-bind("header.bg");
  width: 100vw;
  height: v-bind("header.height");
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
}
.main {
  width: v-bind("header.width");
  height: calc(100% - 1.22667rem);
  margin-left: v-bind("header.ml");
  position: relative;
  .affix {
    width: 3vw;
    height: 2.6vw;
    border-radius: 10px;
    background-color: #1890ff;
  }
}
</style>
