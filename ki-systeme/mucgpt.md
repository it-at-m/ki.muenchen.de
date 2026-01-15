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

Diese Dokumentation geht auf die Funktionen und die Limitierungen von MUCGPT ein.

![Die Startseite von MUCGPT mit den vordefinierten Funktionen Chat, Zusammenfassen, Brainstorming und Leichte Sprache sowie einigen eigenen Assistenten](/img/mucgpt/mucgpt_frontpage.png)

## Einführung und Kontext

MUCGPT ist eine Benutzeroberfläche für die Nutzung von großen Sprachmodellen, welches den Mitarbeiter\*innen der Stadt München zur Verfügung steht. MUCGPT kann sich mit beliebigen OpenAI-kompatiblen Sprachmodellen verbinden und ist ein universelles Werkzeug zur Bearbeitung von Text.

MUCGPT ist Open Source und kann überall als Container betrieben werden. Gerne ausprobieren! Wir unterstützen bei den ersten Schritten.

## Funktionen

MUCGPT ermöglicht die Bearbeitung von Text. In diesem Abschnitt werden einige Funktionen kurz aufgezeigt:

### Chat

Der Chat ermöglicht die nachrichtenbasierte Interaktion mit einem Sprachmodell. Nutzer\*innen können ihren eigenen Kontext mitbringen und so über mehrere Schritte Inhalte transformieren.
![Chatfenster von MUCGPT, in dem ein Nutzer eine Frage stellt und das KI-Modell mit einer Grafik antwortet](/img/mucgpt/mucgpt_chat.png)

### Zusammenfassen

Beim Zusammenfassen werden längere Texte oder PDF-Dokumente auf die wichtigsten Aussagen reduziert. Dabei werden die wichtigsten Entitäten im Text identifiziert und basierend auf diesen eine Zusammenfassung erstellt.
![Zusammenfassen-Fenster, in dem das KI-Modell zwei Versionen einer Zusammenfassung eines Textes anzeigt. Die Zusammenfassung ist etwa 10 Sätze lang.](/img/mucgpt/mucgpt_zusammenfassen.png)

## Brainstorming

Beim Brainstorming wird zu einer Idee eine Mindmap erstellt. Diese kann anschließend mit dem Mindmaptool [Freeplane](https://docs.freeplane.org/) weiterverarbeitet werden.
![Ausgabe des Brainstorming-Tools von MUCGPT: Eine Mindmap, die von der Mitte ausgehend verschiedene Ideen und Begriffe zum Thema "Gründe im München zu Wohnen" enthält.](/img/mucgpt/mucgpt_brainstorming.png)

## Übersetzung in leichte Sprache

Komplizierte Texte können in leichte oder einfache Sprache übersetzt werden.
![Ausschnitt aus dem Leichte-Sprache-Tool von MUCGPT: Ein langer, komplizierter Satz wird in kurze, leicht verständliche Sätze umgewandelt.](/img/mucgpt/mucgpt_leichte_sprache.png)

## Erstellung und Teilen von Assistenten

Für wiederkehrende Aufgaben können eigene Assistenten erstellt werden. Der Prompt dafür kann automatisch generiert werden.
In Zukunft ist es geplant, dass Assistenten mit allen anderen Nutzer\*innen geteilt werden können. Beispiele sind:

- Assistent, der beim Softwaretesten nach ISO-Norm 29119
- Assistent für Projektleiter\*innen, der beim Erstellen von UserStorys hilft

## KI-Modelle

MUCGPT greift auf große Sprachmodelle zu. Diese wurden nicht mit eigenen Daten trainiert und haben somit nur öffentliches/allgemeines Wissen.

Grundsätzlich kann in MUCGPT per Konfiguration jedes beliebige Sprachmodell angebunden werden.

### Große Sprachmodelle / Large Language Model (LLM)

Momentan verwenden wir:

- "gpt-4o-mini" von OpenAI
  [Mehr Informationen zum Modell](https://openai.com/index/gpt-4o-mini-advancing-cost-efficient-intelligence/)
- "gpt-4o" von OpenAI [Mehr Informationen zum Modell](https://openai.com/index/gpt-4o-system-card/)
- "mistral-large-2407" von Mistral AI [Mehr Informationen zum Modell](https://mistral.ai/news/mistral-large-2407/)

## Risiken und Limitierungen

Obwohl die MUCGPT viele Vorteile bietet, gibt es auch einige Risiken und Limitierungen:

- **Bias in den Daten**: Die KI-Modelle können Vorurteile aus den Trainingsdaten übernehmen.
- **Sprachliche Beschränkungen**: Die Qualität der Antworten kann je nach Sprache, ausgwählten Sprachmodell und Formulierung der Anfrage variieren.
- **Datenschutz**: Es dürfen keine personenbezogenen Daten eingegeben werden, da wir momentan noch KI-Modelle über Cloud Betreiber beziehen. Interne Daten sind erlaubt.
- **Entscheidungsfindung**: MUCGPT darf nicht für abschließende Entscheidungen verwendet werden, die gegenüber Personen rechtliche Wirkung entfalten oder sie in ähnlicher Weise erheblich beeinträchtigen (Art. 22 Abs. 1 DSGVO). Derartige Entscheidungen müssen stets von Menschen getroffen werden.

---

[<v-icon>mdi-arrow-left</v-icon> Zurück zur Übersicht](/ki-systeme/index.md)
