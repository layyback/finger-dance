import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "element-ui/lib/theme-chalk/index.css";
import { Slider, Switch, ColorPicker } from "element-ui";

Vue.use(Slider);
Vue.use(Switch);
Vue.use(ColorPicker);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
