<template>
  <div class="banner">
    <div class="banner-content">
      <h1>🎉 Unser Blog ist live!</h1>
      <p>
        Entdecken Sie spannende Artikel, Neuigkeiten und Einblicke in unsere
        Projekte.<br />
        <a
          href="/blog"
          class="banner-link"
          >Jetzt entdecken &rarr;</a
        >
      </p>
    </div>
  </div>
</template>

<style scoped>
.banner {
  background-color: var(--vp-c-bg-soft);
  /* Use VitePress background color variable for theme consistency */
  padding: 1rem;
  /* Use rem for scalable padding */
  text-align: center;
  color: var(--vp-c-text-1);
  /* Use VitePress text color variable */
  border-bottom: 1px solid var(--vp-c-divider);
  /* Add a subtle bottom border */
  margin-bottom: 48px;
}

.banner p {
  margin: 0;
  /* Remove default paragraph margin */
  font-size: 0.9rem;
  /* Slightly smaller font size */
}

.banner a {
  color: var(--vp-c-brand);
  /* Use VitePress brand color for links */
  text-decoration: none;
  font-weight: 500;
}

.banner a:hover {
  text-decoration: underline;
}
</style>
