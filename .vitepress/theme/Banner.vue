<template>
  <div class="banner">
    <h1>
      Trefft uns auf dem
      <a
        href="https://m-digital.lineupr.com/digitaltag-2025/schedule"
        target="_blank"
        rel="noopener noreferrer"
        >Digitaltag 2025</a
      >
    </h1>
    <p>
      <a
        href="https://veranstaltungen.muenchen.de/rit/veranstaltungen/digitaltag_2025/"
        target="_blank"
        rel="noopener noreferrer"
        >Anmeldung</a
      >
      |
      <a
        href="https://m-digital.lineupr.com/digitaltag-2025/item/workshop-open-source-ai-and-so"
        target="_blank"
        rel="noopener noreferrer"
        >Enterprise grade GenAI-Architektur - geht das auch OpenSource?</a
      >
    </p>
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