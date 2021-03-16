<template>
  <a-dropdown>
    <a class="ant-dropdown-link" @click="(e) => e.preventDefault()">
      <GithubOutlined :style="{ fontSize: '30px', color: '#000' }" />
    </a>
    <template #overlay>
      <a-menu>
        <a-menu-item>
          <a href="javascript:;">切换用户</a>
        </a-menu-item>
        <a-menu-item>
          <!-- <a href="http://www.w3school.com.cn/">Visit W3School</a> -->
          <a target="_blank" href="https://github.com/huoqingzhu/Admin-pro">项目地址</a>
        </a-menu-item>
        <a-menu-item>
          <a href="javascript:;" @click="$router.push('/login')">退出登陆</a>
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { GithubOutlined } from "@ant-design/icons-vue";
import { Dropdown } from "ant-design-vue";
export default defineComponent({
  components: {
    GithubOutlined,
    [Dropdown.name]: Dropdown,
  },
});
</script>
