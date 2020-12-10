import Vue from "vue";

// initial state
const state = {
  isLoading: false,
  showCompleteRegistrationModal: false,
  details: {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    gender: "",
    dob: "",
    city: "",
    stateAbbrev: "",
  },
};

// actions
const actions = {
  preRegister({ commit }, preRegistrationDetails) {
    commit("setRegistrationDetails", preRegistrationDetails);
    commit("setShowCompleteRegistrationModal", true);
  },
  cancelRegistration({ commit }) {
    commit("setShowCompleteRegistrationModal", false);
  },
  completeRegistration({ commit }, additionalDetails) {
    commit("toggleIsLoading");
    commit("setRegistrationDetails", additionalDetails);
    Vue.axios
      .post("auth/register", state.details)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        throw new Error(`API ${error}`);
      })
      .finally(() => {
        commit("toggleIsLoading");
      });
    commit("setShowCompleteRegistrationModal", false);
  },
};

// mutations
const mutations = {
  setShowCompleteRegistrationModal(state, show) {
    state.showCompleteRegistrationModal = show;
  },
  setRegistrationDetails(state, details) {
    state.details = { ...state.details, ...details };
  },
  toggleIsLoading(state) {
    state.isLoading = !state.isLoading;
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
