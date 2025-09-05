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
    footer: {
      message: `
        <div class="site-footer" role="contentinfo">
          <div class="footer-left">
            <a href="https://muenchen.digital/" target="_blank" rel="noopener">
              <img src="https://assets.muenchen.de/logos/rit/RIT_Basislogo_umbragrau-64.png" alt="Logo München Digital" />
            </a>
          </div>
          <div class="footer-center">
            <a href="https://muenchen.digital/kontakt.html" target="_blank" rel="noopener" > Kontakt IT-Referat</a>
            <a href="/impressum.html">Impressum & Datenschutz</a>
          </div>
          <div class="footer-right">
            <div class="follow-label">Folgen Sie uns auf:</div>
            <nav class="social-links" aria-label="Soziale Medien">
              <a class="social-icon" href="https://www.instagram.com/muenchen.digital/" target="_blank" rel="noopener" aria-label="Instagram">
                <img src="/img/social/instagram.svg" alt="Instagram" />
              </a>
              <a class="social-icon" href="https://www.youtube.com/channel/UCkZIh0tBls7FIGTvYPF-H-w" target="_blank" rel="noopener" aria-label="YouTube">
                <img src="/img/social/youtube.svg" alt="YouTube" />
              </a>
              <a class="social-icon" href="https://www.linkedin.com/company/it-referat-muenchen" target="_blank" rel="noopener" aria-label="LinkedIn">
                <img src="/img/social/linkedin.svg" alt="LinkedIn" />
              </a>
              <a class="social-icon" href="https://service.muenchen.de/intelliform/forms/01/01/01/newsletter/index?newsletter.rit_6=1" target="_blank" rel="noopener" aria-label="Newsletter">
                <img src="/img/social/newsletter.svg" alt="Newsletter" />
              </a>
            </nav>
          </div>
        </div>
      `,
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
