<script setup>
import mediumZoom from "medium-zoom";
import { useRouter } from "vitepress";
import DefaultTheme from "vitepress/theme";
import { onMounted } from "vue";

import Banner from "./Banner.vue";
import EscapeGame from "./EscapeGame.vue";

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
router.onAfterRouteChange = setupMediumZoom;

// Define links for logo images
const ritLogo =
  "https://assets.muenchen.de/logos/rit/RIT_Basislogo_umbragrau-64.png";
const lhmLogo = "https://assets.muenchen.de/logos/lhm/logo-lhm-muenchen.svg";
</script>

<template>
  <Layout>
    <template #not-found>
      <EscapeGame />
    </template>
    <template #nav-bar-content-after>
      <div class="logo">
        <a
          href="https://muenchen.digital/"
          target="_blank"
        >
          <img
            :src="ritLogo"
            alt="Logo München. Digital."
          />
        </a>
      </div>
    </template>

    <template #layout-bottom>
      <div class="bottom-logo">
        <a
          href="https://stadt.muenchen.de/"
          target="_blank"
        >
          <img
            :src="lhmLogo"
            alt="Logo Landeshauptstadt München"
          />
        </a>
      </div>
    </template>
    <!--
    <template #doc-before>
      <Banner v-if="!router.route.path.includes('/blog')" />
    </template>
    <template #home-hero-before>
      <Banner v-if="!router.route.path.includes('/blog')" />
    </template>
    -->
  </Layout>
</template>

<style scoped>
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
  filter: var(--muc-logo-filter);
  height: 28px;
}

.bottom-logo {
  display: flex;
  justify-content: center;
  padding-bottom: 30px;
}

.bottom-logo a img {
  width: 200px;
}

.bottom-logo img {
  filter: var(--muc-logo-filter);
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
