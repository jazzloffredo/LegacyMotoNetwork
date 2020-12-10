import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: "#4056a1",
        secondary: "#f13c20",
        tertiary: "d79922",
        secondary_accent: "#c5cbe3",
        tertiary_accent: "#efe2ba",
        confirmation: "#64b450",
        error: "#ff0033",
        warning: "ffcc00",
      },
    },
  },
});
