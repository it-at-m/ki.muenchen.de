<template>
  <div class="banner">
    <div class="banner-content">
      <h1>🗳️ Wir brauchen Ihre Stimme!</h1>
      <p>
        Unser
        <a
          href="/blog/2025-07-23-oss-genai-stack"
          class="banner-link"
          >KI-Stack</a
        >
        wurde als Einreichung beim Open Source Wettbewerb akzeptiert und
        benötigt Ihre Unterstützung!<br />
        <a
          href="https://open-source-wettbewerb.de/voting/ki-service-layer/"
          class="banner-link"
          >Jetzt abstimmen &rarr;</a
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
