---
system_type: KI-System
title: RIS-KI
logo: /img/logo/riski_logo.png
code: https://github.com/it-at-m/riski
linkapplication: https://riski.muenchen.de
license: MIT
tags:
  - RAG
  - RIS
  - Suche
description: Durchsuche das Ratsinformationssystem (RIS) mit Hilfe von KI. Verbessert die Auffindbarkeit von Stadtratsinformationen durch eine intelligente Suchfunktion.
---

[<v-icon>mdi-arrow-left</v-icon> Zurück zur Übersicht](/ki-systeme/index.md)

# RIS-KI (BETA)

Die KI-Suche im [Raatsinformationssystem](https://risi.muenchen.de/risi/aktuelles;jsessionid=6F88999DED0AB379E2C780069F7BF440?0) (RIS) hilft dabei, relevante Beschlüsse und Dokumente zu finden. Momentan steht eine Vorabversion, die vor allem dabei hilft inhaltlich passende Informationen zu finden. Auswertungen werden im aktuellen System noch nicht wirklich abgebildet. Mehr dazu im Abschnitt [Risiken und Limitierungen](#risiken-und-limitierungen)

---

Diese Dokumentation beschreibt die Funktionsweise, Datengrundlage und Einschränkungen der KI-Suche im RIS.
Das System nutzt ein Embedding-Modell und ein großes Sprachmodell, um relevante Dokumente zu finden und präzise Antworten auf Nutzeranfragen zu generieren.
Außerdem wird ein OCR Modell genutzt, um Informationen aus den Dokumenten zu extrahieren.

**TODO Screenshot einfügen**

## Einführung und Kontext

Die KI-Suche im Raatsinformationssystem wurde entwickelt, damit Bürger\*innen und Mitarbeitenden der Stadt München natürlicher an Informationen zur Arbeit der Verwaltung, des Stadtrates und der Bezirksausschüsse der Landeshauptstadt München gelangen.
Durch die Integration von KI-Technologien werden inhaltlich passende Informationen gefunden.

## Datengrundlage TODO (ähnlich wie beim DLF, paar Beispieldokumente und Beschlüsse zeigen)

**TODO, hier etwas zu den Dokumenten die verwendet werden, Zeitraum etc..**

### Beispiele für Vorgänge im RIS

#### [Vorgang 1](Bitte Link einfügen)

Beschreibung Vorgang 1

Weitere Beispiele..

### TODO Parsing mit Dokumentenpipeline und MIstral AI?

Entweder hier, oder in Funktionsweise

## Funktionsweise

Die KI-Suche im RIS ist ein agentenbasiertes System, das in mehreren Schritten relevante Beschlüsse und Dokumente im RIS findet.

### Übersicht über den RIS-Agenten

Das folgende Diagramm gibt einen guten Überblick über das Verhalten des Agenten:

![Darstellung der Funktionsweise von RAG](/img/riski/riski_agent.png){.light-only}
![Darstellung der Funktionsweise von RAG](/img/riski/riski_agent_dark.png){.dark-only}

Ein roter Punkt kennzeichnet dabei Aktionen, die mithilfe von KI-Modellen durchgeführt werden. Dabei passiert folgendes:

1. Alles Beginnt mit einer Nutzeranfrage
2. **Werkzeugauswahl**: Das [Große Sprachmodell](#großes-sprachmodell-llm) entscheidet, ob eins der Werkzeuge (in gelb) die Frage beantworten kann. Sonst gehts zu Schritt 6.
3. **Informationsbeschaffung**: Werkzeuge werden aufgerufen

- Falls eine Frage hinlänglich der Fähigkeiten des Systems kommt, werden diese Nachgeschlagen
- Falls eine Suchanfrage kommt, wird dies an das RAG Werkzeug weitergegeben. Dabei wird unter Umständen die ursprüngliche Frage umformuliert
  1.  Dieses sucht mithilfe einer semantischen Suche in den relevanten Dokumenten, die 10 relevantesten Dokumente mitsamt passender Anträge werden zurückgegeben

4. **Überprüfung der Information**: Die gefundenen Dokumente werden nochmal einzeln mithilfe des LLMs überprüft, ob diese relevant sind. Falls keine relevanten Dokumente übrig bleiben geht es zu Schritt 6.

5. **Antwortgenerierung**: Die ursprüngliche Frage wird mithilfe den zuvor gefundenen relevanten Informationen vom Sprachmodell beantwortet. Die gefundenen Dokumente und Anträge werden seperat angezeigt.
6. Mithilfe des LLMs werden alternative Fragen vorgeschlagen, unter Berücksichtigung der Datengrundlage und Limitierungen des Systems

**TODO eventuell die Einzelschritte nochmal bebildern? Retrieval und Dokumentüberprüfung mit MAP-REduce?**

**TODO eventuell einen Abschnitt zu Softwarestandards die verwendet wurden? AG-UI Frontend kommunication, Metadaten mit OPARL extrahiert?**

## KI-Modelle

### Embedding-Modell

Embeddings/Texteinbettungen messen die Verwandtschaft von Textstrings.
In dieser Anwendung werden sie genutzt, um relevante Dokumente zu einer Suchanfrage zu finden.
Das System nutzt das Embedding-Modell "text-embeddings-3-large" von OpenAI.
[Mehr Informationen zum Modell](https://platform.openai.com/docs/guides/embeddings/embedding-models)

### Großes Sprachmodell (LLM)

Das große Sprachmodell "gpt-4.1mini" von OpenAI wird zur Generierung der Nutzerantworten genutzt.

TODO Link austauschen und ist "gpt-4.1"
[Mehr Informationen zum Modell](https://openai.com/index/gpt-4o-mini-advancing-cost-efficient-intelligence/)

TODO Mistral Document ai

## Risiken und Limitierungen TODO, das hier deutlich ausbauen mit beispielen

Obwohl die KI-Suche viele Vorteile bietet, gibt es auch einige Risiken und Limitierungen:

- **Bias in den Daten**: Die KI-Modelle können Vorurteile aus den Trainingsdaten übernehmen.
- **Sprachliche Beschränkungen**: Die Qualität der Antworten kann je nach Sprache und Formulierung der Anfrage variieren.
- **Datenschutz**: Es dürfen keine personenbezogenen Daten eingegeben werden.

---

## TODO Ausblick?

Ausblick mit Kontakt für Wünsche?

[<v-icon>mdi-arrow-left</v-icon> Zurück zur Übersicht](/ki-systeme/index.md)
