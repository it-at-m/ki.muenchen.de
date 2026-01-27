---
system_type: KI-System
title: Bürger*innen-Chatbot Muckl
linkapplication: https://stadt.muenchen.de/
logo: /img/logo/muckl_logo.png
tags:
  - LLM
  - Embeddings
  - Bürgerservice
  - öffentlich
description: Der Bürger*innen-Chatbot Muckl beantwortet Fragen zu städtischen Dienstleistungen direkt und verständlich im Dialog.
---

[<v-icon>mdi-arrow-left</v-icon> Zurück zur Übersicht](/ki-systeme/index.md)

# Bürger\*innen-Chatbot Muckl

Der Bürger\*innen-Chatbot Muckl beantwortet Fragen zu städtischen Dienstleistungen direkt und verständlich im Dialog.
Anstatt selbst in Dokumenten suchen zu müssen, erhalten Nutzer\*innen sofort die passende Auskunft.
Außerdem sind direkte Nachfragen möglich, um Unklarheiten zu beseitigen und weiterführende Informationen zu erhalten.

---

Diese Dokumentation beschreibt die Funktionsweise, Datengrundlage und Risiken des Bürger\*innen-Chatbot Muckl auf stadt.muenchen.de.
Der Chatbot hilft Bürger\*innen, Informationen zu städtischen Themen effizient zu finden.

## Einführung und Kontext

Der Bürger\*innen-Chatbot Muckl ist ein Kommunikations-Bot, der vollautomatisiert Fragen von Bürger\*innen im Dialog beantwortet. Auf Basis von Textanalyse und maschinellem Lernen ergänzt er FAQ-Seiten und Kontaktformulare.

Ziel ist der Einsatz eines „single-channel FAQ-Chatbots“ im Bereich des Bürgerservices. Der Chatbot soll so die Hotlines der Stadtverwaltung entlasten und schnelle Antworten für die Fragen der Münchner*innen liefern. Durch die automatisierte Beantwortung von Standardfragen kann der Chatbot die Mitarbeiter*innen in den Referaten und Eigenbetrieben von wiederkehrenden Anfragen entlasten und so die Effizienz steigern. Als Kommunikationskanal sorgt der Chatbot für durchgehende Erreichbarkeit und arbeitet Anfragen der Bürger\*innen in Echtzeit und automatisiert ab.

Der Chatbot ist eine fiktive Persönlichkeit und zeichnet sich durch seine Freundlichkeit und Hilfsbereitschaft aus. Er kommuniziert wie die Zielgruppen: einfach, locker und partnerschaftlich. Dabei verwendet er die direkte und persönliche Ansprache.

### Entwicklung

Bereits im April 2023 ging der städtische Chatbot „Muckl“ erstmalig für die Bürger\*innen der Landeshauptstadt München an den Start. Damals konnte er ausschließlich Themen zur anstehenden Landtagswahl beantworten, dennoch tat er dies sehr erfolgreich. In den Wochen und Monaten darauf ergänzte sich sein Wissen um diverse Themen wie etwa soziales Wohnen, Müll entsorgen oder Themen zu KITA.

Um Muckls Wissenstand auf alle städtischen Verwaltungsthemen zu erweitern, wurde Muckl um eine KI-Komponente ergänzt.
In dieser Form ist der Chatbot seit dem 24. September 2025 auf allen stadt.muenchen.de-Websites unter den Rubriken „Rathaus“ und „Bürgerservice“ umfassend verfügbar.
Er kennt nun die Informationen zu städtischen Dienstleistungen, Angeboten und Veranstaltungen und beantwortet Fragen dazu rund um die Uhr.

![Demo des Chatbots Muckl](/img/muckl/muckl_demo.png)

## Funktionsumfang

- **Beantwortung häufig gestellter Fragen**: Einfache Automatisierung von Standardanfragen.
- **Skalierbarkeit**: Kann mit einer beliebigen Anzahl an Personen zur gleichen Zeit sprechen.
- **Technische Einbindung**: Integration auf öffentlichen Webseiten per Snippet.
- **Design**: Angepasstes Design für entsprechende Einsatzbereiche.
- **Live-Chat Anbindung**: Optionaler Live-Chatbetrieb durch Mitarbeiter\*innen möglich.

