import { defineConfig } from "vitepress";
import lightbox from "vitepress-plugin-lightbox";
import llmstxt from "vitepress-plugin-llms";
import { withMermaid } from "vitepress-plugin-mermaid"; // https://vitepress.dev/reference/site-config

// https://vitepress.dev/reference/site-config
const vitepressConfig = defineConfig({
  title: " ",
  titleTemplate: "ki.muenchen.de",
  description: "Dokumentation zu KI-Systemen der Landeshauptstadt München",
  cleanUrls: true,
  head: [["link", { rel: "icon", href: `/favicon.ico` }]],
  lang: "de-DE",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      {
        text: "Blog",
        link: "/blog",
      },
      {
        text: "KI-Systeme",
        link: "/ki-systeme",
      },
      {
        text: "Datensätze",
        link: "/datensaetze",
      },
      { text: "KI Competence Center", link: "/kicc" },
    ],
    outline: { level: [2, 3], label: "Seiteninhalt" },
    socialLinks: [
      { icon: "github", link: "https://github.com/it-at-m/ki.muenchen.de" },
    ],
    editLink: {
      pattern: "https://github.com/it-at-m/ki.muenchen.de/blob/main/:path",
      text: "Diese Seite auf GitHub anzeigen",
    },
    search: {
      provider: "local",
      options: {
        locales: {
          root: {
            translations: {
              button: { buttonText: "Suche", buttonAriaLabel: "Suche" },
              modal: {
                displayDetails: "Details anzeigen",
                resetButtonTitle: "Suche zurücksetzen",
                backButtonTitle: "Suche schließen",
                noResultsText: "Keine Ergebnisse",
                footer: {
                  selectText: "Auswählen",
                  selectKeyAriaLabel: "Eingabetaste",
                  navigateText: "Navigieren",
                  navigateUpKeyAriaLabel: "Pfeil nach oben",
                  navigateDownKeyAriaLabel: "Pfeil nach unten",
                  closeText: "Schließen",
                  closeKeyAriaLabel: "esc",
                },
              },
            },
          },
        },
      },
    },
    docFooter: { prev: "Vorherige Seite", next: "Nächste Seite" },
    darkModeSwitchLabel: "Darstellung",
    lightModeSwitchTitle: "Zum hellen Modus wechseln",
    darkModeSwitchTitle: "Zum dunklen Modus wechseln",
    sidebarMenuLabel: "Menü",
    returnToTopLabel: "Zurück nach oben",
    externalLinkIcon: true,
    logo: {
      dark: `/img/logo/kicc_tuerkis_100px.png`,
      light: `/img/logo/kicc_tuerkis_100px.png`,
      alt: "KI Competence Center Logo",
    },
  },
  markdown: {
    config: (md) => {
      // Use lightbox plugin
      md.use(lightbox, {});
    },
  },
  vite: {
    ssr: { noExternal: ["vuetify"] },
    resolve: { alias: { "vuetify/lib": "vuetify" } },
    plugins: [
      llmstxt({
        ignoreFiles: ["CODE_OF_CONDUCT.md", "README.md", "impressum.md"],
      }),
    ],
  },
});

export default withMermaid(vitepressConfig);
