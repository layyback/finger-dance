<template>
  <ul class="menu">
    <li>Login</li>
    <li>Settings</li>
    <li>Data</li>
    <li>登录</li>
  </ul>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
.menu {
  border: @border-style;
  padding: 20px 30px;
  box-sizing: border-box;
  min-height: 100%;
  li {
    font-size: 20px;
    height: 3em;
    line-height: 3em;
    border-bottom: @border-style;
  }
}
</style>