## Datengrundlage

Die Datengrundlage des Bürger\*innen-Chatbot Muckl basiert aktuell auf allen stadt.muenchen.de Seiten in Deutsch. Dies sind alle Seiten der Reiter „Rathaus“ (Rathaus – Landeshauptstadt München) und „Bürgerservice“ (Bürgerservice – Landeshauptstadt München).

Um sicherzustellen, dass die Informationen aktuell bleiben, überprüft Muckl alle 24 Stunden die entsprechenden Seiten auf Änderungen und aktualisiert seine Datenbank gegebenenfalls.

**Wichtige Einschränkungen:**

- Muckl bezieht seine Informationen ausschließlich von den offiziellen Websites von stadt.muenchen.de.
- Der Chatbot hat keinen Zugriff auf das gesamte Internet oder externe Links.
- Er kann keine Inhalte aus PDFs lesen.

### Beispiele für verzeichnete Dienstleistungen

#### Personalausweis

Um einen Personalausweis zu beantragen, musst du folgende Schritte beachten:

1. Termin im Bürgerbüro: Du musst einen Termin in einem der sechs Bürgerbüros in München vereinbaren.
2. Persönliches Erscheinen: Du musst persönlich erscheinen, da deine Unterschrift und Fingerabdrücke benötigt werden.
3. Benötigte Unterlagen:
   - Einen anderen Ausweis (z. B. deinen alten Personalausweis oder Reisepass). Wenn du keinen Ausweis hast, bring deine Geburtsurkunde mit.
   - Ein aktuelles biometrisches Passfoto, das den Anforderungen entspricht (gut erkennbar, Gesicht sichtbar, neutraler Hintergrund).
4. Vorläufiger Personalausweis: Wenn du den Ausweis dringend benötigst, kannst du einen vorläufigen Personalausweis beantragen, der sofort ausgestellt wird und drei Monate gültig ist. Dafür benötigst du ebenfalls ein biometrisches Passfoto.
   Für weitere Informationen oder um einen Termin zu vereinbaren, kannst du das Bürgerbüro-Servicetelefon unter 089/233-96000 kontaktieren.

#### Hundesteuer

In München musst du für jeden Hund, den du besitzt, eine Hundesteuer zahlen. Die Kosten betragen jährlich 100 Euro pro Hund. Wenn du zwei Hunde hast, zahlst du also 200 Euro pro Jahr. Für Kampfhunde liegt die Steuer bei 800 Euro jährlich.
Es gibt jedoch Möglichkeiten, von der Hundesteuer befreit zu werden:

- Assistenzhund: Wenn du einen Assistenzhund hast, kannst du einen Antrag auf Befreiung stellen. Dein Hund muss dafür als Assistenzhund anerkannt sein und eine spezielle Ausbildung durchlaufen haben.
- Tierheimhund: Hunde, die aus dem Tierheim München stammen, können für zwei Jahre von der Hundesteuer befreit werden.
- Besondere Aufgaben: Wenn du deinen Hund für berufliche, gewerbliche, öffentliche oder gemeinnützige Zwecke hältst, kannst du ebenfalls eine Befreiung beantragen.
- Finanzielle Notlage: Wenn du von Arbeitslosengeld II, Sozialhilfe oder einem vergleichbar geringen Einkommen lebst, kannst du in bestimmten Fällen einen Erlass der Hundesteuer beantragen.
  Es ist wichtig, deinen Hund innerhalb von zwei Wochen nach der Aufnahme oder dem Umzug nach München zur Hundesteuer anzumelden. Bei Nichtanmeldung können Bußgelder verhängt werden.

#### Was ist der Münchner Stadtrat?

