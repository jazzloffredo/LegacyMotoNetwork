import Vue from "vue";
import VueCookies from "vue-cookies";
import VueTypedJs from "vue-typed-js";
import VueTheMask from "vue-the-mask";

import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import titleMixin from "./mixins/titleMixin";
import store from "./store";

Vue.use(VueCookies);
Vue.use(VueTypedJs);
Vue.use(VueTheMask);
Vue.mixin(titleMixin);

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!store.state.authentication.isAuthenticated) {
      next("/landing");
    } else {
      next();
    }
  } else {
    next();
  }
});

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  store,
  render: (h) => h(App),
}).$mount("#app");
