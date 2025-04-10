<script setup>
import { useData } from "vitepress";
import DefaultTheme from "vitepress/theme";

const { isDark } = useData();

const { Layout } = DefaultTheme;
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
