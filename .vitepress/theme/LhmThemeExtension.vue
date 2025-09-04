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
/* Custom CSS variables for theme colors */
:root {
  --vp-icon-filter: brightness(0) invert(0.3); /* Dark gray in light mode */
  --vp-icon-hover-filter: brightness(0) invert(0); /* Black on hover in light mode */
}

.dark {
  --vp-icon-filter: brightness(0) invert(0.7); /* Light gray in dark mode */
  --vp-icon-hover-filter: brightness(0) invert(1); /* White on hover in dark mode */
}

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
    display: flex;
    gap: 18px;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex: 1 1 auto;
  }

.footer-right {
  display: flex;
  align-items: center;
  gap: 12px;
}

.follow-label {
  font-weight: 600;
  margin-right: 8px;
}

.social-links .social-icon svg,
.social-links .social-icon img {
  width: 20px;
  height: 20px;
  filter: var(--vp-icon-filter, brightness(0) invert(0.5)); /* Default grayscale filter */
  transition: filter 0.2s ease;
}

.social-links .social-icon {
  background: transparent; /* keep button background unchanged */
  border-radius: 6px;
  color: var(--vp-c-text-1);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
}

.social-links .social-icon:hover img,
.social-links .social-icon:hover svg {
  filter: var(--vp-icon-hover-filter, brightness(0) invert(0.8)); /* Lighter on hover */
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
