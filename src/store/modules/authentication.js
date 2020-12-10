import Vue from "vue";

// initial state
const state = {
  isLoading: false,
  isAuthenticated: false,
  uuid: "",
};

// actions
const actions = {
  loadSession({ commit }) {
    commit("setIsLoading", true);
    return Vue.axios
      .get("auth/session")
      .catch((error) => {
        throw new Error(`API ${error}`);
      })
      .then((result) => {
        commit("setIsAuthenticated", true);
        return result.data.uuid;
      })
      .finally(() => {
        commit("setIsLoading", false);
      });
  },
  login({ commit }, { email, password }) {
    commit("setIsLoading", true);
    return Vue.axios
      .post("auth/login", { email, password })
      .catch((error) => {
        throw new Error(`API ${error}`);
      })
      .then((result) => {
        commit("setIsAuthenticated", true);
        commit("user/setUUID", result.data.uuid, { root: true });
      })
      .finally(() => {
        commit("setIsLoading", false);
      });
  },
  logout({ commit }) {
    commit("setIsLoading", true);
    commit("setIsAuthenticated", false);
    return Vue.axios
      .post("auth/logout")
      .catch((error) => {
        throw new Error(`API ${error}`);
      })
      .then((result) => {
        console.log(result);
      })
      .finally(() => {
        commit("setIsLoading", false);
      });
  },
};

// mutations
const mutations = {
  setIsAuthenticated(state, isAuthenticated) {
    state.isAuthenticated = isAuthenticated;
  },
  setIsLoading(state, isLoading) {
    state.isLoading = isLoading;
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
