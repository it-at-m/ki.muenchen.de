<script setup lang="ts">
import { withBase } from "vitepress";
</script>

<template>
  <footer
    class="site-footer"
    role="contentinfo"
  >
    <div class="footer-left">
      <a
        href="https://muenchen.digital/"
        target="_blank"
        rel="noopener"
      >
        <img
          src="https://assets.muenchen.de/logos/rit/RIT_Basislogo_umbragrau-64.png"
          alt="Logo München Digital"
        />
      </a>
    </div>
    <div class="footer-center">
      <a
        href="https://muenchen.digital/kontakt.html"
        target="_blank"
        rel="noopener"
        >Kontakt IT-Referat</a
      >
      <a :href="withBase('/impressum.html')">Impressum &amp; Datenschutz</a>
    </div>
    <div class="footer-right">
      <div class="follow-label">Folgen Sie uns auf:</div>
      <nav
        class="social-links"
        aria-label="Soziale Medien"
      >
        <a
          class="social-icon"
          href="https://www.instagram.com/muenchen.digital/"
          target="_blank"
          rel="noopener"
          aria-label="Instagram"
        >
          <img
            :src="withBase('/img/social/instagram.svg')"
            alt="Instagram"
          />
        </a>
        <a
          class="social-icon"
          href="https://www.youtube.com/channel/UCkZIh0tBls7FIGTvYPF-H-w"
          target="_blank"
          rel="noopener"
          aria-label="YouTube"
        >
          <img
            :src="withBase('/img/social/youtube.svg')"
            alt="YouTube"
          />
        </a>
        <a
          class="social-icon"
          href="https://www.linkedin.com/company/it-referat-muenchen"
          target="_blank"
          rel="noopener"
          aria-label="LinkedIn"
        >
          <img
            :src="withBase('/img/social/linkedin.svg')"
            alt="LinkedIn"
          />
        </a>
        <a
          class="social-icon"
          href="https://service.muenchen.de/intelliform/forms/01/01/01/newsletter/index?newsletter.rit_6=1"
          target="_blank"
          rel="noopener"
          aria-label="Newsletter"
        >
          <img
            :src="withBase('/img/social/newsletter.svg')"
            alt="Newsletter"
          />
        </a>
      </nav>
    </div>
  </footer>
</template>
