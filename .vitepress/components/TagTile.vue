<template lang="html">
  <div class="tagtile">
    <div class="grid">
      <v-card
        v-for="page in pagesWithTags"
        :key="page.url"
        variant="flat"
        :href="page.frontmatter.external_link || withBase(page.url)"
        :target="page.frontmatter.external_link ? '_blank' : undefined"
        :rel="
          page.frontmatter.external_link ? 'noopener noreferrer' : undefined
        "
        class="card"
      >
        <v-card-title class="pt-5">
          <div class="card-title">
            <system-image-avatar :frontmatter="page.frontmatter" />

            <span style="overflow: hidden; text-overflow: ellipsis">
              {{ page.frontmatter.title }}
            </span>
            <v-chip
              v-if="
                page.frontmatter.tags &&
                page.frontmatter.tags.includes('in Arbeit')
              "
              style="
                background-color: var(--vp-c-warning-soft);
                color: var(--vp-c-warning-1);
              "
              size="x-small"
              class="ml-2"
              variant="flat"
            >
              in Arbeit
            </v-chip>
          </div>
        </v-card-title>
        <v-card-text>
          <p
            class="excerpt"
            v-if="showExcerpt && (page.frontmatter.description || page.excerpt)"
          >
            {{ page.frontmatter.description || cleanExcerpt(page.excerpt) }}
          </p>
          <div
            v-if="showTags"
            style="border-bottom: 1px solid lightgray; width: 100%"
          ></div>
          <div
            v-if="showTags"
            style="padding-top: 12px; padding-bottom: 8px"
          >
            <tag-chip-group :tags="page.frontmatter.tags" />
          </div>
        </v-card-text>
      </v-card>
    </div>
    <br />
  </div>
</template>

<script setup>
import { withBase } from "vitepress";
import { computed } from "vue";

import { data as systemsData } from "../systems.data.js";
import SystemImageAvatar from "./SystemImageAvatar.vue";
import TagChipGroup from "./TagChipGroup.vue";

const props = defineProps({
  filter: {
    type: Array,
    default: () => [],
  },
  exclude: {
    type: Array,
    default: () => [],
  },
  showTags: {
    type: Boolean,
    default: false,
  },
  showExcerpt: {
    type: Boolean,
    default: false,
  },
});

const pagesWithTags = computed(() => {
  let filteredSoftware = [];

  for (let systemEntry of systemsData) {
    if (!systemEntry.frontmatter) {
      continue;
    }
    // Only show pages that have system_type defined
    if (!systemEntry.frontmatter.system_type) {
      continue;
    }

    let systemTags = systemEntry.frontmatter.tags;

    // Filter by excluded tags/pages if needed (e.g. by tag or path)
    if (props.exclude && props.exclude.length > 0) {
      // Simple exclusion logic based on tags for now, similar to opensource.muenchen.de
      if (systemTags && systemTags.some((tag) => props.exclude.includes(tag))) {
        continue;
      }
    }

    if (systemTags) {
      // Filter logic
      if (props.filter && props.filter.length > 0) {
        const hasRequiredTag = systemTags.some((tag) =>
          props.filter.includes(tag)
        );
        if (!hasRequiredTag) continue;
      }
      filteredSoftware.push(systemEntry);
    } else if (!props.filter || props.filter.length === 0) {
      // If no filter and no tags on system, we might still want to show it?
      // opensource logic seems to rely on tags being present.
      // If we want to show all systems, we should include them even without tags if no filter set.
      filteredSoftware.push(systemEntry);
    }
  }

  // Sort alphabetically by title, but put "in Arbeit" at the bottom
  filteredSoftware.sort((a, b) => {
    const tagsA = a.frontmatter.tags || [];
    const tagsB = b.frontmatter.tags || [];
    const isWipA = tagsA.includes("in Arbeit");
    const isWipB = tagsB.includes("in Arbeit");

    if (isWipA && !isWipB) return 1;
    if (!isWipA && isWipB) return -1;

    const titleA = a.frontmatter.title || "";
    const titleB = b.frontmatter.title || "";
    return titleA.localeCompare(titleB);
  });

  return filteredSoftware;
});

function cleanExcerpt(excerpt) {
  if (!excerpt) return "";

  // Remove "Zurück zur Übersicht" link and its potential paragraph wrapper
  let cleaned = excerpt.replace(
    /<p.*?>\s*<a.*?>.*?Zurück zur Übersicht.*?<\/a>\s*<\/p>/gi,
    ""
  );
  cleaned = cleaned.replace(/<a.*?>.*?Zurück zur Übersicht.*?<\/a>/gi, "");

  // Remove <br> tags
  cleaned = cleaned.replace(/<br\s*\/?>/gi, "");

  // Remove empty paragraphs
  cleaned = cleaned.replace(/<p.*?>\s*<\/p>/gi, "");

  return cleaned.trim();
}
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
}

@media (max-width: 639px) {
  .grid {
    grid-template-columns: 1fr;
  }
}

.card {
  border: 1px solid var(--vp-c-bg-soft);
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  --v-hover-opacity: 0;
  transition:
    border-color 0.25s,
    background-color 0.25s;
}

.card:hover {
  border-color: var(--vp-c-brand-1);
}

:deep(.excerpt > p) {
  line-height: 24px !important;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-2);
}

.vp-doc a.v-card {
  font-weight: inherit;
  color: inherit;
  text-decoration: none;
}

.card-title {
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>
