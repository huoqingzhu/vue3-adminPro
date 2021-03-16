<template>
  <div class="flex">
    <Example :select="select(1)" @click="change(1)" />
    <Example :select="select(2)" @click="change(2)" :color="['#fff', '#041527']" />
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import Example from "@/components/layout/examples.vue";

export default defineComponent({
  components: {
    Example,
  },
  setup() {
    const state = ref<number>(1);
    const change = (value: number) => {
      state.value = value;
    };
    const select = computed(() => {
      return (value: number) => (state.value === value ? true : false);
    });
    return { select, change };
  },
});
</script>
