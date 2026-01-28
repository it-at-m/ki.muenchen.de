<template lang="html">
  <v-avatar
    size="64"
    rounded="0"
    color="#e7e8ec"
    class="thumb mr-2 rounded"
  >
    <v-img
      :alt="(frontmatter.title || 'KI') + ' logo'"
      :src="withBase(frontmatter.logo || '/img/logo/kicc_mascot.png')"
      :cover="false"
    />
  </v-avatar>
</template>

<script setup>
import { withBase } from "vitepress";

defineProps({
  frontmatter: {
    type: Object,
    default: {},
  },
});
</script>

<style scoped>
.thumb {
  min-width: 64px;
  margin-right: 16px;
  height: 64px;
  width: 64px;
  padding: 8px;
}
</style>
