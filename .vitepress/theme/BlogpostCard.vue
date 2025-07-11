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
      <div class="blogpost-card-img-gradient"></div>
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
  border-radius: 16px;
  box-shadow: 0 4px 24px 0 rgba(0, 0, 0, 0.07);
  text-decoration: none;
  overflow: hidden;
  transition:
    box-shadow 0.25s cubic-bezier(.4,2,.6,1),
    transform 0.18s cubic-bezier(.4,2,.6,1),
    border-color 0.2s;
  cursor: pointer;
  margin-bottom: 2rem;
}

.blogpost-card:hover {
  border-color: var(--vp-c-brand);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.13);
  transform: translateY(-4px) scale(1.02);
}

.blogpost-card-img {
  width: 100%;
  height: 200px;
  background: var(--vp-c-bg);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  overflow: hidden;
  position: relative;
}

.blogpost-card-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.35s cubic-bezier(.4,2,.6,1);
}

.blogpost-card:hover .blogpost-card-img img {
  transform: scale(1.06);
}

.blogpost-card-img-gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg,rgba(0,0,0,0.00) 60%,rgba(0,0,0,0.18) 100%);
  pointer-events: none;
  z-index: 1;
}

.blogpost-card-date {
  position: absolute;
  top: 0.8rem;
  right: 0.8rem;
  color: #fff;
  background: rgba(0,0,0,0.48);
  font-size: 0.92rem;
  font-weight: 600;
  padding: 0.22em 0.9em;
  border-radius: 8px;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.13);
  z-index: 2;
  letter-spacing: 0.01em;
}

.blogpost-card-content {
  padding: 1.5rem 1.7rem 1.4rem 1.7rem;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  position: relative;
}

.blogpost-card-title {
  font-size: 1.35rem;
  font-weight: 800;
  margin: 0 0 0.15rem 0;
  color: var(--vp-c-text-1);
  letter-spacing: -0.01em;
  line-height: 1.2;
}

.blogpost-card-teaser {
  font-size: 1.08rem;
  color: var(--vp-c-text-2);
  margin: 0;
  line-height: 1.6;
}

/* --- Mobile Optimization --- */
@media (max-width: 600px) {
  .blogpost-card {
    margin-bottom: 1.2rem;
    border-radius: 10px;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,0.06);
  }
  .blogpost-card-img {
    height: 130px;
    border-radius: 10px 10px 0 0;
  }
  .blogpost-card-content {
    padding: 1rem 1.1rem 1rem 1.1rem;
    gap: 0.5rem;
  }
  .blogpost-card-title {
    font-size: 1.08rem;
  }
  .blogpost-card-teaser {
    font-size: 0.98rem;
  }
  .blogpost-card-date {
    font-size: 0.82rem;
    padding: 0.18em 0.7em;
    top: 0.5rem;
    right: 0.5rem;
  }
}
</style>
