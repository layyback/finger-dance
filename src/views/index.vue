<template>
  <div class="index">
    <div class="col-9">
      <keyboard />
    </div>
    <div class="col-3"></div>
  </div>
</template>

<script>
import keyboard from "@/components/keyboard.vue";
export default {
  name: "Home",
  components: { keyboard }
};
</script>

<style lang="less" scoped>
.index {
  display: flex;
  justify-content: space-between;
}
</style>
