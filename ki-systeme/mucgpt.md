---
system_type: KI-System
title: MUCGPT
logo: /img/logo/mucgpt.png
code: https://github.com/it-at-m/mucgpt
linkapplication: https://it-at-m.github.io/mucgpt/
license: MIT
tags:
  - LLM
  - Open Source
  - intern
description: MUCGPT ist ein interner KI-Assistent für die Stadtverwaltung München, der Mitarbeiter*innen sicher und datenschutzkonform den Zugang zu großen Sprachmodellen ermöglicht.
---

[<v-icon>mdi-arrow-left</v-icon> Zurück zur Übersicht](/ki-systeme/index.md)

# MUCGPT

MUCGPT ist ein interner KI-Assistent für die Stadtverwaltung München, der Mitarbeiter\*innen sicher und datenschutzkonform den Zugang zu großen Sprachmodellen ermöglicht.

---

Diese Dokumentation fasst die wichtigsten Funktionen und Limitierungen von MUCGPT zusammen. MUCGPT ist Open Source, kann als Container betrieben werden und lässt sich an beliebige OpenAI‑kompatible Sprachmodelle anbinden.

![Startseite von MUCGPT mit Schnellzugriff auf Assistenten, zuletzt genutzte Chats und Tutorials](/img/mucgpt/startpage.png)

## Einführung und Kontext

MUCGPT ist eine Assistenz‑zuerst‑Plattform für die Arbeit mit großen Sprachmodellen. Chats sind der Ort, an dem gearbeitet wird; Assistenten bringen Struktur, damit wiederkehrende Aufgaben schneller und zuverlässiger erledigt werden können. Die Historie bleibt lokal im Browser (IndexedDB), vergangene Gespräche können fortgesetzt und favorisiert werden.

## Funktionen

MUCGPT unterstützt eine Vielzahl von Anwendungsfällen rund um Textbearbeitung, Ideation und Zusammenarbeit. Die wichtigsten Bereiche im Überblick:

### Chat

![Chatansicht mit Unterhaltung und Einstellmöglichkeiten](/img/mucgpt/chatscreen.png)
Der Chat bietet einen klaren Arbeitsbereich zur Interaktion mit dem Sprachmodell.
- System‑Anweisung und Temperatur lassen sich konfigurieren, um Tonalität und Kreativität zu steuern.
- Mehrstufige Konversationen werden unterstützt; der Verlauf bleibt lokal im Browser.

### Assistenten erstellen

![Assistenten‑Erstellung mit Konfiguration von Verhalten, Vorgaben und Startprompts](/img/mucgpt/assistant_creator.png)
Assistenten kodifizieren wiederkehrende Arbeitsweisen: Instruktionen, Ton, Randbedingungen und Modelleinstellungen. Optional können Startprompts, Folgeaktionen und Tools hinterlegt werden. Private Assistenten bleiben privat; Sie entscheiden, wann Sie teilen.

### Assistenten teilen

![Dialog zum Teilen von Assistenten mit Teams oder Bereichen](/img/mucgpt/share_assistants.png)
Assistenten können mit ausgewählten Teams oder breiter veröffentlicht werden. Eigentümerschaft, Gültigkeitsbereich und Konfiguration sind transparent, damit Kolleg\*innen verstehen, was ein Assistent leistet.

### Erweiterbare Tools

![Übersicht verfügbarer Tools](/img/mucgpt/tools.png)
Assistenten können eingebaute und erweiterbare Tools nutzen, zum Beispiel:
- Zusammenfassen: Lange Texte kondensieren.
- Brainstorming: Mindmaps generieren und exportieren.
- Leichte Sprache: Komplexe Texte vereinfachen.

Die Plattform ist so ausgelegt, dass weitere Tools je nach Bedarf ergänzt werden können.

### Startseite

![Startseite mit Assistenten, zuletzt genutzten Chats und Tutorials](/img/mucgpt/startpage.png)
Der Einstieg bündelt Assistenten, letzte Arbeiten und Hilfen an einem Ort.

### Modellauswahl

![Auswahl verfügbarer Modelle und Kreativitätsstufen](/img/mucgpt/models.png)
Verfügbare Modelle können ausgewählt und die Kreativität passend zur Aufgabe eingestellt werden. Die Auswahl ist für Nutzer\*innen transparent.

### Tutorials

![Angeleitete Beispiele und Tipps](/img/mucgpt/tutorials.png)
Geführte Beispiele und Tipps helfen beim schnellen Einstieg und fördern gute Nutzungsmuster.

### Dark Mode und Internationalisierung

![Dark Mode und i18n in der Oberfläche](/img/mucgpt/darkmode_i18n.png)
Barrierearme Oberfläche mit Dark Mode und Unterstützung für mehrere Sprachen.

### Allgemeine Ausgabeformate

Generierte Inhalte werden korrekt dargestellt, unter anderem:
- Markdown
- PLAIN HTML
- Mermaid‑Diagramme in Markdown‑Codeblöcken
- Mathematische Formeln (LaTeX, `$$ ... $$`)

## KI-Modelle

MUCGPT greift auf große Sprachmodelle zu. Diese wurden nicht mit städtischen Daten trainiert und besitzen daher nur öffentliches/allgemeines Wissen. Welche Modelle zur Auswahl stehen, wird zentral konfiguriert; grundsätzlich können beliebige OpenAI‑kompatible Modelle angebunden werden.

Aktuelle Modelle umfassen u.a.:

- die GPT-4.1 Modellfamilie von OpenAI
- Mistral-Large-3 von Mistral AI



## Risiken und Limitierungen

Obwohl die MUCGPT viele Vorteile bietet, gibt es auch einige Risiken und Limitierungen:

- **Bias in den Daten**: Die KI-Modelle können Vorurteile aus den Trainingsdaten übernehmen.
- **Sprachliche Beschränkungen**: Die Qualität der Antworten kann je nach Sprache, ausgewähltem Sprachmodell und Formulierung der Anfrage variieren.
- **Datenschutz**: Es dürfen keine personenbezogenen Daten eingegeben werden, solange Cloud‑Modelle eingesetzt werden. Interne Daten sind erlaubt.
- **Entscheidungsfindung**: MUCGPT darf nicht für abschließende Entscheidungen verwendet werden, die gegenüber Personen rechtliche Wirkung entfalten oder sie in ähnlicher Weise erheblich beeinträchtigen (Art. 22 Abs. 1 DSGVO). Derartige Entscheidungen müssen stets von Menschen getroffen werden.

## Technische Architektur

MUCGPT folgt einer schlanken Microservices‑Architektur:

- Frontend (React) als Benutzeroberfläche
- API‑Gateway als Eintrittspunkt mit Authentifizierung (SSO via Keycloak)
- Core‑Service (FastAPI + LangGraph) für LLM‑Orchestrierung und Tools
- Assistant‑Service (FastAPI + PostgreSQL) für Assistenten‑Konfiguration und Freigaben
- Optional: Langfuse für Observability, Kreuzberg als Parser für Dokumente

![Architekturübersicht von MUCGPT](/img/mucgpt/architecture.png){.light-only}
![Architekturübersicht von MUCGPT (Dark)](/img/mucgpt/architecture-dark.png){.dark-only}

Weiterführende Details: Architekturüberblick im MUCGPT‑Repository
<https://github.com/it-at-m/mucgpt#architecture-overview>

---

[<v-icon>mdi-arrow-left</v-icon> Zurück zur Übersicht](/ki-systeme/index.md)
