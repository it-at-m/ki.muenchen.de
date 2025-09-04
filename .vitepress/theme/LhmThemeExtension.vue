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
const lhmLogo = "https://assets.muenchen.de/logos/lhm/logo-lhm-muenchen.svg";
</script>

<template>
  <Layout>
    <template #not-found>
      <EscapeGame />
    </template>
    <template #nav-bar-content-after>
      <div class="logo">
        <a href="https://muenchen.digital/" target="_blank">
          <img :src="lhmLogo" alt="Logo Landeshauptstadt München" />
        </a>
      </div>
    </template>
    <template #doc-before>
      <Banner v-if="!router.route.path.includes('/blog')" />
    </template>
    <template #home-hero-before>
      <Banner v-if="!router.route.path.includes('/blog')" />
    </template>
  </Layout>
</template>

<style scoped>
.logo {
  display: flex;
  align-items: center;
}

@media (min-width: 768px) {
  .extra+.logo:before {
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
</style>

<style>
.medium-zoom-overlay {
  backdrop-filter: blur(5rem);
}

.medium-zoom-overlay,
.medium-zoom-image--opened {
  z-index: 999;
}

/* Global footer styles for config-provided footer HTML */
.site-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.footer-left img {
  height: 32px;
  width: auto;
  max-width: 100%;
  filter: var(--muc-logo-filter);
}

.footer-center {
  text-align: center;
  flex: 1 1 auto;
}

.footer-right {
  display: flex;
  align-items: center;
  gap: 12px;
}



@media (max-width: 768px) {
  .site-footer {
    flex-direction: column;
    gap: 12px;
    text-align: center;
  }

  .footer-left img {
    height: 32px;
    width: auto;
    max-width: 100%;
  }

  .footer-right {
    justify-content: center;
  }

  .footer-center {
    order: 2;
  }
}
</style>
