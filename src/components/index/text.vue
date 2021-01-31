<template>
  <div class="text">
    <span
      v-for="(item, index) in text"
      :key="index"
      :class="{ active: index === currentIndex }"
      >{{ item | formatLetter }}</span
    >
  </div>
</template>

<script>
import CreateText from "@/assets/js/createText";
import { mapMutations, mapState } from "vuex";
export default {
  data() {
    return {
      length: 20,
      currentIndex: 0,
      text: "",
      errorNum: 0,
      startTime: ""
    };
  },
  computed: {
    ...mapState(["currentLetter", "practiceLetters", "keyLetter"])
  },
  watch: {
    currentLetter(val) {
      if (val === null) return;
      const currentLetter = this.text[this.currentIndex];
      if (val === currentLetter.toLowerCase()) {
        this.next();
      } else {
        this.errorNum++;
      }
    },
    practiceLetters() {
      this.createTextList();
    },
    keyLetter() {
      this.createTextList();
    }
  },
  created() {
    this.createTextList();
  },
  methods: {
    ...mapMutations(["saveError", "saveSpeed", "saveScore"]),
    createTextList() {
      const textModel = new CreateText(this.practiceLetters, this.keyLetter);
      const arr = new Array(this.length).fill(0);
      const res = arr.map(() => textModel.create());
      this.text = res.join(" ").toLowerCase();
      this.startTime = new Date();
      this.errorNum = 0;
    },
    getSpeed() {
      const lastStartTime = this.startTime;
      this.startTime = new Date();
      const speed = Math.floor(
        (this.text.length / (this.startTime - lastStartTime)) * 60000
      );
      return speed;
    },
    getScore(speed, errorNum) {
      return speed * 5 - errorNum * 10;
    },
    next() {
      this.currentIndex++;
      if (this.currentIndex === this.text.length) {
        this.currentIndex = 0;
        const speed = this.getSpeed();
        const score = this.getScore(speed, this.errorNum);
        this.saveSpeed(speed); // 保存上次速度
        this.saveError(this.errorNum); // 保存上次错误数量
        this.saveScore(score); // 保存上次得分
        this.createTextList();
      }
    }
  },
  filters: {
    formatLetter(val) {
      if (!val) return "";
      return val === " " ? "␣" : val;
    }
  }
};
</script>

<style lang="less" scoped>
@keyframes cursor {
  0% {
    background: none;
    color: #000;
  }
  50% {
    background: #000;
    color: #fff;
  }
  100% {
    background: none;
    color: #000;
  }
}
@font-face {
  font-family: "Ubuntu Mono";
  src: url("../../assets/font/UbuntuMono-RI.ttf");
}

.text {
  width: 700px;
  margin: 80px auto;
  text-align: left;
  span {
    font-family: Ubuntu Mono, Lucida Console, monospace;
    display: inline-block;
    text-align: center;
    font-size: 24px;
    font-weight: 500;
    min-width: 0.5em;
    &.active {
      animation: cursor 0.6s ease infinite;
    }
  }
}
</style>
