<template>
  <a-menu v-model:selectedKeys="current" :mode="mode" :theme="theme" @click="change">
    <template v-for="item in data">
      <template v-if="!item.children">
        <a-menu-item :key="item.path">
          <component
            v-bind:is="item.meta.iocn"
            :style="theme === 'dark' ? { color: '#fff' } : { color: '#1890ff' }"
          ></component>
          <span style="fontsize: 30px">{{ item.name }}</span>
        </a-menu-item>
      </template>
      <template v-else>
        <a-sub-menu :key="item.path">
          <template v-slot:title>
            <span class="submenu-title-wrapper">
              <component
                v-bind:is="item.meta.iocn"
                :style="theme === 'dark' ? { color: '#fff' } : { color: '#1890ff' }"
              ></component>
              <span style="fontsize: 30px">{{ item.name }}</span>
            </span>
          </template>
          <a-menu-item v-for="items in item.children" :key="items.path">
            <component
              v-bind:is="items.meta.iocn"
              :style="theme === 'dark' ? { color: '#fff' } : { color: '#1890ff' }"
            ></component>
            <span style="fontsize: 20px">{{ items.name }}</span>
          </a-menu-item>
        </a-sub-menu>
      </template>
    </template>
  </a-menu>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import { MailOutlined, AppstoreOutlined, SettingOutlined } from "@ant-design/icons-vue";
export default defineComponent({
  components: {
    MailOutlined,
    AppstoreOutlined,
    SettingOutlined,
  },
  props: {
    mode: {
      type: String,
      default: "horizontal",
    },
    theme: {
      type: String,
      default: "dark",
    },
  },
  setup() {
    const router = useRouter();
    const current = ref<string[]>(["mail"]);
    const data = JSON.parse(localStorage.getItem("router") as string);
    const change = (e: { key: string }) => {
      router.push(e.key).catch(() => {});
    };
    return {
      current,
      data,
      change,
    };
  },
});
</script>
<style scoped>
/* .ant-menu-horizontal {
  height: 9vh;
} */
</style>
