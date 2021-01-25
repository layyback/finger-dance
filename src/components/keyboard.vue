<template>
  <div class="keyboard">
    <key v-for="(item, index) in list" :key="index" v-bind="item" />
  </div>
</template>

<script>
import key from "@/components/key.vue";
import mock from "@/assets/js/mock";
export default {
  components: { key },
  data() {
    return {
      list: mock
    };
  },
};
</script>

<style lang="less" scoped>
.keyboard {
  width: 722px;
  margin: 80px auto;
  padding: 12px;
  background: @keyboard-bg-color;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
}
</style>
