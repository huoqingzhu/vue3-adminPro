<template>
  <router-view v-slot="{ Component }">
    <keep-alive :include="['login']">
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>
