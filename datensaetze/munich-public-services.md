# Dataset Card für "Münchner Verwaltungs-Dienstleistungen"

[**zum Datensatz**](https://huggingface.co/datasets/it-at-m/munich-public-services)

<!-- Provide a quick summary of the dataset. -->

Dieser Datensatz enthält Informationen über die von der Landeshauptstadt München angebotenen Dienstleistungen in Form von schriftlichen Artikeln, zugehörigen Metadaten sowie Einbettungen.

## Datensatzdetails

### Datensatzbeschreibung

<!-- Provide a longer summary of what this dataset is. -->

Der Datensatz "Münchner Verwaltungs-Dienstleistungen" enthält etwa 1.400 Artikel über verschiedene öffentliche Dienstleistungen der Landeshauptstadt München.
Neben dem Inhalt der Artikel enthält der Datensatz auch Metadaten wie die Sprache des Artikels, das Datum der letzten Änderung und die mit dem Artikel verbundenen Schlüsselwörter.
Der Datensatz enthält auch Einbettungsvektoren, die aus jedem Artikel berechnet wurden und für Retrieval- oder andere NLP-Aufgaben verwendet werden können.

- **Kuratiert von:** Landeshauptstadt München, it@M, KI Competence Center
- **Sprache(n) (NLP):** Deutsch, Englisch
- **Lizenz:** MIT

### Datenquellen

<!-- Provide the basic links for the dataset. -->

- **KI-Dokumentation der Landeshauptstadt München:** [ki.muenchen.de](https://ki.muenchen.de/)
- **Datensatz-Quellwebseiten:** [Münchner Verwaltungs-Dienstleistungen](https://stadt.muenchen.de/service/en-GB/)

## Verwendungszwecke

<!-- Address questions around how the dataset is intended to be used. -->

### Direkte Nutzung

<!-- This section describes suitable use cases for the dataset. -->

Der Datensatz kann verwendet werden, um Informationen über die öffentlichen Dienstleistungen der Landeshauptstadt München bereitzustellen.
Dies ist besonders nützlich für KI-basierte Suchsysteme oder das Anreichern großer Sprachmodelle im Kontext öffentlicher Dienstleistungen.
Die Daten können auch verwendet werden, um Muster oder Trends in den von der Landeshauptstadt München angebotenen öffentlichen Dienstleistungen zu analysieren.

### Nicht geeignete Nutzung

<!-- This section addresses misuse, malicious use, and uses that the dataset will not work well for. -->

Der Datensatz sollte nicht für andere Zwecke als den vorgesehenen Verwendungszweck der Bereitstellung von Informationen über die öffentlichen Dienstleistungen der Landeshauptstadt München verwendet werden.
Dies gilt auch für andere Städte oder Regierungsstellen, da die Informationen spezifisch für München sind.

Der Datensatz sollte nicht für böswillige Zwecke wie Desinformation oder die Erstellung von Fake News verwendet werden.
Auch die Verwendung des Datensatzes als Eingabe für ein LLM zur Erstellung weiterer "Fake"-Artikel sollte unterlassen werden.

## Datenstruktur

<!-- This section provides a description of the dataset fields, and additional information about the dataset structure such as criteria used to create the splits, relationships between data points, etc. -->

Der Datensatz besteht aus den folgenden Feldern:

| Feld               | Typ               | Beschreibung                                                                                                                                                                                                                   |
| ------------------ | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`               | int               | Die eindeutige ID des Artikels.                                                                                                                                                                                                |
| `name`             | string            | Der Titel des Artikels.                                                                                                                                                                                                        |
| `content`          | string            | Der vollständige Textinhalt des Artikels, formatiert in Markdown.                                                                                                                                                              |
| `language`         | string            | Die Sprache des Artikels, entweder Deutsch (`de`) oder Englisch (`en`).                                                                                                                                                        |
| `description`      | string            | Eine kurze Beschreibung des Artikelinhalts mit einer maximalen Länge von x Zeichen, formatiert in HTML.                                                                                                                        |
| `source`           | string            | Link zur Quellwebseite des Artikels.                                                                                                                                                                                           |
| `public`           | bool              | Wahrheitswert, der angibt, ob der Artikel öffentlich ist oder nicht, immer `True`.                                                                                                                                             |
| `lastModification` | timestamp         | Zeitstempel der letzten Änderung des Artikels in UTC.                                                                                                                                                                          |
| `keywords`         | sequence [string] | Eine Liste von Schlüsselwörtern, die mit dem Artikel verbunden sind; die Schlüsselwörter können auf Deutsch oder Englisch sein.                                                                                                |
| `embedding`        | sequence [float]  | Ein 3072-dimensionaler Einbettungsvektor, der aus dem Artikelinhalt berechnet wurde, unter Verwendung von OpenAI's [`text-embedding-3-large`](https://platform.openai.com/docs/guides/embeddings/#embedding-models) KI-Modell. |

## Datensatz-Erstellung

### Kurationsgrund

<!-- Motivation for the creation of this dataset. -->

Der Datensatz wurde als Nebenprodukt eines Projekts zur Bereitstellung eines besseren Informationsabrufsystems für die öffentlichen Dienstleistungen der Landeshauptstadt München erstellt.
Der Datensatz wird regelmäßig aktualisiert, um neue Artikel aufzunehmen und die Einbettungen zu aktualisieren.

### Quelldaten

<!-- This section describes the source data (e.g. news text and headlines, social media posts, translated sentences, ...). -->

Der Datensatz stammt von der Website der öffentlichen Dienstleistungen der Landeshauptstadt München und dem zugrunde liegenden CMS.
Alle Artikel wurden von Mitarbeitenden der Landeshauptstadt München geschrieben.

#### Datensammlung und -verarbeitung

<!-- This section describes the data collection and processing process such as data selection criteria, filtering and normalization methods, tools and libraries used, etc. -->

Die Daten wurden durch Abfragen einer internen API des CMS der Landeshauptstadt München gesammelt.
Die Daten wurden dann weiterverarbeitet, um die Metadaten und den Inhalt der Artikel zu extrahieren.
Der Artikelinhalt wurde mit der [markdownify](https://pypi.org/project/markdownify/) Bibliothek von HTML in Markdown umgewandelt.
Die Einbettungen wurden mit dem [`text-embedding-3-large`](https://platform.openai.com/docs/guides/embeddings/#embedding-models) Modell von OpenAI generiert.

#### Wer sind die Ersteller der Quelldaten?

<!-- This section describes the people or systems who originally created the data. It should also include self-reported demographic or identity information for the source data creators if this information is available. -->

Die Ersteller der Quelldaten sind die Mitarbeiter der Landeshauptstadt München, die die Artikel geschrieben haben, es gibt keine Zuordnung zu einzelnen Autoren.
Die Mitarbeiter sind eine vielfältige Gruppe von Menschen, die in der Stadtverwaltung arbeiten und über spezielles Wissen über die öffentlichen Dienstleistungen ihrer jeweiligen Referaten und Fähigkeiten im Verfassen verständlicher Artikel verfügen.

#### Persönliche und sensible Informationen

<!-- State whether the dataset contains data that might be considered personal, sensitive, or private (e.g., data that reveals addresses, uniquely identifiable names or aliases, racial or ethnic origins, sexual orientations, religious beliefs, political opinions, financial or health data, etc.). If efforts were made to anonymize the data, describe the anonymization process. -->

Der Datensatz enthält keine persönlichen oder sensiblen Informationen.

## Verzerrungen, Risiken und Einschränkungen

<!-- This section is meant to convey both technical and sociotechnical limitations. -->

Der bereitgestellte Datensatz ist nur ein Teil aller öffentlichen Dienstleistungen der Landeshauptstadt München.
Darüber hinaus können die Daten Verzerrungen in Form von

- der in den Artikeln verwendeten Sprache (sogenanntes "Beamtendeutsch")
- der Qualität und Informationsfülle der Artikel
- der Anzahl der Artikel zu einem Thema
- und den mit den Artikeln verbundenen Schlüsselwörtern enthalten.

Dies kann zu Verzerrungen in den Einbettungen und dem auf dem Datensatz aufgebauten Systeme führen

### Empfehlungen

<!-- This section is meant to convey recommendations with respect to the bias, risk, and technical limitations. -->

Um die Verzerrungen im Datensatz zu mindern, wird empfohlen, den Datensatz in Kombination mit anderen Informationsquellen zu verwenden.
Ein weiterer Ansatz besteht darin, den Datensatz mit einem benutzerdefinierten Evaluationsset zu bewerten, um Verzerrungen für den spezifischen Anwendungsfall zu identifizieren und zu mindern.

## Glossar

- **Retrieval:** Abruf von Informationen aus einem Datensatz.
- **NLP:** Natural Language Processing, Verarbeitung natürlicher Sprache.
- **Embedding:** Einbettung, eine Darstellung von Text in Form von Vektoren.
- **LLM:** Large Language Model, großes Sprachmodell.
- **Desinformation:** Verbreitung falscher oder irreführender Informationen.

## Weitere Informationen

Für weitere Informationen über die KI-Projekte der Landeshauptstadt München besuchen Sie bitte [ki.muenchen.de](https://ki.muenchen.de/).

## Autoren der Dataset Card

Fabian Reinold - Landeshauptstadt München, it@M, KI Competence Center

## Kontakt für die Dataset Card

Bei Fragen zum Datensatz kontaktieren Sie uns bitte [hier](mailto:itm.kicc@muenchen.de).
