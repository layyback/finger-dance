<template>
  <div class="speed-container">
    <div class="item">
      <label for="speed">速度</label>
      <span>{{ speed }}</span
      >&nbsp;&nbsp;
      <span :class="['arrow', { down: speedGrowth < 0 }]" v-if="speedGrowth">{{
        speedGrowth | percentage
      }}</span>
    </div>
    <div class="item">
      <label for="error">错误</label>
      <span>{{ error }}</span
      >&nbsp;&nbsp;
      <span
        :class="['arrow error', { down: errorGrowth > 0 }]"
        v-if="errorGrowth"
        >{{ errorGrowth }}</span
      >
    </div>
    <div class="item">
      <label for="score">得分</label>
      <span>{{ score }}</span
      >&nbsp;&nbsp;
      <span :class="['arrow', { down: scoreGrowth < 0 }]" v-if="scoreGrowth">{{
        scoreGrowth | percentage
      }}</span>
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
    ...mapState([
      "speed",
      "speedGrowth",
      "error",
      "errorGrowth",
      "score",
      "scoreGrowth"
    ])
  },
  filters: {
    percentage(val) {
      if (!val) return "";
      return parseInt(val * 100) + "%";
    }
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
  .item {
    label {
      margin-right: 4em;
    }
    .arrow {
      display: inline-block;
      padding-right: 20px;
      position: relative;
      margin-left: 20px;
      &::after {
        position: absolute;
        top: -4px;
        right: -2px;
        width: 20px;
        height: 28px;
        content: "";
        background: url("~@/assets/img/arrow-up.svg") center / cover no-repeat;
      }
      &.down::after {
        background: url("~@/assets/img/arrow-down.svg") center / cover no-repeat;
        transform: rotateZ(180deg);
      }
      &.error::after {
        transform: rotateZ(180deg);
      }
      &.error.down::after {
        transform: rotateZ(0deg);
      }
    }
  }
}
</style>
