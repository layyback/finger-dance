<template>
  <div>
    {{ text }}
  </div>
</template>

<script>
import CreateText from "@/assets/js/createText";
export default {
  data() {
    return {
      length: 20,
      text: "",
    };
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
  },
};
</script>

<style lang="less" scoped></style>
