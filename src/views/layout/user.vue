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
          <a href="javascript:;">个人中心</a>
        </a-menu-item>
        <a-menu-item>
          <a href="javascript:;" @click="$router.push('/login')">退出登陆</a>
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>
<script lang="ts" setup="props">
import { GithubOutlined } from "@ant-design/icons-vue";
const userOut = () => {};
</script>
