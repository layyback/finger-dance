<template>
  <div class="speed-container">
    <div class="item">
      <label for="speed">速度</label>
      <span>20</span>
    </div>
    <div class="item">
      <label for="error">错误</label>
      <span>3</span>
    </div>
    <div class="item">
      <label for="score">得分</label>
      <span>688</span>
    </div>
    <button @click="$store.dispatch('setScore1')">action</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
.speed-container {
  width: 756px;
  margin: 0 auto;
  text-align: left;
  display: flex;
  justify-content: space-between;
  label {
    margin-right: 4em;
  }
}
</style>
