[<v-icon>mdi-arrow-left</v-icon> Zurück zur Übersicht](/ki-systeme/index.md)

# KI-Suche im Dienstleistungsfinder

<br/>

<v-btn prepend-icon="mdi-open-in-new" href="https://muenchen.de/ki-suche" target="_blank" variant="tonal" block size="large" rounded="xl">
    KI-Suche selbst ausprobieren
</v-btn>

Diese Dokumentation gibt einen Überblick über die Datengrundlage, die technische Funktionsweise sowie die Evaluierung der KI-Suche im Dienstleistungsfinder. Sie dient als Grundlage zum Verständnis des Systems und seiner Leistungsfähigkeit im praktischen Einsatz.

![Screenshot von muenchen.de/ki-suche](/img/dlf/dlf_screenshot_muenchen-de.png)

## Einführung und Kontext

Die KI-Suche im Dienstleistungsfinder wurde entwickelt, um Bürger\*innen sowie Mitarbeitenden der Stadt München einen effizienten und zielgerichteten Zugang zu Informationen über städtische Dienstleistungen zu ermöglichen. Technisch basiert sie auf einem Retrieval-Augmented-Generation-(RAG)-Ansatz, bei dem relevante Dokumente zunächst automatisiert abgerufen und anschließend mithilfe eines großen Sprachmodells kontextualisiert verarbeitet werden. Durch diese Kombination aus Dokumentensuche und generativer KI wird die Qualität der Suchergebnisse deutlich gesteigert und eine präzisere Beantwortung von Suchanfragen ermöglicht.

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

Die zu Beginn eingeführte Retrieval-Augmented-Generation-(RAG)-Methodik bildet die Grundlage der KI-Suche. Dabei werden in einem ersten Schritt zu einer Nutzeranfrage relevante Dokumente aus der zugrunde liegenden Datenbasis abgerufen. Anschließend werden auf Basis der relevantesten Dokumente mithilfe eines großen Sprachmodells (LLM) kontextbezogene Antworten generiert.

![Darstellung der Funktionsweise von RAG](/img/dlf/dlf_rag.png){.light-only}
![Darstellung der Funktionsweise von RAG](/img/dlf/dlf_rag_dark.png){.dark-only}

### Repräsentation der semantischen Information mit Embeddings

Die KI-Suche nutzt zum Vergleich der Informationen in den Dokumenten und der Nutzeranfrage _Embeddings_.
Embeddings sind hochdimensionale Vektoren, die durch ein spezielles KI-Modell generiert werden.
Als Eingabe erhält das Embedding-Modell einen Text (z.B. die Dienstleistungsbeschreibung) und gibt einen Vektor zurück.
Diese Vektoren können dann in einer Datenbank gespeichert und einfach verglichen werden, um die Ähnlichkeit zwischen verschiedenen Texten zu bestimmen.

![Darstellung von Embeddings als Repräsentation von Text](/img/dlf/dlf_embeddings.png){.light-only}
![Darstellung von Embeddings als Repräsentation von Text](/img/dlf/dlf_embeddings_dark.png){.dark-only}

### Hybride Suche mit BM25

In dieser Anwendung wird eine hybride Suchmethode verwendet.
Sie kombiniert die klassische, stichwortbasierte Methodik BM25 mit den oben beschriebenen semantischen Embeddings.
So können sowohl zu klassischen Suchanfragen, als auch ausformulierte Fragen, die keine exakten Schlüsselwörter enthalten, Dokumente gefunden werden.

![Darstellung der hybriden Suche](/img/dlf/dlf_hybrid_search.png){.light-only}
![Darstellung der hybriden Suche](/img/dlf/dlf_hybrid_search_dark.png){.dark-only}

### Relevanzbasierte Sortierung der Dokumente mittels Re-Ranking und Boosting

Zur Optimierung der Ergebnisreihenfolge werden die gefundenen Dokumente mithilfe eines Re-Ranking-Modells anhand ihrer inhaltlichen Relevanz zur Nutzeranfrage neu sortiert. Dadurch wird sichergestellt, dass inhaltlich präzisere und für die Anfrage relevantere Dokumente bevorzugt platziert werden.

Ergänzend zum Re-Ranking werden die Suchergebnisse auf Basis aktueller Seitenaufrufe gewichtet. Dokumente mit einer hohen Anzahl an Seitenaufrufen werden dabei priorisiert und entsprechend höher in den Suchergebnissen platziert als weniger häufig aufgerufene Inhalte.

![Darstellung des Re-Ranking und Boosting Prozesses](/img/dlf/dlf_reranking_and_boosting.png){.light-only}
![Darstellung des Re-Ranking und Boosting Prozesses](/img/dlf/dlf_reranking_and_boosting_dark.png){.dark-only}

### Generierung der Antwort

Für jedes aus der Suche extrahierte Dokument wird ein großes Sprachmodell (engl. Large Language Model, LLM) aufgerufen. Basierend auf der Nutzeranfrage und dem jeweiligen Dokumenteninhalt erzeugt das LLM drei Ausgaben:

1. eine ausformulierte Antwort auf die gestellte Frage,
2. ein inhaltlich passendes wörtliches Zitat aus dem Dokument,
3. eine Einschätzung, ob das Dokument zur Beantwortung der Frage geeignet ist.

Kann die Frage anhand eines Dokuments nicht beantwortet werden, wird dieses nicht angezeigt. Auf diese Weise wird sichergestellt, dass Suchergebnisse, die trotz Re-Ranking und Boosting nicht ausreichend relevant für eine präzise Beantwortung der Anfrage sind, nicht an die Nutzer\*innen zurückgegeben werden.

![Darstellung der Antwortgenerierung](/img/dlf/dlf_answer_generation.png){.light-only}
![Darstellung der Antwortgenerierung](/img/dlf/dlf_answer_generation_dark.png){.dark-only}

## KI-Modelle

### Embedding-Modell

Semantische Vektoren von Texten (Text-Embeddings) erfassen die inhaltliche Ähnlichkeit zwischen Texten. In dieser Anwendung werden sie genutzt, um zu einer Suchanfrage relevante Dokumente zu identifizieren. Hierfür verwendet das System das Embedding-Modell „text-embeddings-3-large“ von OpenAI.
[Mehr Informationen zum Modell](https://platform.openai.com/docs/guides/embeddings/embedding-models)

### Großes Sprachmodell (LLM)

Das große Sprachmodell "gpt-4.1-mini" von OpenAI wird zur Generierung der Nutzerantworten genutzt.
[Mehr Informationen zum Modell](https://openai.com/index/gpt-4-1/)

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

[<v-icon>mdi-arrow-left</v-icon> Zurück zur Übersicht](/ki-systeme/index.md)
