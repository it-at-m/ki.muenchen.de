import DefaultTheme from "vitepress/theme";

import LhmThemeExtension from "./LhmThemeExtension.vue";

import "./style.css";
import "vuetify/styles";

import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import '@mdi/font/css/materialdesignicons.css' // Ensure you have installed @mdi/font

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi', // This is the default set, specifying it ensures clarity
  },
});

export default {
  ...DefaultTheme,
  Layout: LhmThemeExtension,
  enhanceApp({ app }) {
    app.use(vuetify);
    app.component("VIcon", components.VIcon);
  },
};
