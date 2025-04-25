import { defineConfig } from "vitepress";
import lightbox from "vitepress-plugin-lightbox";
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
        text: "KI-Systeme",
        items: [
          { text: "Überblick", link: "/ki-systeme" },
          { text: "MUCGPT", link: "/ki-systeme/mucgpt" },
          { text: "inspira_BIB", link: "/ki-systeme/inspira_bib" },
          {
            text: "KI-Suche im Dienstleistungsfinder",
            link: "/ki-systeme/dlf",
          },
        ],
      },
      {
        text: "Datensätze",
        items: [
          { text: "Überblick", link: "/datensaetze" },
          {
            text: "Münchner Verwaltungs-Dienstleistungen",
            link: "/datensaetze/munich-public-services",
          },
        ],
      },
      { text: "KI Competence Center", link: "/kicc" },
    ],
    outline: { level: "deep", label: "Seiteninhalt" },
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
    footer: {
      message: `<a href="https://ki.muenchen.de/impressum.html">Impressum & Datenschutz</a>`,
    },
    docFooter: { prev: "Vorherige Seite", next: "Nächste Seite" },
    darkModeSwitchLabel: "Darstellung",
    lightModeSwitchTitle: "Zum hellen Modus wechseln",
    darkModeSwitchTitle: "Zum dunklen Modus wechseln",
    sidebarMenuLabel: "Menü",
    returnToTopLabel: "Zurück nach oben",
    externalLinkIcon: true,
    logo: {
      dark: `/img/kicc_tuerkis_100px.png`,
      light: `/img/kicc_tuerkis_100px.png`,
      alt: "KI Competence Center Logo",
    },
  },
  markdown: {
    config: (md) => {
      // Use lightbox plugin
      md.use(lightbox, {});
    },
  },
});

export default withMermaid(vitepressConfig);
