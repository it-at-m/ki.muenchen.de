<script setup>
import { computed, ref } from "vue";

import { data } from "../systems.data.js";
import TagChip from "./TagChip.vue";

const props = defineProps({
  modelValue: {
    type: Array,
    default: [],
  },
});

defineEmits(["update:modelValue"]);

const allTags = computed(() => {
  let tagCounts = {};

  for (let entry of data) {
    if (
      entry.frontmatter &&
      entry.frontmatter.tags &&
      entry.frontmatter.system_type
    ) {
      entry.frontmatter.tags.forEach((tag) => {
        tagCounts[tag] = (tagCounts[tag] || 0) + 1;
      });
    }
  }

  return Object.keys(tagCounts).sort((a, b) => {
    const countDiff = tagCounts[b] - tagCounts[a];
    if (countDiff !== 0) {
      return countDiff;
    }
    return a.localeCompare(b);
  });
});

function getCountOfTag(tag) {
  let counter = 0;
  for (let entry of data) {
    if (
      entry &&
      entry.frontmatter &&
      entry.frontmatter.system_type &&
      entry.frontmatter.tags &&
      entry.frontmatter.tags.includes(tag)
    ) {
      counter++;
    }
  }
  return counter;
}
</script>

<template>
  <v-chip-group
    :model-value="modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
    multiple
    filter
  >
    <tag-chip
      v-for="(tag, index) in allTags"
      :key="index"
      :tag="tag"
      :count="getCountOfTag(tag)"
    />
  </v-chip-group>
</template>