Der Münchner Stadtrat ist das höchste Verwaltungsorgan der Stadt München und besteht aus dem Oberbürgermeister sowie 80 ehrenamtlichen Stadtratsmitgliedern. Diese Mitglieder werden alle sechs Jahre gewählt. Der Stadtrat ist verantwortlich für die Beratung und Verabschiedung von wichtigen Entscheidungen, die die Stadt betreffen, einschließlich des Haushaltsplans, der städtischen Entwicklung und anderer kommunaler Angelegenheiten.
Die Mitglieder des Stadtrats vertreten verschiedene politische Parteien und Wählergruppen und arbeiten an der Gestaltung der kommunalen Politik. Weitere Informationen über die Mitglieder und deren Aufgaben sind im Ratsinformationssystem verfügbar.

#### Was macht die Stadtkämmerei?

Die Stadtkämmerei in München hat eine zentrale Rolle in der Finanzverwaltung der Stadt. Ihre Hauptaufgaben umfassen:

- Finanzhaushalt: Sie erstellt und steuert den Finanzhaushalt, der die Ein- und Auszahlungen der Stadt erfasst. Dazu gehören die Planung von Investitionen und Finanzierungsmaßnahmen.
- Einnahmen: Die Stadtkämmerei sorgt dafür, dass die Stadt Einnahmen generiert, hauptsächlich durch Steuern wie Gewerbesteuer und Einkommensteuer.
- Ausgaben: Sie verwaltet die Ausgaben für die laufende Verwaltung sowie Investitionen in die Infrastruktur, wie Schulen und Verkehrswege.
- Stadtkasse: Alle finanziellen Vorgänge, wie Steuerbescheide und Rechnungen, laufen über die Stadtkasse, die auch für die Liquidität der Stadt sorgt.
- Steuern: Die Abteilung kümmert sich um die Erhebung und Verwaltung von verschiedenen Steuerarten, darunter Grundsteuer und Hundesteuer.
- Beratung und Unterstützung: Die Stadtkämmerei unterstützt den Stadtrat bei der Mittelverteilung und berät andere städtische Abteilungen in Finanzfragen.

## Funktionsweise

Der Bürger\*innen-Chatbot Muckl nutzt ein Embedding-Modell und ein großes Sprachmodell, um relevante Dokumente zu finden und präzise Antworten auf Nutzerfragen zu generieren.
Technische Basis ist das [Ubitec Bot Framework](https://ubitec.at/de/produkte/ubitec-bot-framework/).

Der Chatbot sucht nicht nur auf einer bestimmten Seite, sondern auch auf allen anderen Seiten von stadt.muenchen.de nach Antworten. Dadurch kann es vorkommen, dass die Informationen nicht immer direkt zur jeweiligen Fragestellung passen (z.B. durch veraltete Informationen auf älteren Webseiten).

## Optimierung der Inhalte

Fachbereiche tragen aktiv zur Optimierung der Wissensbasis bei:

1. **Veraltete Informationen entfernen**: Löschen oder Aktualisieren alter Webseiten.
2. **Fehlende Inhalte ergänzen**: Wichtige Inhalte direkt auf der Webseite einbinden oder paraphrasieren (nicht nur als Link/PDF).
3. **PDF-Inhalte vermeiden**: Inhalte aus PDFs direkt auf der Seite einbinden, da der Chatbot keine PDFs lesen kann.

Bei Fragen, Anmerkungen oder Verbesserungsvorschlägen kann das Bewertungstool am Ende jeder Antwort von Muckl genutzt werden ("Daumen nach oben" für positives Feedback, "Daumen nach unten" für Verbesserungswünsche).
So kann das Team hinter Muckl die Antworten kontinuierlich verbessern.

## Rechtliche Hinweise

Informationen zum Datenschutz finden Sie unter: [Datenschutzhinweise für die Nutzung des Chatbots](https://stadt.muenchen.de/infos/datenschutzhinweis-chatbot.html)

Informationen zur Barrierefreiheit finden Sie unter: [Erklärung zur Barrierefreiheit: Chatbot „Muckl“](https://stadt.muenchen.de/infos/barrierefreiheit-erklaerung-chatbot.html)

---

[<v-icon>mdi-arrow-left</v-icon> Zurück zur Übersicht](/ki-systeme/index.md)
