[<- Zurück zur Übersicht](/ki-systeme/index.md)

# KI-Suche im Dienstleistungsfinder auf muenchen.de

Diese Dokumentation beschreibt die Funktionsweise, Datengrundlage und Evaluierung der KI-Suche im Dienstleistungsfinder auf muenchen.de.
Die KI nutzt eine Kombination aus Embedding-Modellen und großen Sprachmodellen, um relevante Dokumente zu finden und präzise Antworten auf Nutzeranfragen zu generieren.

![Screenshot von muenchen.de](/img/dlf_screenshot_muenchen-de.png)

## Einführung und Kontext

Die KI-Suche im Dienstleistungsfinder wurde entwickelt, um Bürgern und Mitarbeitern der Stadt München eine effizientere Möglichkeit zu bieten, relevante Informationen und Dienstleistungen auf muenchen.de zu finden.
Durch die Integration von KI-Technologien wird die Suchfunktion erheblich verbessert, was zu einer schnelleren und präziseren Beantwortung von Anfragen führt.

## Datengrundlage

Die KI-Suche basiert auf englischen und deutschen Artikeln von muenchen.de. Hier sind einige Beispiele für die Artikel:

### Beispiele

#### [Personalausweis](https://stadt.muenchen.de/service/info/personalausweis/1063441/n0/)

Deutsche Staatsangehörige sind verpflichtet, einen gültigen Personalausweis (oder Reisepass) zu besitzen, sobald sie 16 Jahre alt sind.

#### [Fischerprüfung](https://stadt.muenchen.de/service/info/zustaendiges-amt-fuer-muenchen/1081175/)

Sie können zur Fischerprüfung zugelassen werden, wenn Sie vorher an einem anerkannten Vorbereitungslehrgang nach Ausbildungsplan teilgenommen haben.

## Funktionsweise

Mithilfe von Retrieval-Augmented Generation werden in einem ersten Schritt relevante Dokumente in der Datenbasis gesucht. Anschließend werden zu den relevantesten Artikeln mithilfe eines großen Sprachmodells (LLM) Antworten generiert.

### Hybride Suche mit BM25

In dieser Anwendung wird eine hybride Suchmethode verwendet, die BM25 mit den semantischen Fähigkeiten eines Sprachmodells kombiniert.

BM25 ist ein klassischer Ranking-Algorithmus, der auf der Häufigkeit von Schlüsselwörtern basiert. Die Ergebnisse aus beiden Methoden werden dann zusammengeführt, um die relevantesten Antworten zu liefern.

![Grafik Chain](/img/dlf_chain.png)

## KI-Modelle

### Embedding-Modell

Embeddings/Texteinbettungen messen die Verwandtschaft von Textstrings.
In dieser Anwendung werden sie genutzt, um relevante Dokumente zu einer Suchanfrage zu finden.
Das System nutzt das Embedding-Modell "text-embeddings-3-large" von OpenAI.
[Mehr Informationen zum Modell](https://platform.openai.com/docs/guides/embeddings/embedding-models)

### Großes Sprachmodell / Large Language Model (LLM)

Das große Sprachmodell "gpt-4o-mini" von OpenAI wird zur Generierung der Nutzerantworten genutzt.
[Mehr Informationen zum Modell](https://openai.com/index/gpt-4o-mini-advancing-cost-efficient-intelligence/)

## Evaluierung

Die Retrieval-Komponente (Finden der relevanten Dokumente) wurde mithilfe von drei Datensätzen evaluiert. Dabei wird angegeben, in wie vielen Fällen der relevante Artikel das oberste Ergebnis ist. Der Score wird als Mean Reciprocal Rank (MRR) angegeben.

- **Händisch erstellter Datensatz im Rahmen des Forschungsprojekts x-next**: Score Ø 0.8267
- **Synthetisch (mit LLM) erstellter deutscher Datensatz**: Score Ø 0.8219
- **Synthetisch (mit LLM) erstellter englischer Datensatz**: Score Ø 0.8292

Diese Datensätze sind nicht zwingend repräsentativ für die Allgemeinheit.

[Mehr Informationen zu MRR](https://en.wikipedia.org/wiki/Mean_reciprocal_rank)

### Beispiel des Datensatzes

| Frage                                                               | Zugehöriges Dokument                                                                 |
| ------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Zu welchen Endprodukten werden die organischen Abfälle verarbeitet? | Artikel über Abfallverarbeitung auf muenchen.de                                      |
| Biotonne anmelden oder ummelden                                     | Artikel über die Anmeldung oder Ummeldung der Biotonne auf muenchen.de               |
| Wie läuft die Gesundheitsuntersuchung zur Einschulung ab?           | Artikel über die Gesundheitsuntersuchung zur Einschulung auf muenchen.de             |
| Reformierte Gesundheitsuntersuchung zur Einschulung                 | Artikel über die reformierte Gesundheitsuntersuchung zur Einschulung auf muenchen.de |

## Risiken und Limitierungen

Obwohl die KI-Suche viele Vorteile bietet, gibt es auch einige Risiken und Limitierungen:

- **Bias in den Daten**: Die KI-Modelle können Vorurteile aus den Trainingsdaten übernehmen.
- **Sprachliche Beschränkungen**: Die Qualität der Antworten kann je nach Sprache und Formulierung der Anfrage variieren.
- **Datenschutz**: Es dürfen keine personenbezogenen Daten eingegeben werden.

---

[<- Zurück zur Übersicht](/ki-systeme/index.md)
