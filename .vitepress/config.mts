import { defineConfig } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid"; // https://vitepress.dev/reference/site-config

// https://vitepress.dev/reference/site-config
const vitepressConfig = defineConfig({
  title: "KI @ LHM",
  description: "Dokumentation zu KI-Systemen der Landeshauptstadt München",
  cleanUrls: true,
  head: [
    [
      "link",
      {
        rel: "icon",
        href: `https://assets.muenchen.de/logos/lhm/icon-lhm-muenchen-32.png`,
      },
    ],
  ],
  lang: "de-DE",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      // { text: "Überblick", link: "/ueberblick" },
      { text: "KI-Systeme", link: "/ki-systeme/" },
      { text: "Datensätze", link: "/datensaetze/" },
      { text: "KI Competence Center", link: "/kicc" },
    ],
    outline: {
      level: "deep",
      label: "Seiteninhalt",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/it-at-m/ki.muenchen.de" },
    ],
    editLink: {
      pattern: "https://github.com/it-at-m/ki.muenchen.de/blob/main/:path",
      text: "Diese Seite auf GitHub anzeigen",
    },
    search: {
      provider: "local",
    },
    footer: {
      message: `<a href="https://ki.muenchen.de/impressum.html">Impressum & Datenschutz</a>`,
    },
    docFooter: {
      prev: "Vorherige Seite",
      next: "Nächste Seite",
    },
    darkModeSwitchLabel: "Darstellung",
    lightModeSwitchTitle: "Zum hellem Modus wechseln",
    darkModeSwitchTitle: "Zum dunklen Modus wechseln",
    sidebarMenuLabel: "Menü",
    returnToTopLabel: "Zurück nach oben",
    externalLinkIcon: true,
  },
});

export default withMermaid(vitepressConfig);
