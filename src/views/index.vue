<template>
  <div class="index">
    <div class="col-9">
      <text-component />
      <keyboard />
    </div>
    <div class="col-3"></div>
  </div>
</template>

<script>
import textComponent from "@/components/index/text.vue";
import keyboard from "@/components/index/keyboard.vue";
export default {
  name: "Home",
  components: { keyboard, textComponent }
};
</script>

<style lang="less" scoped>
.index {
  display: flex;
  justify-content: space-between;
}
</style>
