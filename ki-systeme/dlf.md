[<- Zurück zur Übersicht](/ki-systeme/index.md)

# KI-Suche im Dienstleistungsfinder auf muenchen.de

[-> KI-Suche selbst ausprobieren](https://muenchen.de/ki-suche)

Diese Dokumentation beschreibt die Funktionsweise, Datengrundlage und Evaluierung der KI-Suche im Dienstleistungsfinder auf muenchen.de.
Die KI-Suche nutzt ein Embedding-Modell und ein großes Sprachmodell, um relevante Dokumente zu finden und präzise Antworten auf Nutzeranfragen zu generieren.

![Screenshot von muenchen.de/ki-suche](/img/dlf_screenshot_muenchen-de.png)

## Einführung und Kontext

Die KI-Suche im Dienstleistungsfinder wurde entwickelt, damit Bürger\*innen und Mitarbeitenden der Stadt München effizienter Informationen zu städtischen Dienstleistungen finden können.
Durch die Integration von KI-Technologien wird die Suchfunktion erheblich verbessert, was zu einer schnelleren und präziseren Beantwortung von Anfragen führt.

## Datengrundlage

Die KI-Suche basiert auf aktuell auf allen Dienstleistungs-Beschreibungen in Deutsch, die [die Stadt München auf ihrer Webseite bereitstellt](https://stadt.muenchen.de/service/).

### Beispiele für verzeichnete Dienstleistungen

#### [Personalausweis](https://stadt.muenchen.de/service/info/personalausweis/1063441/n0/)

Deutsche Staatsangehörige sind verpflichtet, einen gültigen Personalausweis (oder Reisepass) zu besitzen, sobald sie 16 Jahre alt sind.

#### [Fischerprüfung](https://stadt.muenchen.de/service/info/zustaendiges-amt-fuer-muenchen/1081175/)

Sie können zur Fischerprüfung zugelassen werden, wenn Sie vorher an einem anerkannten Vorbereitungslehrgang nach Ausbildungsplan teilgenommen haben.

#### [Temporäre Kanalanschlüsse](https://stadt.muenchen.de/service/info/temporaere-kanalanschluesse/10435214/n0/)

Wenn Sie Baustelleneinrichtungen oder Veranstaltungen (Straßenfeste, etc.) planen, können Sie temporäre Kanalanschlüsse für Sanitärcontainer anfordern.

## Funktionsweise

Die KI-Suche benutzt eine Methodik namens _Retrieval-Augmented Generation_ (RAG).
In dieser werden in einem ersten Schritt zur Frage relevante Dokumente in einer Datenbasis gesucht.
Anschließend werden zu den relevantesten Artikeln mithilfe eines großen Sprachmodells (LLM) Antworten generiert.

![Darstellung der Funktionsweise von RAG](/img/dlf_rag.png){.light-only}
![Darstellung der Funktionsweise von RAG](/img/dlf_rag_dark.png){.dark-only}

### Repräsentation der semantischen Information mit Embeddings

Die KI-Suche nutzt zum Vergleich der Informationen in den Dokumenten und der Nutzeranfrage _Embeddings_ (dt. Einbettungen).
Embeddings sind hochdimensionale Vektoren, die durch ein spezielles KI-Modell generiert werden.
Als Eingabe erhält das Embedding-Modell den jeweiligen Text (z.B. die Dienstleistungsbeschreibung) und gibt einen Vektor zurück.
Diese Vektoren können dann in einer Datenbank gespeichert und einfach verglichen werden, um die Ähnlichkeit zwischen verschiedenen Texten zu bestimmen.

![Darstellung von Embeddings als Repräsentation von Text](/img/dlf_embeddings.png){.light-only}
![Darstellung von Embeddings als Repräsentation von Text](/img/dlf_embeddings_dark.png){.dark-only}

### Hybride Suche mit BM25

In dieser Anwendung wird eine hybride Suchmethode verwendet.
Sie kombiniert die klassische, stichwortbasierte Methodik BM25 mit den oben beschriebenen semantischen Embeddings.
So können sowohl zu klassischen Suchanfragen, als auch ausformulierte Fragen, die keine exakten Schlüsselwörter enthalten, Dokumente gefunden werden.

![Darstellung der hybriden Suche](/img/dlf_hybrid_search.png){.light-only}
![Darstellung der hybriden Suche](/img/dlf_hybrid_search_dark.png){.dark-only}

### Generierung der Antwort

Für gefundene Dokumente wird separat ein großes Sprachmodell (engl. kurz LLM) aufgerufen.
Das LLM soll basierend auf der ursprünglichen Frage drei Werte zurücklieferen:

1. eine ausformulierte Antwort auf die gestellte Frage
2. ein passendes wörtliches Zitat aus dem Dokument
3. die Einschätzung, ob die Frage durch das Dokument beantwortet werden kann

Falls die Frage nicht beantwortet werden kann, wird das Dokument nicht angezeigt.
Durch diese Methode wird sichergestellt, dass irrelevante Dokumente nicht an die Nutzer\*innen zurückgegeben werden.

![Darstellung der Antwortgenerierung](/img/dlf_answer_generation.png){.light-only}
![Darstellung der Antwortgenerierung](/img/dlf_answer_generation_dark.png){.dark-only}

## KI-Modelle

### Embedding-Modell

Embeddings/Texteinbettungen messen die Verwandtschaft von Textstrings.
In dieser Anwendung werden sie genutzt, um relevante Dokumente zu einer Suchanfrage zu finden.
Das System nutzt das Embedding-Modell "text-embeddings-3-large" von OpenAI.
[Mehr Informationen zum Modell](https://platform.openai.com/docs/guides/embeddings/embedding-models)

### Großes Sprachmodell (LLM)

Das große Sprachmodell "gpt-4o-mini" von OpenAI wird zur Generierung der Nutzerantworten genutzt.
[Mehr Informationen zum Modell](https://openai.com/index/gpt-4o-mini-advancing-cost-efficient-intelligence/)

## Evaluation

Die Retrieval-Komponente (Auffinden der relevanten Dokumente) wurde mithilfe von zwei Datensätzen evaluiert. Dabei wird angegeben, in wie vielen Fällen der relevante Artikel das oberste Ergebnis ist. Der Score wird als Mean Reciprocal Rank (MRR) angegeben.

- **Händisch erstellter Datensatz im Rahmen des Forschungsprojekts x-next**: Score Ø 0.8815
- **Synthetisch (mit LLM) erstellter deutscher Datensatz**: Score Ø 0.8516

Diese Datensätze sind nicht zwingend repräsentativ für die Allgemeinheit.

[Mehr Informationen zu MRR](https://en.wikipedia.org/wiki/Mean_reciprocal_rank)

### Beispiel des Datensatzes

| Frage                                                                        | Zugehöriges Dokument                                                                                                                                           |
| ---------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Was passiert mit dem Biomüll?                                                | [Biotonne anmelden oder ummelden](https://stadt.muenchen.de/service/info/abfallwirtschaftsbetrieb-muenchen-awm/1072210/)                                       |
| Meine Oma braucht einen Computer, gibt es einen Zuschuss?                    | [Zuschuss zum Kauf eines Computers für Senior\*innen](https://stadt.muenchen.de/service/info/zuschuss-zum-kauf-eines-computers-fuer-senior-innen/10309310/n0/) |
| Was macht der Arzt bei der Untersuchung bevor mein Kind in die Schule kommt? | [Reformierte Gesundheitsuntersuchung zur Einschulung](https://stadt.muenchen.de/service/info/sg-schulgesundheit/10278765/)                                     |
| Wie tausche ich meinen alten Lappen um?                                      | [Umtausch in Kartenführerschein](https://stadt.muenchen.de/service/info/hauptabteilung-ii-fahrzeugzulassungs-und-fahrerlaubnisbehoerde/1064289/)               |

## Risiken und Limitierungen

Obwohl die KI-Suche viele Vorteile bietet, gibt es auch einige Risiken und Limitierungen:

- **Bias in den Daten**: Die KI-Modelle können Vorurteile aus den Trainingsdaten übernehmen.
- **Sprachliche Beschränkungen**: Die Qualität der Antworten kann je nach Sprache und Formulierung der Anfrage variieren.
- **Datenschutz**: Es dürfen keine personenbezogenen Daten eingegeben werden.

---

[<- Zurück zur Übersicht](/ki-systeme/index.md)
