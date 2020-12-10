import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";

import authentication from "./modules/authentication";
import feed from "./modules/feed";
import registration from "./modules/registration";
import user from "./modules/user";

Vue.use(Vuex);
Vue.use(VueAxios, axios);

Vue.axios.defaults.withCredentials = true;
Vue.axios.defaults.baseURL =
  "http://localhost:3000/api/v1"; /* TODO: make this environment dependent */

export default new Vuex.Store({
  modules: {
    authentication,
    feed,
    registration,
    user,
  },
});
