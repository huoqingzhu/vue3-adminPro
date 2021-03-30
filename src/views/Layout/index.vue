<template>
  <section class="layout">
    <header class="header">
      <div class="logo" v-if="config.pc"><Logo :color="nav.logo" /></div>
      <div class="hmeau">
        <Meau v-if="header.show" :theme="config.theme" :mode="config.mode" />
        <div class="center" style="width: 60px">
          <MenuUnfoldOutlined
            v-if="!header.show && !nav.show"
            :style="{ fontSize: '30px' }"
            @click="visible = true"
          />
        </div>
      </div>
      <div class="center logo left">
        <User />
      </div>
    </header>
    <nav class="nav" v-if="nav.show">
      <div class="logo" style="height: 60px"><Logo :color="nav.logo" /></div>
      <Meau :mode="config.mode" :theme="config.theme" />
    </nav>
    <main class="main">
      <Loading v-show="$store.state.isLoading" />
      <a-affix
        v-if="config.pc"
        :style="{
          position: 'absolute',
          top: '200px',
          right: 0,
          zIndex: 4,
        }"
        :offset-top="10"
      >
        <div class="affix center" @click="visible = true">
          <SettingOutlined style="font-size: 24px; color: #fff" />
        </div>
      </a-affix>
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </main>
    <a-drawer
      :placement="config.pc ? 'right' : 'left'"
      width="240"
      :closable="false"
      v-model:visible="visible"
    >
      <div v-if="config.pc">
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
      </div>

      <div v-if="!config.pc" class="v12">
        <div class="logo" style="height: 60px"><Logo :color="nav.logo" /></div>
        <Meau mode="inline" :theme="config.theme" />
      </div>
    </a-drawer>
  </section>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  onUnmounted,
  reactive,
  watch,
  ref,
  computed,
  toRaw,
} from "vue";
import { MenuUnfoldOutlined, SettingOutlined } from "@ant-design/icons-vue";
import Example from "@/components/layout/examples.vue";
import Logo from "@/components/layout/logo.vue";
import setRem from "../../utils/rem";
import Meau from "@/components/layout/meau.vue";
import User from "@/components/layout/user.vue";
import Table from "@/components/layout/table.vue";
import { Affix, Drawer } from "ant-design-vue";
import Loading from "@/components/Loading/index.vue";
export default defineComponent({
  components: {
    Example,
    Logo,
    Meau,
    User,
    Table,
    Loading,
    MenuUnfoldOutlined,
    SettingOutlined,
    [Affix.name]: Affix,
    [Drawer.name]: Drawer,
  },
  setup() {
    const detection = () => {
      setRem();
      if (document.body.clientWidth < 1025) {
        Mobile();
      } else {
        changeLayout(config.mode);
      }
    };
    onUnmounted(() => {
      window.removeEventListener("resize", detection);
    });
    onMounted(() => {
      // 观察主题的变化
      watch(
        () => config.mode,
        (a, b) => {
          changeLayout(a);
        },
        { immediate: true }
      );
      watch(
        () => config.theme,
        (a, b) => {
          changeColor(a);
        },
        { immediate: true }
      );
      detection();
      window.addEventListener("resize", detection);
    });

    let Storage;
    if (localStorage.getItem("confing")) {
      Storage = JSON.parse(localStorage.getItem("confing") as string);
    } else {
      Storage = {
        theme: "light", //主题颜色
        mode: "horizontal", //侧边栏模式  horizontal inline
        pc: true, //设备情况
        collapsed: false, //伸缩
      };
    }
    const config = reactive(Storage);
    const visible = ref<boolean>(false);

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
      width: "calc(100vw - 200px)",
      height: "46px",
      ml: "200px",
      bg: "#fff",
      show: false,
    });
    const nav = reactive({
      height: "100vh",
      width: "200px",
      mt: "-46px",
      logo: "#fff",
      show: true,
      mode: "nav",
      bg: "#041527",
    });
    /**
     * 切换布局
     */
    const changeLayout = (type = "inline"): void => {
      config.pc = true;
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
      } else {
        header.width = "calc(100vw - 200px)";
        nav.width = "200px";
        header.ml = "200px";
        header.bg = "#fff";
        nav.show = true;
        header.show = false;
        nav.mode = "nav";
      }
      localStorage.setItem("confing", JSON.stringify(toRaw(config)));
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
      localStorage.setItem("confing", JSON.stringify(toRaw(config)));
    };
    // 切换移动端
    const Mobile = () => {
      console.log("我执行了");
      header.show = false;
      config.pc = false;
      nav.logo = "#1890ff";
      header.height = "46px";
      nav.show = false;
    };
    return { config, visible, state, change, theme, mode, header, nav };
  },
});
</script>

<style lang="less" scoped>
.layout {
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
}
.nav {
  position: absolute;
  height: 100vh;
  margin-top: -46px;
  width: v-bind("nav.width");
  background-color: v-bind("nav.bg");
}
.v12 {
  width: 100%;
  height: 100%;
  background-color: v-bind("nav.bg");
}
.logo {
  height: 100%;
  width: 200px;
  font-weight: 900;
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
  .hmeau {
    width: calc(100vw - 400px);
  }
}
.main {
  width: v-bind("header.width");
  height: calc(100% - 46px);
  margin-left: v-bind("header.ml");
  position: relative;
  overflow: auto;
  .affix {
    width: 46px;
    height: 36px;
    border-radius: 10px;
    background-color: #1890ff;
  }
}
</style>
