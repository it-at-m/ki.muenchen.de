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

# RIS KI-Suche (BETA)

Die KI-Suche im [Raatsinformationssystem](https://risi.muenchen.de/risi/aktuelles;jsessionid=6F88999DED0AB379E2C780069F7BF440?0) (RIS) hilft dabei, relevante Beschlüsse und Dokumente zu finden. Diese KI-basierte Suche ergänzt die bestehende Schlagwortsuche im RIS, indem sie den Inhalt der Suchanfragen und Dokumente versteht und passende Ergebnisse liefert. Die aktuell verfügbare BETA-Version, hilft vor allem dabei inhaltlich passende Informationen zu finden. Quantiative Auswertungen werden im aktuellen System noch nicht abgebildet. Mehr dazu im Abschnitt [Risiken und Limitierungen](#risiken-und-limitierungen)

---

Diese Dokumentation beschreibt die Funktionsweise, Datengrundlage und aktuelle Einschränkungen der KI-Suche im RIS.
Das System nutzt ein Embedding-Modell und ein großes Sprachmodell, um relevante Dokumente zu finden und präzise Antworten auf Nutzeranfragen zu generieren.
Außerdem wird ein Optical Character Recognition (OCR) Modell genutzt, um Informationen aus den Dokumenten zu extrahieren.

**TODO Screenshot einfügen**

## Einführung und Kontext

Die KI-Suche im Raatsinformationssystem wurde entwickelt, damit Bürger\*innen und Mitarbeitenden der Stadt München natürlicher an Informationen zur Arbeit der Verwaltung, des Stadtrates und der Bezirksausschüsse der Landeshauptstadt München gelangen.
Durch die Integration von KI-Technologien werden inhaltlich passende Informationen gefunden.

## Datengrundlage

In der aktuellen BETA-Version stehen folgende Dokumente der KI als Daten aus der **Wahlperiode März 2020 bis März 2026** zur Verfügung:

- Stadtratsanträge
- Beschlussvorlagen
- Beschlüsse

Aktuell noch **nicht** enthalten sind Informationen und Dokumente zu:

- Referent\*innen
- Stadtratssitzungen und Ausschusssitzungen
- Protokolle
- Stadtratsmitglieder
- Fraktionen
- Informationen über die Legislaturperiode
- Informationen über die Tagesordnungspunkte
- Zugehörigkeiten von Stadratsmitglieder zu Fraktionen und Auschüssen
- Weitere Gremien 


**TODO, hier etwas zu den Dokumenten die verwendet werden, Zeitraum etc..**

### Beispiele für Vorgänge im RIS

#### [Vorgang 1](Bitte Link einfügen)

Beschreibung Vorgang 1

**ZS: Würde Beispiele für Vorgänge rauslassen**

Weitere Beispiele..

### TODO Parsing mit Dokumentenpipeline und MIstral AI?

Entweder hier, oder in Funktionsweise @ZS -> Lieber in der Funktionsweise 

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

**TODO Link austauschen und ist "gpt-4.1"**
[Mehr Informationen zum Modell](https://openai.com/index/gpt-4o-mini-advancing-cost-efficient-intelligence/)

**TODO Mistral Document ai**

## Risiken und Limitationen 

Obwohl die KI-Suche viele Vorteile bietet, gibt es auch einige Risiken und Limitierungen. Diese teilen sich im folgenden auf **Allgemeine Risiken und Limtiergen beim Einsatz von KI** und **spezifische Einschränkungen der RIS KI-Suche BETA Version** auf. 

### Allgemeine Risiken und Limitationen beim Einsatz von KI 
- **Bias in den Daten**: KI-Modelle können Vorurteile aus den Trainingsdaten übernehmen.
- **Sprachliche Beschränkungen**: Die Qualität der Antworten kann je nach Sprache und Formulierung der Anfrage variieren.
- **Datenschutz**: Es dürfen keine personenbezogenen Daten eingegeben werden.

### Spezifische Limitationen der RIS KI-Suche (BETA) 

Folgende Arten von Anfragen werden aktuell **keine**, oder **keine guten** Ergbnisse liefern. Die Gründe für die Limitationen sind die Datengrundlage, die aktuelle technische Architektur und bewusst gewählte moderative Restriktionen.   

Quantiative Fragen und Auswertungen  
- Zeitliche Entwicklungen & Verläufe (Wie viele Anträge gab es 2025 zum Thema Digitalisierung?)
- Deskriptive Statistik & Mengenabfragen (Welche Partei hat die meisten Anträge zu einem Thema gestellt?)
- Akteurs- & Parteienanalyse (Wie teilen sich die Anträge zur Digitalisierung 2025 auf die Fraktionen auf?)
- Prozess- & Verfahrensanalyse (Gibt es Unterschiede in der Behandlungsdauer je nach Gremium?)
- Zurodnungen (Welche Stadtratsmitglieder gehören zu welcher Partei oder Fraktion?)
- Bewertungen (Welche Fraktion macht die beste Arbeit?)


---

## Weitere Entwicklung

Wir haben die RIS KI-Suche bewusst in einer frühen BETA Version veröffentlicht und arbeiten aktiv an einer Weiterentwicklung des Systems. Insbesondere was die aktuellen Limitationen angeht. Daher sind wir sehr interessiert an Feedback und Rückmeldungen zur aktuellen BETA-Version. Stellt die KI-Suche eine Verbesserung gegenüber der aktuellen Suche im RIS dar? Wofür nutzen Sie die KI-Suche? Welche Erfahrungen haben Sie gemacht?  

Schreiben Sie uns gerne eine Nachricht an **TODO KONTAKTADRESSE FESTLEGEN**


[<v-icon>mdi-arrow-left</v-icon> Zurück zur Übersicht](/ki-systeme/index.md)
