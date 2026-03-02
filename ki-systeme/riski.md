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

# RIS KI-Suche (Beta-Version)

Die KI-Suche im [Ratsinformationssystem](https://risi.muenchen.de/) (RIS) hilft dabei, relevante Beschlüsse und Dokumente zu finden. Diese KI-basierte Suche ergänzt die bestehende Schlagwortsuche im RIS, indem sie den Inhalt der Suchanfragen und Dokumente versteht und passende Ergebnisse liefert. Die aktuell verfügbare Beta-Version, hilft vor allem dabei inhaltlich passende Informationen zu finden. Quantiative Auswertungen werden im aktuellen System noch nicht abgebildet. Mehr dazu im Abschnitt [Risiken und Limitierungen](#risiken-und-limitierungen)

![Screenshot von riski.muenchen.de](/img/riski/riski_screenshot.png)

## Einführung und Kontext

Die KI-Suche im Raatsinformationssystem wurde entwickelt, damit Bürger\*innen und Mitarbeitenden der Stadt München natürlicher an Informationen zur Arbeit der Verwaltung, des Stadtrates und der Bezirksausschüsse der Landeshauptstadt München gelangen. Der Auftrag zur Umsetzung dieser Funktionalität wurde im Stadtratsbeschluss „[V 14682 KI-Roadmap (S.6, I. 2. 3.)](https://risi.muenchen.de/risi/sitzungsvorlage/detail/8656056)“ festgelegt.

## Datengrundlage

In der aktuellen Beta-Version stehen unter anderem folgende Dokumente der KI als Daten aus der **Wahlperiode März 2020 bis März 2026** zur Verfügung:

- Stadtratsanträge
- Beschlussvorlagen
- Beschlüsse

Dafür werden bei der Datensammlung für alle Stadtratssitzungen, -anträge und -sitzungsvorlagen aus dem Zielzeitraum alle zugehörigen Dokumente zusammengetragen und mithilfe von OCR (Optical Character Recognition) und [Mistral Document AI](#mistral-document-ai) die Texte daraus extrahiert. Diese jetzt vorhandenen Texte werden für die Weiterverwendung für die KI optimiert.

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

## Funktionsweise

Die KI-Suche im RIS ist ein agentenbasiertes System, das in mehreren Schritten relevante Beschlüsse und Dokumente im RIS findet.

### Übersicht über den RIS-Agenten

Das folgende Diagramm gibt einen Überblick über das Verhalten des Agenten:

![Darstellung der Funktionsweise von RAG](/img/riski/riski_agent.png){.light-only}
![Darstellung der Funktionsweise von RAG](/img/riski/riski_agent_dark.png){.dark-only}

Ein roter Punkt kennzeichnet dabei Aktionen, die mithilfe von KI-Modellen durchgeführt werden. Dabei passiert folgendes:

1. Der User stellt eine **Anfrage**
2. **Werkzeugauswahl**: Das [Große Sprachmodell](#großes-sprachmodell-llm) entscheidet, ob eines der Werkzeuge (in gelb) die Frage beantworten kann. Sonst wird mit Schritt 6 fortgefahren.
3. **Informationsbeschaffung**: Falls eine Frage zu den Fähigkeiten des Systems gestellt wird, wird eine Information dazu ausgegeben. Ansonsten wird die Suchanfrage an das RAG-Werkzeug weitergegeben. Dabei wird unter Umständen die ursprüngliche Frage umformuliert.
   - Das RAG-Werkzeug sucht in der Datengrundlage mithilfe einer semantischen Suche die 10 relevantesten Dokumente.
   - Zu diesen werden alle zugehörigen Anträge gesucht.
   - Das Ergebnis wird an den Agenten zurückgegeben.

4. **Überprüfung der Information**: Die gefundenen Dokumente werden nochmal einzeln mithilfe des LLMs auf Relevanz überprüft. Dafür wird jeweils eine kurze Begründung erzeugt. Falls keine relevanten Dokumente übrig bleiben, wird mit Schritt 6 fortgefahren.

5. **Antwortgenerierung**: Die ursprüngliche Frage wird auf Basís der nun als relevant ermittelten Dokumente vom Sprachmodell beantwortet. Die gefundenen Dokumente und Anträge werden seperat angezeigt.

6. Mithilfe des LLMs werden **alternative Suchvorschläge** generiert, unter Berücksichtigung der Datengrundlage und Limitierungen des Systems.

## Verwendete KI-Modelle

Die im Folgenden verwendeten KI-Modelle sind modular und austauschbar.

### Embedding-Modell

Embeddings/Texteinbettungen messen die Verwandtschaft von Textstrings.
In dieser Anwendung werden sie genutzt, um relevante Dokumente zu einer Suchanfrage zu finden. Dafür werden die Texte der Dokumente in Embedding-Vektoren umgewandelt.
Das System nutzt dafür das Embedding-Modell "text-embeddings-3-large" von OpenAI.
[Mehr Informationen zum Modell](https://platform.openai.com/docs/guides/embeddings/embedding-models)

### Großes Sprachmodell (LLM)

Das große Sprachmodell "gpt-4.1" von OpenAI wird zur Generierung der Nutzerantworten genutzt.
[Mehr Informationen zum Modell](https://openai.com/index/gpt-4-1/)

### Mistral Document AI

Das Modell "mistral-document-ai" ist eine von Mistral AI entwickelte, multimodale Plattform und API für die automatisierte Dokumentenverarbeitung, um unstrukturierte Dokumente (PDFs, Bilder, Scans) in strukturierte Daten umzuwandeln.
[Mehr Informationen zum Modell](https://mistral.ai/solutions/document-ai)

## Risiken und Limitierungen

Obwohl die KI-Suche viele Vorteile bietet, gibt es auch einige Risiken und Limitierungen. Diese teilen sich im Folgenden auf **allgemeine Risiken und Limitierungen beim Einsatz von KI** und **spezifische Einschränkungen der RIS KI-Suche (Beta-Version)** auf.

### Allgemeine Risiken und Limitierungen beim Einsatz von KI

- **Bias in den Daten**: KI-Modelle können Vorurteile aus den Trainingsdaten übernehmen.
- **Sprachliche Beschränkungen**: Die Qualität der Antworten kann je nach Sprache und Formulierung der Anfrage variieren.
- **Datenschutz**: Es dürfen keine personenbezogenen Daten eingegeben werden.

### Spezifische Einschränkungen der RIS KI-Suche (Beta-Version)

Folgende Arten von Anfragen werden aktuell **keine** oder **keine guten** Ergbnisse liefern. Die Gründe für die Limitationen sind die Datengrundlage, die aktuelle technische Architektur und bewusst gewählte moderative Restriktionen.

Dies umfasst folgende Themen (nicht abschließend):

- **Zeitliche Entwicklungen & Verläufe** ("Wie viele Anträge gab es 2025 zum Thema Digitalisierung?")
- **Deskriptive Statistik & Mengenabfragen** ("Welche Partei hat die meisten Anträge zu einem Thema gestellt?")
- **Akteurs- & Parteienanalyse** ("Wie teilen sich die Anträge zur Digitalisierung 2025 auf die Fraktionen auf?")
- **Prozess- & Verfahrensanalyse** ("Gibt es Unterschiede in der Behandlungsdauer je nach Gremium?")
- **Zurodnungen** ("Welche Stadtratsmitglieder gehören zu welcher Partei oder Fraktion?")
- **Bewertungen** ("Welche Fraktion macht die beste Arbeit?")

## Verwendete Softwarestandards

- [AG-UI](https://docs.ag-ui.com/introduction) Frontend Kommunikation
- Datenschema nach [OPARL](https://oparl.org/spezifikation/online-ansicht/#schema)

## Weitere Entwicklung

Wir haben die RIS KI-Suche bewusst in einer frühen Beta Version veröffentlicht und arbeiten aktiv an einer Weiterentwicklung des Systems. Insbesondere was die aktuellen Limitationen angeht. Daher sind wir sehr interessiert an Feedback und Rückmeldungen zur aktuellen Beta-Version. Stellt die KI-Suche eine Verbesserung gegenüber der aktuellen Suche im RIS dar? Wofür nutzen Sie die KI-Suche? Welche Erfahrungen haben Sie gemacht?

Schreiben Sie uns gerne eine Nachricht an ki@muenchen.de

[<v-icon>mdi-arrow-left</v-icon> Zurück zur Übersicht](/ki-systeme/index.md)
