[<v-icon>mdi-arrow-left</v-icon> Zurück zur Übersicht](/ki-systeme/index.md)

# inspira_BIB: KI-gestütztes Medienempfehlungssystem für die Münchner Stadtbibliothek

<br/>
<v-btn prepend-icon="mdi-open-in-new" href="https://ssl.muenchen.de/" target="_blank" variant="tonal" block size="large" rounded="xl">
    Zum Webkatalog mit KI-Empfehlungen
</v-btn>

Diese Dokumentation beschreibt die Funktionsweise und den Einsatz des KI-gestützten Medienempfehlungssystems **inspira_BIB** für die Münchner Stadtbibliothek.

![Beispiel des inspira_BIB-Systems: Im Webkatalog erscheinen unter den Daten zu einem Medium eine Reihe von neuen, thematisch ähnlichen Medien, die man durch Klick direkt ansehen kann.](/img/inspira_bib_demo.png)

## Einführung und Kontext

Der [Webkatalog der Münchner Stadtbibliothek](https://ssl.muenchen.de/) erhält mit **inspira_BIB** eine neue Funktion, die mithilfe von KI-Algorithmen während des Stöberns Medienempfehlungen präsentiert.
Die Empfehlungen basieren auf inhaltlichen Ähnlichkeiten zwischen den Medien und sollen Nutzer\*innen inspirieren und ihnen neue Entdeckungen ermöglichen.

## Datengrundlage

Das System basiert auf den Einträgen des Webkatalogs der Münchner Stadtbibliothek.
Hierbei werden Medien, die keinen Beschreibungstext enthalten, aus technischen Gründen nicht berücksichtigt.
Die Daten des Empfehlungssystems werden im Zyklus von zwei Wochen aktualisiert, sodass sehr neue Medien und kurzfristige Änderungen zum Teil nicht enthalten sind.
Die Daten enthalten Informationen zu Titel, Autor\*in, Medientyp, ISBN, Coverbild und Beschreibungstext.

## Funktionsweise

Den Empfehlungen zugrunde liegt immer nur das aktuell vom Nutzenden betrachtete Medium, genauer dessen Inhaltsbeschreibung.
Das System berechnet die Ähnlichkeit zwischen dem Beschreibungstext des aktuellen Mediums und den Beschreibungstexten aller anderen Medien im Katalog.
Die Medien mit der höchsten Ähnlichkeit werden als Empfehlungen angezeigt.

Zur Berechnung der Ähnlichkeit werden die Inhaltstexte zuvor bereits in eine Zahlenrepräsentation, ein sogenanntes Embedding, umgewandelt.
Dieses Embedding wird dann in Echtzeit mit den Embeddings aller anderen Medien verglichen.

Das System nutzt keine Nutzerdaten, sondern basiert ausschließlich auf den Inhalten der Medien.

## KI-Modelle

### Embedding-Modell

Embeddings (zu deutsch _Texteinbettungen_) messen die Ähnlichkeit von natürlichsprachlichen Texten.
Das System nutzt das Embedding-Modell `embed-multilingual-v3.0` des Herstellers Cohere, welches über den Cloud-Provider Microsoft Azure in einem europäischen Rechenzentrum bereitgestellt wird.
Das Modell nimmt Texte mit einer Länge von bis zu 512 Token (Wortteile) entgegen und gibt ein Embedding mit 1024 Dimensionen zurück.

Weitere Informationen finden Sie in folgenden Dokumentationen:

- <https://docs.cohere.com/reference/embed>
- <https://docs.cohere.com/docs/semantic-search>
- <https://docs.cohere.com/v2/docs/cohere-on-microsoft-azure>
- <https://learn.microsoft.com/en-us/azure/ai-studio/how-to/deploy-models-cohere-embed?tabs=cohere-embed-v3-english&pivots=programming-language-python>

## Evaluierung

### Wahl des Embedding-Modells

Die Wahl des Embedding-Modells erfolgte aufgrund einer Evaluation zwischen dem oben genannten Modell `embed-multilingual-v3.0` und dem quelloffenen Modell [`intfloat/multilingual-e5-large`](https://huggingface.co/intfloat/multilingual-e5-large) mit einem definierten Test-Datenbestand.

### Qualität der Empfehlungen

Das Gesamtsystem inklusive der Qualität der Empfehlungen wurde in einer Studie mit den Mitarbeiter\*innen der Münchner Stadtbibliothek sowie interessierten Kunden evaluiert.
Die Rückmeldungen wurden in Kooperation mit dem Statistischen Amt der Landeshauptstadt München ausgewertet.
Das System erhielt über 85 Prozent positive Bewertungen.

## Risiken und Limitierungen

Obwohl die Medienempfehlung viele Vorteile bietet, gibt es auch einige Risiken und Limitierungen des Systems:

- **Vollständigkeit der Daten**: Medien ohne Beschreibungstext werden gar nicht berücksichtigt. Dazu zählen aktuell zum Teil auch Sachbücher, deren Beschreibung nur als PDF-Datei vorliegt.
- **Vollständigkeit der Empfehlungen**: Medien ohne Coverbild werden nicht von anderen Medien aus empfohlen, enthalten aber selbst Empfehlungen.
- **Aktualität der Daten**: Die Daten werden nur alle zwei Wochen aktualisiert, sodass sehr neue Medien und kurzfristige Änderungen nicht enthalten sind.

---

[<v-icon>mdi-arrow-left</v-icon> Zurück zur Übersicht](/ki-systeme/index.md)
