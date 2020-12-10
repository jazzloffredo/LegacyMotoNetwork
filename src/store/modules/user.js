import Vue from "vue";

// initial state
const state = {
  isLoading: false,
  uuid: "",
  accountDetails: {
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    dob: "",
    city: "",
    stateAbbrev: "",
  },
  groups: [],
};

// actions
const actions = {
  loadUser({ commit }, uuid) {
    commit("setIsLoading", true);
    return Vue.axios
      .get("user/" + uuid)
      .catch((error) => {
        throw new Error(`API ${error}`);
      })
      .then((result) => {
        commit("setAccountDetails", result.data);
      })
      .finally(() => {
        commit("setIsLoading", false);
      });
  },
  updateUser({ commit }, details) {
    commit("setIsLoading", true);
    commit("setAccountDetails", details);
    return Vue.axios
      .patch("user/" + state.uuid, details)
      .then(() => {
        // TODO: Update complete. Alert user.
      })
      .finally(() => {
        commit("setIsLoading", false);
      });
  },
};

// mutations
const mutations = {
  setIsLoading(state, isLoading) {
    state.isLoading = isLoading;
  },
  setUUID(state, uuid) {
    state.uuid = uuid;
  },
  setAccountDetails(state, details) {
    state.accountDetails = { ...state.accountDetails, ...details };
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
