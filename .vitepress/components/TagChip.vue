<script setup>
defineProps({
  tag: {
    type: String,
    required: true,
  },
  count: {
    type: Number,
    required: false,
  },
});
</script>

<template>
  <v-chip
    :value="tag"
  >
    {{ tag }}
    <span
      style="padding-left: 4px"
      v-if="count"
    >
      ({{ count }})
    </span>
  </v-chip>
</template>
