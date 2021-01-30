<template>
  <div class="speed-container">
    <div class="item">
      <label for="speed">速度</label>
      <span>{{ speed }}</span>
    </div>
    <div class="item">
      <label for="error">错误</label>
      <span>{{ error }}</span>
    </div>
    <div class="item">
      <label for="score">得分</label>
      <span>{{ score }}</span>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["speed", "error", "score"])
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
