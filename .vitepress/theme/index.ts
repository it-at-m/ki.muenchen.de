import DefaultTheme from "vitepress/theme";

import LhmThemeExtension from "./LhmThemeExtension.vue";

import "./style.css";
import "vuetify/styles";

import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({ components, directives });

export default {
  ...DefaultTheme,
  Layout: LhmThemeExtension,
  enhanceApp({ app }) {
    app.use(vuetify);
  },
};
