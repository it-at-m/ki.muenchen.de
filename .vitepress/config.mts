import { defineConfig } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid"; // https://vitepress.dev/reference/site-config

// https://vitepress.dev/reference/site-config
const vitepressConfig = defineConfig({
  title: "KI @ LHM",
  description: "Dokumentation zu KI-Systemen der Landeshauptstadt München",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: `https://assets.muenchen.de/logos/lhm/icon-lhm-muenchen-32.png`,
      },
    ],
  ],
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      {
        text: "Dokumentation",
        items: [
          // { text: "Überblick", link: "/ueberblick" },
          { text: "Systeme", link: "/systeme" },
          { text: "Datensätze", link: "/datensaetze" },
          { text: "KI Competence Center", link: "/kicc" },
        ],
      },
    ],
    sidebar: [
      // { text: "Überblick", link: "/ueberblick" },
      {
        text: "Systeme",
        link: "/systeme",
        items: [
          { text: "KI-Suche im Dienstleistungsfinder ", link: "/systems/dlf" },
        ],
      },
      {
        text: "Datensätze",
        link: "/datensaetze",
        items: [
          {
            text: "Verwaltungs-Dienstleistungen",
            link: "/datensaetze/munich-public-services",
          },
        ],
      },
      { text: "KI Competence Center", link: "/kicc" },
    ],
    outline: {
      level: "deep",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/it-at-m/ki.muenchen.de" },
    ],
    editLink: {
      pattern: "https://github.com/it-at-m/ki.muenchen.de/blob/main/:path",
      text: "View this page on GitHub",
    },
    search: {
      provider: "local",
    },
    footer: {
      message: `<a href="https://opensource.muenchen.de/de/impress.html">Impressum</a>`,
    },
  },
});

export default withMermaid(vitepressConfig);
