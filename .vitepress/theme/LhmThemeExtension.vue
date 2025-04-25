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
