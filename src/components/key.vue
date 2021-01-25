<template>
  <div
    class="key"
    :style="{
      'min-width': keyWidth + 'px',
      flex: type === 'Fill' ? 1 : 'none',
    }"
  >
    <div class="multiple" v-if="subName">
      <span v-html="subName"></span>
      <span v-html="primaryName"></span>
    </div>
    <span v-else v-html="primaryName"></span>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "",
    },
    primaryName: {
      type: String,
      default: "",
    },
    subName: {
      type: String,
      defualt: "",
    },
  },
  computed: {
    keyWidth() {
      let keyWidth = 44;
      const keyType = this.type;
      if (!keyType) return keyWidth;
      switch (keyType) {
        case "Letter":
          keyWidth = 44;
          break;
        case "Tab":
          keyWidth = 72;
          break;
        case "Caps Lock":
          keyWidth = 82;
          break;
        case "Shift":
          keyWidth = 110;
          break;
        case "Function":
          keyWidth = 80;
          break;
        default:
          break;
      }
      return keyWidth;
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.key {
  height: 44px;
  line-height: 44px;
  background: skyblue;
  border-radius: 4px;
  margin: 2px;
  .multiple {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    span {
      line-height: 1em;
    }
  }
}
</style>
