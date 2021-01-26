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
export default {
  data() {
    return {
      length: 2,
      currentIndex: 0,
      text: "",
    };
  },
  computed: {
    currentLetter() {
      return this.$store.state.currentLetter;
    },
  },
  watch: {
    currentLetter(val) {
      if (val === null) return;
      const currentLetter = this.text[this.currentIndex];
      if (val.toLowerCase() === currentLetter.toLowerCase()) {
        this.next();
      }
    },
  },
  created() {
    this.createTextList();
  },
  methods: {
    createTextList() {
      const arr = new Array(this.length).fill(0);
      const res = arr.map(() => CreateText.create());
      this.text = res.join(" ").toLowerCase();
    },
    next() {
      this.currentIndex++;
      if (this.currentIndex === this.text.length) {
        this.currentIndex = 0;
        this.createTextList();
      }
    },
  },
  filters: {
    formatLetter(val) {
      if (!val) return "";
      return val === " " ? "␣" : val;
    },
  },
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

.text {
  span {
    font-family: Ubuntu Mono, Lucida Console, monospace;
    display: inline-block;
    text-align: center;
    font-size: 20px;
    min-width: 0.5em;
    &.active {
      animation: cursor 0.6s ease infinite;
    }
  }
}
</style>
