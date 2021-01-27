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
import { mapState } from "vuex";
export default {
  data() {
    return {
      length: 20,
      currentIndex: 0,
      text: ""
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
    createTextList() {
      const textModel = new CreateText(this.practiceLetters, this.keyLetter);
      const arr = new Array(this.length).fill(0);
      const res = arr.map(() => textModel.create());
      this.text = res.join(" ").toLowerCase();
    },
    next() {
      this.currentIndex++;
      if (this.currentIndex === this.text.length) {
        this.currentIndex = 0;
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
