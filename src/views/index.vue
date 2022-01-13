<template>
  <div class="index">
    <div class="col-12">
      <settings-info />
      <speed />
      <text-component />
      <div class="keyboard-container">
        <keyboard />
        <fingers v-if="showFingers" class="fingers" />
      </div>
    </div>
    <!-- <div class="col-2">
      <menu-component />
    </div> -->
  </div>
</template>

<script>
import settingsInfo from "@/components/common/settings.vue";
import textComponent from "@/components/index/text.vue";
import keyboard from "@/components/index/keyboard.vue";
import fingers from "@/components/index/fingers.vue";
import speed from "@/components/index/speed.vue";
// import menuComponent from "@/components/common/menu.vue";
import { mapState } from "vuex";
export default {
  name: "Home",
  components: {
    keyboard,
    textComponent,
    fingers,
    speed,
    settingsInfo,
    // menuComponent
  },
  computed: {
    ...mapState(["showFingers"])
  }
};
</script>

<style lang="less" scoped>
.index {
  display: flex;
  justify-content: space-between;
  .keyboard-container {
    position: relative;
    width: fit-content;
    margin: 0 auto;
    .fingers {
      position: absolute;
      top: 28px;
      left: -4px;
      width: 663px;
    }
  }
}
</style>
