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

# RIS-KI

Die KI-Suche im Dienstleistungsfinder nutzt moderne Sprachmodelle, um Bürger\*innen bei der Suche nach städtischen Dienstleistungen auf muenchen.de zu unterstützen.

---

Diese Dokumentation beschreibt die Funktionsweise, Datengrundlage und der KI-Suche im Raatsinformationssystem auf muenchen.de.
Die KI-Suche nutzt ein Embedding-Modell und ein großes Sprachmodell, um relevante Dokumente zu finden und präzise Antworten auf Nutzeranfragen zu generieren.

TODO Screenshot einfügen

## Einführung und Kontext

Die KI-Suche im Raatsinformationssystem wurde entwickelt, damit Bürger\*innen und Mitarbeitenden der Stadt München natürlicher an Informationen zur Arbeit der Verwaltung, des Stadtrates und der Bezirksausschüsse der Landeshauptstadt München gelangen.
Durch die Integration von KI-Technologien wird die Suchfunktion erheblich verbessert, was zu einer schnelleren und präziseren Beantwortung von Anfragen führt.

## Datengrundlage

TODO, hier etwas zu den Dokumenten die verwendet werden, Zeitraum etc..

### Beispiele für Vorgänge im RIS

#### [Vorgang 1](Bitte Link einfügen)

Beschreibung Vorgang 1

Weitere BEispiele..

## Funktionsweise

TODO das hier ausbauen, benutzen ja eher einen agenten das zeigen

### TODO Parsing mit Dokumentenpipeline und MIstral AI?

kanne eventuell auch zu datengrundlage

### Antwortgenerierung mit Agent

TODO folgendes:

- Retrievaltool
- InfoTool
- Antwortüberprüfungen
- Alternativen Generieren

TODO eventuell einen Abschnitt zu Softwarestandards die verwendet wurden? AG-UI Frontend kommunication, Metadaten mit OPARL extrahiert?

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

## Risiken und Limitierungen

Obwohl die KI-Suche viele Vorteile bietet, gibt es auch einige Risiken und Limitierungen:

- **Bias in den Daten**: Die KI-Modelle können Vorurteile aus den Trainingsdaten übernehmen.
- **Sprachliche Beschränkungen**: Die Qualität der Antworten kann je nach Sprache und Formulierung der Anfrage variieren.
- **Datenschutz**: Es dürfen keine personenbezogenen Daten eingegeben werden.

---

[<v-icon>mdi-arrow-left</v-icon> Zurück zur Übersicht](/ki-systeme/index.md)
