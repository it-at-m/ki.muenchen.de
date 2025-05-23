<script setup>
import mediumZoom from "medium-zoom";
import { useData, useRouter } from "vitepress";
import DefaultTheme from "vitepress/theme";
import { onMounted } from "vue";

const { isDark } = useData();
const { Layout } = DefaultTheme;
const router = useRouter();

// Setup medium zoom with the desired options
const setupMediumZoom = () => {
  mediumZoom("[data-zoomable]", {
    background: "transparent",
  });
};

// Apply medium zoom on load
onMounted(setupMediumZoom);

// Subscribe to route changes to re-apply medium zoom effect
router.onAfterRouteChanged = setupMediumZoom;
</script>

<template>
  <Layout>
    <template #nav-bar-content-after>
      <div class="logo">
        <a
          href="https://muenchen.digital/"
          target="_blank"
        >
          <img
            v-if="isDark"
            src="https://assets.muenchen.de/logos/rit/RIT_Basislogo_blau_weiss-64.png"
            alt="Logo München. Digital."
          />
          <img
            v-else
            src="https://assets.muenchen.de/logos/rit/RIT_Basislogo_blau_schwarz-64.png"
            alt="Logo München. Digital."
          />
        </a>
      </div>
    </template>
    <template #layout-top>
      <div class="banner">
        <h1>
          Trefft uns auf dem
          <a
            href="https://m-digital.lineupr.com/digitaltag-2025/schedule"
            target="_blank"
            rel="noopener noreferrer"
            >Digitaltag 2025</a
          >
        </h1>
        <p>
          <a
            href="https://veranstaltungen.muenchen.de/rit/veranstaltungen/digitaltag_2025/"
            target="_blank"
            rel="noopener noreferrer"
            >Anmeldung</a
          >
          |
          <a
            href="https://m-digital.lineupr.com/digitaltag-2025/item/workshop-open-source-ai-and-so"
            target="_blank"
            rel="noopener noreferrer"
            >Enterprise grade GenAI-Architektur - geht das auch OpenSource?</a
          >
        </p>
      </div>
    </template>
  </Layout>
</template>

<style scoped>
.banner {
  background-color: var(--vp-c-bg-soft);
  /* Use VitePress background color variable for theme consistency */
  padding: 1rem;
  /* Use rem for scalable padding */
  padding-top: calc(var(--vp-nav-height) + 1rem);
  /* Adjust top padding to account for nav bar height */
  text-align: center;
  color: var(--vp-c-text-1);
  /* Use VitePress text color variable */
  border-bottom: 1px solid var(--vp-c-divider);
  /* Add a subtle bottom border */
}

.banner p {
  margin: 0;
  /* Remove default paragraph margin */
  font-size: 0.9rem;
  /* Slightly smaller font size */
}

.banner a {
  color: var(--vp-c-brand);
  /* Use VitePress brand color for links */
  text-decoration: none;
  font-weight: 500;
}

.banner a:hover {
  text-decoration: underline;
}

.logo {
  display: flex;
  align-items: center;
}

@media (min-width: 768px) {
  .extra + .logo:before {
    margin-right: 16px;
    margin-left: 16px;
    width: 1px;
    height: 24px;
    background-color: var(--vp-c-divider);
    content: "";
  }
}

.logo img {
  /* filter: var(--muc-logo-filter); */
  height: 28px;
}
</style>

<style>
.medium-zoom-overlay {
  backdrop-filter: blur(5rem);
}

.medium-zoom-overlay,
.medium-zoom-image--opened {
  z-index: 999;
}
</style>
