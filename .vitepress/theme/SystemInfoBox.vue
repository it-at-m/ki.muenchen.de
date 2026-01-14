<script setup>
import { useData, withBase } from "vitepress";

import TagChipGroup from "../components/TagChipGroup.vue";

const siteInfo = useData();

const lang = siteInfo.lang.value;

defineProps({
  frontmatter: Object,
  horizontal: Boolean,
});
</script>

<template>
  <div
    v-if="frontmatter.system_type"
    :class="'infobox ' + (horizontal ? 'horizontal' : '')"
  >
    <img
      v-if="frontmatter.logo"
      :alt="'Logo ' + frontmatter.title"
      :src="withBase(frontmatter.logo)"
    />
    <div class="infos">
      <v-btn
        v-if="frontmatter.code"
        :href="frontmatter.code"
        rel="noreferrer noopener"
        target="_blank"
        variant="outlined"
      >
        <v-icon
          start
          icon="mdi-github"
        />
        Code
      </v-btn>

      <v-btn
        v-if="frontmatter.developerlink"
        :href="frontmatter.developerlink"
        rel="noreferrer noopener"
        target="_blank"
        variant="outlined"
      >
        <v-icon
          start
          icon="mdi-web"
        />
        Website
      </v-btn>

      <v-btn
        v-if="frontmatter.linkapplication"
        :href="frontmatter.linkapplication"
        rel="noreferrer noopener"
        target="_blank"
        variant="outlined"
      >
        <v-icon
          start
          icon="mdi-open-in-app"
        />

        <span v-if="lang === 'en'">Open App</span>
        <span v-else>App anzeigen</span>
      </v-btn>

      <tag-chip-group
        v-if="frontmatter.tags"
        :tags="frontmatter.tags"
      />

      <div v-if="frontmatter.license">
        <v-tooltip
          text="Licence"
          location="start"
        >
          <template v-slot:activator="{ props }">
            <div v-bind="props">
              <v-icon icon="mdi-license" />
              <span>{{ frontmatter.license }}</span>
            </div>
          </template>
        </v-tooltip>
      </div>
    </div>
  </div>
</template>

<style scoped>
img {
  width: 100%;
}

.infobox {
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding-bottom: 32px;
}

.infos {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.horizontal {
  flex-direction: row;
}

.horizontal > img {
  max-height: 156px;
  width: unset;
}
</style>
