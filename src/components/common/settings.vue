<template>
  <div class="settings-container">
    <div class="setting-item">
      <label for="practiceLetters">预设练习键</label>
      <span
        :class="[
          'letter',
          {
            practiceLetter: isPracticeLetter(item),
            keyLetter: isKeyLetter(item)
          }
        ]"
        v-for="(item, index) in allLetters"
        :key="index"
        @click="setKeyLetter(item, index)"
        >{{ item }}</span
      >
      <el-slider
        :min="min"
        :max="allLetters.length"
        :show-tooltip="false"
        v-model="practiceLetterRange"
        @input="changePracticeLetters"
      ></el-slider>
    </div>
    <div class="setting-item">
      <label for="practiceLetters">文本长度</label>
      <el-slider
        :min="0"
        :max="20"
        :show-tooltip="false"
        :value="letterLength"
        style="margin-top: -30px"
        @input="changeLetterLength($event)"
      ></el-slider>
    </div>
    <div class="setting-item">
      <label for="showFingers">显示指位</label>
      <el-switch
        :value="showFingers"
        active-color="#13ce66"
        @change="changeFingersShow"
      >
      </el-switch>
    </div>
    <div class="setting-item">
      <label for="keyboardColor">键盘主题色</label>
      <el-color-picker
        @change="changeKeyboardColor"
        :value="keyboardColor"
        show-alpha
        size="mini"
      ></el-color-picker>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      practiceLetterRange: this.minRange,
      min: 0
    };
  },
  computed: {
    ...mapState([
      "allLetters",
      "showFingers",
      "keyboardColor",
      "practiceLetters",
      "keyLetter",
      "letterLength",
      "minRange"
    ])
  },
  methods: {
    ...mapMutations([
      "changeFingersShow",
      "changeKeyboardColor",
      "setLetterLength"
    ]),
    isKeyLetter(val) {
      if (!val) return false;
      return val === this.keyLetter;
    },
    isPracticeLetter(val) {
      if (!val) return false;
      return this.practiceLetters.includes(val);
    },
    changeLetterLength(val) {
      const min = this.minRange;
      this.setLetterLength(Math.max(min, val));
    },
    // 滑动设置预设练习按键范围
    changePracticeLetters(val) {
      if (val < this.minRange) {
        this.practiceLetterRange = this.minRange;
        return;
      }
      this.$store.commit("settingPracticeLetters", val);
      // 调整重点练习按键
      const keyLetterIndex = this.practiceLetters.indexOf(this.keyLetter);
      if (keyLetterIndex === -1) {
        const lastPracticeLetter = this.practiceLetters.slice(-1);
        this.setKeyLetter(lastPracticeLetter, this.practiceLetters.length - 1);
      }
    },
    // 点击设置重点练习按键
    setKeyLetter(letter, index) {
      if (index >= this.practiceLetters.length) return;
      this.$store.commit("setKeyLetter", letter);
    }
  }
};
</script>
<style lang="less" scoped>
@practice-color: #67c23a;
@key-color: #f56c6c;
@default-color: #888;
.settings-container {
  width: fit-content;
  margin: 0 auto;
  text-align: left;
  label {
    display: inline-block;
    min-width: 80px;
  }
  .letter {
    display: inline-block;
    width: 1em;
    height: 1em;
    line-height: 1em;
    border: 1px solid @default-color;
    color: @default-color;
    margin-left: 0.5em;
    text-align: center;
    cursor: pointer;
    &.practiceLetter {
      border-color: @practice-color;
      color: @practice-color;
    }
    &.keyLetter {
      border-color: @key-color;
      color: @key-color;
    }
  }
  .el-slider {
    margin-left: 84px;
  }
  .el-switch {
    vertical-align: text-top;
    margin-left: 0.5em;
  }
  .el-color-picker {
    vertical-align: bottom;
    margin-left: 0.5em;
  }
}
</style>
