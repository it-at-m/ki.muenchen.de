---
system_type: KI-System
title: MUCGPT
logo: /img/logo/mucgpt.svg
sidebar_logo: /img/logo/mucgpt_title.png
code: https://github.com/it-at-m/mucgpt
linkapplication: https://it-at-m.github.io/mucgpt/
license: MIT
# display_rank: lower numbers appear earlier; missing or invalid values sort last; ties fall back to title
display_rank: 10
tags:
  - Generative KI
  - Open Source
  - intern
description: MUCGPT ist das KI-Werkzeug für die Stadtverwaltung München, das Mitarbeiter*innen sicher und konform die Arbeit mit generativen KI-Modellen ermöglicht.
---

[<v-icon>mdi-arrow-left</v-icon> Zurück zur Übersicht](/ki-systeme/index.md)

# MUCGPT

MUCGPT ist das KI-Werkzeug für die Stadtverwaltung München, das Mitarbeiter\*innen sicher und konform die Arbeit mit generativen KI-Modellen ermöglicht.

---

Diese Dokumentation fasst die wichtigsten Funktionen und Limitierungen von MUCGPT zusammen. MUCGPT ist Open Source, kann als Container betrieben werden und lässt sich an beliebige OpenAI‑kompatible KI-Modellanbieter anbinden.

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
- Der Assistent antwortet standardmäßig in der gewählten Oberflächensprache; schreiben Sie in einer anderen Sprache, folgt er Ihnen.

<video src="/img/mucgpt/videos/de-chat-streaming.mp4" controls muted loop width="100%"></video>

### Canvas

Verfügbar ab MUCGPT 2.1.

![Canvas mit Dokument und Agent-Ausgabe](/img/mucgpt/canvas.png)

Neben dem Chat lässt sich ein Rich-Text-Dokument öffnen und gemeinsam mit dem
Assistenten bearbeiten: Der Assistent kann das Dokument schreiben und ändern,
während Sie es live mitverfolgen; Sie können selbst formatieren, Versionen
sichern und das Dokument als Markdown, PDF, Word oder Excel exportieren.
Ausgewählte Textstellen lassen sich direkt in den Chat zitieren und gezielt
überarbeiten lassen.

<video src="/img/mucgpt/videos/de-canvas-writing.mp4" controls muted loop width="100%"></video>

### Chat mit Dokumenten

![Dokumentdialog mit hochgeladenem Dokument](/img/mucgpt/chat_documents.png)

Dokumente lassen sich im Chat hochladen und als Kontext für die Antworten
nutzen: Dateien werden zu Text extrahiert, und der Assistent arbeitet mit dem
Inhalt — Fragen zu einem PDF stellen, einen Bericht zusammenfassen oder
Dokumente mit eigenen Anweisungen kombinieren.

- Pro Konversation können eine oder mehrere Dateien hochgeladen und
  ausgewählt werden; die Auswahl wird mit der Konversation gespeichert.
- Das Modell erhält die ausgewählten Dokumente über eine schreibgeschützte
  Dokumentenansicht — es kann sie lesen und durchsuchen, aber nie verändern,
  und sieht nur die Dokumente, die Sie für den aktuellen Schritt ausgewählt
  haben.
- Verfügbar ab MUCGPT 2.1.

<video src="/img/mucgpt/videos/de-document-upload.mp4" controls muted loop width="100%"></video>

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

#### Tool-Bestätigung (Human in the loop)

![Tool-Bestätigungskarte](/img/mucgpt/tool_approval.png)

Manche Tools erfordern Ihre ausdrückliche Bestätigung, bevor sie ausgeführt
werden. Ruft der Assistent ein solches Tool auf, pausiert die Antwort und eine
Bestätigungskarte erscheint im Chat: Sie zeigt das Tool, die genauen Argumente
des Aufrufs (beispielsweise die Suchanfrage, die an das Web gesendet würde)
und die DatenSchutzebene, die das Tool empfangen darf. Sie können den Aufruf
bestätigen oder ablehnen — bei einer Ablehnung fährt der Assistent ohne
Ausführung fort. Wenn Sie stattdessen weiterarbeiten, wird die pausierte
Aktion abgebrochen und nie ausgeführt.

<video src="/img/mucgpt/videos/de-tool-approval.mp4" controls muted loop width="100%"></video>

### Spracheingabe

Verfügbar ab MUCGPT 2.1.

Sie können im Chat diktieren statt zu tippen: Die Spracheingabe läuft komplett
im Browser — kein Mikrofoninhalt verlässt Ihr Gerät. Der erkannte Text landet
im Eingabefeld und kann frei mit getipptem Text kombiniert werden. Das
Spracherkennungsmodell wird zentral pro Deployment ausgewählt und einmalig im
Browser heruntergeladen und gespeichert.

### Startseite

![Startseite mit Assistenten im Fokus](/img/mucgpt/startpage.png)

Die neue Startseite fokussiert sich auf Assistenten und bietet einen schnellen Einstieg in den Chat.

### Modellauswahl

![Auswahl verfügbarer Modelle und Kreativitätsstufen](/img/mucgpt/models.png)

Verfügbare Modelle können ausgewählt und die Kreativität passend zur Aufgabe eingestellt werden. Die Auswahl ist für Nutzer\*innen transparent.

### Tutorials

![Angeleitete Beispiele und Tipps](/img/mucgpt/tutorials.png)

Geführte Beispiele und Tipps helfen beim schnellen Einstieg und fördern gute Nutzungsmuster.

### Dark Mode und Internationalisierung

![Dark Mode und i18n in der Oberfläche](/img/mucgpt/darkmode_i18n.png)

Barrierearme Oberfläche mit Dark Mode und Unterstützung für mehrere Sprachen.
Die Oberflächensprache ist zugleich die Standard-Antwortsprache des
Assistenten: Antworten erfolgen in der gewählten Sprache, sofern Sie nicht in
einer anderen Sprache schreiben — dann folgt der Assistent Ihnen.

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
- Core‑Service (FastAPI + LangGraph) für LLM‑Orchestrierung und Tools; die Kommunikation mit dem Frontend folgt dem AG‑UI‑Protokoll
- Assistant‑Service (FastAPI + PostgreSQL) für Assistenten‑Konfiguration und Freigaben
- Optional: Langfuse für Observability, Xberg als Parser für Dokumente

![Architekturübersicht von MUCGPT](/img/mucgpt/architecture.png){.light-only}
![Architekturübersicht von MUCGPT (Dark)](/img/mucgpt/architecture-dark.png){.dark-only}

Weiterführende Details: Architekturüberblick im MUCGPT‑Repository
<https://github.com/it-at-m/mucgpt#architecture-overview>

---

[<v-icon>mdi-arrow-left</v-icon> Zurück zur Übersicht](/ki-systeme/index.md)
