<template>
  <h1>虚位以待</h1>
</template>
<script lang="ts" setup="props">
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { article } from "@/api/index";

const router = useRouter();
const store = useStore();
const goLogin = () => {
  router.push("/login");
};
const add = () => {
  store.commit("addNum");
  state.num = store.state.num;
  state.num > 20 ? (state.color = "pink") : (state.color = "#ccc");
};
article().then((res: any) => {
  console.log(res);
});
const state = reactive({
  name: "霍庆祝",
  num: 10,
  color: "#ccc",
});
</script>
<style>
.text {
  color: v-bind("state.color");
}
.login {
  width: 100%;
  height: 100px;
  line-height: 100px;
  background-color: pink;
}
</style>
