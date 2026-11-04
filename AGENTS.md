# AGENTS.md

> **English (short):** VitePress _content_ site for ki.muenchen.de (City of Munich AI documentation). No application code, no tests — Prettier is the only CI gate, so run `npm run fix` before committing. All content is German. The `ki-systeme/` overview is auto-generated from frontmatter; the blog index in `blog/index.md` is maintained manually. Wrap Vuetify-using components in `<ClientOnly>` or the production build fails. Everything below is in German.

## Befehle

```shell
npm ci          # Installation; .npmrc lässt resolved-URLs im Lockfile bewusst weg — nicht „reparieren"
npm run dev     # Entwicklungsserver
npm run lint    # prettier . --check (läuft in CI bei jedem Push und PR)
npm run fix     # prettier . --write — vor jedem Commit ausführen
npm run build   # Produktionsbuild
```

- Node >= 20 erforderlich (`engines` erlaubt `<= 24`, aber die Lint-CI läuft mit Node 26 — die Angabe ist nicht strikt).
- Die Formatierung kommt aus der geteilten it@M-Konfiguration `@muenchen/prettier-codeformat` (inkl. Import-Sorting). Keine lokalen Prettier-Optionen setzen; stattdessen `npm run fix` ausführen.
- Es gibt keine Tests. Inhaltliche Änderungen mit `npm run dev` prüfen; strukturelle Änderungen (Vue-Komponenten, Konfiguration) zusätzlich lokal mit `npm run build` bauen (siehe CI-Abschnitt).

## CI / Deploy

- Lint (Prettier-Check) läuft bei jedem Push und PR (`.github/workflows/lint.yaml`).
- Pushes auf `main` bauen und deployen automatisch auf GitHub Pages via `it-at-m/lhm_actions` Composite Actions. Kein manueller Deploy-Schritt.
- `deploy-docs.yaml` triggert PR-Builds nur für `docs/**` (ein Pfad, der nicht existiert) oder Workflow-Änderungen — Content-PRs bekommen keinen Build-Check; daher bei Änderungen an Vue-Komponenten oder Konfiguration lokal `npm run build` ausführen.
- Dependency-Updates übernimmt Renovate — Versionen nicht manuell anheben.

## Inhaltskonventionen

- Alle Inhalte sind deutsch (Site `lang: de-DE`, formelles „Sie"); auch UI-Strings in Theme-Komponenten sind deutsch.
- Bilder liegen in `public/img/<system>/` und werden mit absoluten Pfaden referenziert (`/img/mucgpt/startpage.png` → `public/img/mucgpt/startpage.png`). Logos: `public/img/logo/`, Blog-Bilder: `public/img/blog/`. Lightbox-Zoom ist automatisch; beschreibende deutsche Alt-Texte verfassen.
- Die Top-Navigation wird manuell in `.vitepress/config.mts` gepflegt (`themeConfig.nav`); es gibt keine Sidebar-Konfiguration — Seiten verlassen sich auf die Heading-Outline.

### KI-Systeme (System Cards)

`ki-systeme/*.md`. Die Übersicht auf `/ki-systeme/` wird automatisch generiert (`.vitepress/systems.data.js` + `TagTile.vue`/`TagFilter.vue`) — keine manuelle Liste zu pflegen. Das Frontmatter ist das Schema:

- `system_type` — erforderlich; Seiten ohne dieses Feld werden in Übersicht und Infobox stillschweigend übersprungen (die `index.md`-Dateien nutzen das aus).
- `title`, `logo`, `sidebar_logo` (fällt auf `logo` zurück), `description` (Card-Exzerpt).
- `code`, `docs`, `developerlink`, `linkapplication`, `license`, `tags` — werden als Buttons/Chips in `SystemInfoBox` gerendert.
- `display_rank` — Zahl steuert die Sortierung; fehlende/ungültige Werte sortieren ans Ende, bei Gleichstand entscheidet der Titel.
- Tag `in Arbeit` — WIP-Badge und sortiert unter den nicht Rangierten ans Ende.
- `external_link` — Card verlinkt extern statt auf die Seite.
- Das Card-Exzerpt fällt auf den ersten gerenderten Absatz zurück, wenn `description` fehlt (führende Back-Links werden entfernt). Jede Card beginnt mit: `[<v-icon>mdi-arrow-left</v-icon> Zurück zur Übersicht](/ki-systeme/index.md)`.

### Blog

- Posts: `blog/YYYY-MM-DD-slug.md` mit `aside: false`, „Zurück zum Blog"-Back-Link und rechtsbündigem Datumsabsatz am Anfang.
- Die Übersicht auf `/blog/` wird **manuell gepflegt** — pro neuem Post ein `<BlogpostCard>`-Eintrag in `blog/index.md` (anders als bei `ki-systeme/` nicht automatisch).

### Vue in Markdown

- Vuetify wird global vom Theme registriert (mit SSR-Workarounds `ssr.noExternal`, Alias). Komponenten mit Vuetify oder Browser-APIs in `.md`-Seiten müssen in `<ClientOnly>` eingeschlossen werden (siehe `ki-systeme/index.md`), sonst scheitert der SSR-Build.
- Mermaid-Codeblöcke sind aktiviert (`vitepress-plugin-mermaid`).
- `sketch/` enthält nur Diagrammquellen (`.excalidraw`, `.drawio`) — nicht Teil der Website.

## Commits

Die Commit-Historie folgt Conventional Commits mit Scope, z. B. `feat(zammad-ai): add graphics`. Gearbeitet wird auf Feature-Branches (oft nach Issue-Nummer benannt), gemergt wird per PR auf `main`.
