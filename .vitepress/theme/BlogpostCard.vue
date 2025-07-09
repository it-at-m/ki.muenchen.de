<template>
  <a
    class="blogpost-card"
    :href="link"
    rel="noopener noreferrer"
    v-bind="$attrs"
  >
    <div
      class="blogpost-card-img"
      v-if="img"
    >
      <img
        :src="img"
        :alt="title"
      />
      <span
        v-if="date"
        class="blogpost-card-date"
        >{{ date }}</span
      >
    </div>
    <div class="blogpost-card-content">
      <h3 class="blogpost-card-title">{{ title }}</h3>
      <p
        class="blogpost-card-teaser"
        v-if="teaser"
      >
        {{ teaser }}
      </p>
    </div>
  </a>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  link: { type: String, required: true },
  img: { type: String, required: false },
  teaser: { type: String, required: false },
  date: { type: String, required: false },
});
</script>

<style scoped>
.blogpost-card {
  display: flex;
  flex-direction: column;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.04);
  text-decoration: none;
  overflow: hidden;
  transition:
    box-shadow 0.2s,
    border-color 0.2s;
  cursor: pointer;
  margin-bottom: 1.5rem;
}

.blogpost-card:hover {
  border-color: var(--vp-c-brand);
}

.blogpost-card-img {
  width: 100%;
  height: 180px;
  background: var(--vp-c-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative; /* Enable positioning for date */
}

.blogpost-card-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.blogpost-card-content {
  padding: 1.2rem 1.5rem 1.2rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: relative;
}

.blogpost-card-date {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  color: var(--vp-c-text-1); /* Use normal text color */
  background: var(--vp-c-bg-soft);
  font-size: 0.85rem;
  font-weight: 600;
  padding: 0.2em 0.7em;
  border-radius: 8px;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.07);
  z-index: 2;
}

.blogpost-card-title {
  font-size: 1.3rem;
  font-weight: 700;
  margin: 0 0 0.2rem 0;
  color: var(--vp-c-text-1); /* Use normal text color for title */
}

.blogpost-card-teaser {
  font-size: 1rem;
  color: var(--vp-c-text-2);
  margin: 0;
}
</style>
