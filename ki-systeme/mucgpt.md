[<- Zurück zur Übersicht](/ki-systeme/index.md)

# MUCGPT

Diese Dokumentation geht auf die Funktionen und die Limitierungen von MUCGPT ein.

![Screenshot von muenchen.de](/img/mucgpt_frontpage.png)

## Einführung und Kontext

MUCGPT ist eine Benutzeroberfläche für die Nutzung von großen Sprachmodellen, welches den Mitarbeiter\*innen der Stadt München zur Verfügung steht. MUCGPT kann sich mit beliebigen OpenAI-kompatiblen Sprachmodellen verbinden und ist ein universelles Werkzeug zur Bearbeitung von Text.

MUCGPT ist [OpenSource](https://github.com/it-at-m/mucgpt) und kann überall als Container betrieben werden. Gerne ausprobieren! Wir unterstützen bei den ersten Schritten.

## Funktionen

MUCGPT ermöglicht die Bearbeitung von Text. In diesem Abschnitt werden einige Funktionen kurz aufgezeigt:

### Chat

Der Chat ermäglicht die nachrichtenbasierte Interaktion mit einem Sprachmodel. Nutzer können ihren eigenen Kontext mitbringen und so über mehrere Schritte Inhalte transformieren.
![Chat](/img/mucgpt_chat.png)

### Zusammenfassen

Beim Zusammenfassen werden längere Texte oder PDFs auf die wichtigsen Aussagen reduziert. Dabei werden die wichtigsten Entitäten im Text identifiziert und basierend auf diesen eine Zusammenfassung erstellt.
![Zusammenfassen](/img/mucgpt_zusammenfassen.png)

## Brainstorming

Beim Brainstorming wird zu einer Idee eine Mindmap erstellt. Diese kann anschließend mit dem Mindmaptool [Freeplane](https://docs.freeplane.org/) weiterverarbeitet werden.
![Brainstorming](/img/mucgpt_brainstorming.png)

## Übersetzung in leichte Sprache

Komplizierte Texte können in leichte oder einfache Sprache übersetzt werden.
![Leichte Sprache](/img/mucgpt_leichte_sprache.png)

## Erstellung und Teilen von Assistenten

Für wiederkehrende Aufgaben können eigene Assistenten erstellt werden. Der Prompt dafür kann automatisch generiert werden.
In Zukunft ist es geplant, dass Assistenten mit allen anderen Nutzern geteilt werden können. Beispiele sind:

- Assistent, der beim Softwaretesten nach ISO-Norm 29119
- Assisten für Projektleiter, der beim Erstellen von UserStorys hilft

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
- **Datenschutz**: Es dürfen keine personenbezogenen Daten eingegeben werden, da wir momentan noch KI Modelle über Cloud Betreiber beziehen. Interne Daten sind erlaubt.
- **Entscheidungsfindung**: MUCGPT darf nicht für abschließende Entscheidungen verwendet werden, die gegenüber Personen rechtliche Wirkung entfalten oder sie in ähnlicher Weise erheblich beeinträchtigen (Art. 22 Abs. 1 DSGVO). Derartige Entscheidungen müssen stets von Menschen getroffen werden.

---

[<- Zurück zur Übersicht](/ki-systeme/index.md)
