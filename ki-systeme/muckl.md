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

Der Bürger\*innen-Chatbot Muckl wurde entwickelt, damit Bürger\*innen und Mitarbeitende der Stadt München effizienter Informationen zu städtischen Themen und Dienstleistungen finden können. Durch die Integration von KI-Technologie wird das Suchen von Inhalten auf muenchen.de und zukünftig auch Münchner Microsites erheblich verbessert, was zu einer schnelleren und präzisen Beantwortung von Anfragen führt.

![Demo des Chatbots Muckl](/img/muckl/muckl_demo.png)

## Datengrundlage

Die Datengrundlage des Bürger\*innen-Chatbot Muckl basiert aktuell auf allen stadt.muenchen.de Seiten in Deutsch. Dies sind alle Seiten der Reiter ,,Rathaus“ (Rathaus – Landeshauptstadt München) und ,,Bürgerservice“ (Bürgerservice – Landeshauptstadt München).

### Beispiele für verzeichnete Dienstleistungen

#### Personalausweis

Um einen Personalausweis zu beantragen, musst du folgende Schritte beachten:

1. Termin im Bürgerbüro: Du musst einen Termin in einem der sechs Bürgerbüros in München vereinbaren.
2. Persönliches Erscheinen: Du musst persönlich erscheinen, da deine Unterschrift und Fingerabdrücke benötigt werden.
3. Benötigte Unterlagen:
   • Einen anderen Ausweis (z. B. deinen alten Personalausweis oder Reisepass). Wenn du keinen Ausweis hast, bring deine Geburtsurkunde mit.
   • Ein aktuelles biometrisches Passfoto, das den Anforderungen entspricht (gut erkennbar, Gesicht sichtbar, neutraler Hintergrund).
4. Vorläufiger Personalausweis: Wenn du den Ausweis dringend benötigst, kannst du einen vorläufigen Personalausweis beantragen, der sofort ausgestellt wird und drei Monate gültig ist. Dafür benötigst du ebenfalls ein biometrisches Passfoto.
   Für weitere Informationen oder um einen Termin zu vereinbaren, kannst du das Bürgerbüro-Servicetelefon unter 089/233-96000 kontaktieren.

#### Hundesteuer

In München musst du für jeden Hund, den du besitzt, eine Hundesteuer zahlen. Die Kosten betragen jährlich 100 Euro pro Hund. Wenn du zwei Hunde hast, zahlst du also 200 Euro pro Jahr. Für Kampfhunde liegt die Steuer bei 800 Euro jährlich.
Es gibt jedoch Möglichkeiten, von der Hundesteuer befreit zu werden:
• Assistenzhund: Wenn du einen Assistenzhund hast, kannst du einen Antrag auf Befreiung stellen. Dein Hund muss dafür als Assistenzhund anerkannt sein und eine spezielle Ausbildung durchlaufen haben.
• Tierheimhund: Hunde, die aus dem Tierheim München stammen, können für zwei Jahre von der Hundesteuer befreit werden.
• Besondere Aufgaben: Wenn du deinen Hund für berufliche, gewerbliche, öffentliche oder gemeinnützige Zwecke hältst, kannst du ebenfalls eine Befreiung beantragen.
• Finanzielle Notlage: Wenn du von Arbeitslosengeld II, Sozialhilfe oder einem vergleichbar geringen Einkommen lebst, kannst du in bestimmten Fällen einen Erlass der Hundesteuer beantragen.
Es ist wichtig, deinen Hund innerhalb von zwei Wochen nach der Aufnahme oder dem Umzug nach München zur Hundesteuer anzumelden. Bei Nichtanmeldung können Bußgelder verhängt werden.

#### Was ist der Münchner Stadtrat?

Der Münchner Stadtrat ist das höchste Verwaltungsorgan der Stadt München und besteht aus dem Oberbürgermeister sowie 80 ehrenamtlichen Stadtratsmitgliedern. Diese Mitglieder werden alle sechs Jahre gewählt. Der Stadtrat ist verantwortlich für die Beratung und Verabschiedung von wichtigen Entscheidungen, die die Stadt betreffen, einschließlich des Haushaltsplans, der städtischen Entwicklung und anderer kommunaler Angelegenheiten.
Die Mitglieder des Stadtrats vertreten verschiedene politische Parteien und Wählergruppen und arbeiten an der Gestaltung der kommunalen Politik. Weitere Informationen über die Mitglieder und deren Aufgaben sind im Ratsinformationssystem verfügbar.

#### Was macht die Stadtkämmerei?

Die Stadtkämmerei in München hat eine zentrale Rolle in der Finanzverwaltung der Stadt. Ihre Hauptaufgaben umfassen:
• Finanzhaushalt: Sie erstellt und steuert den Finanzhaushalt, der die Ein- und Auszahlungen der Stadt erfasst. Dazu gehören die Planung von Investitionen und Finanzierungsmaßnahmen.
• Einnahmen: Die Stadtkämmerei sorgt dafür, dass die Stadt Einnahmen generiert, hauptsächlich durch Steuern wie Gewerbesteuer und Einkommensteuer.
• Ausgaben: Sie verwaltet die Ausgaben für die laufende Verwaltung sowie Investitionen in die Infrastruktur, wie Schulen und Verkehrswege.
• Stadtkasse: Alle finanziellen Vorgänge, wie Steuerbescheide und Rechnungen, laufen über die Stadtkasse, die auch für die Liquidität der Stadt sorgt.
• Steuern: Die Abteilung kümmert sich um die Erhebung und Verwaltung von verschiedenen Steuerarten, darunter Grundsteuer und Hundesteuer.
• Beratung und Unterstützung: Die Stadtkämmerei unterstützt den Stadtrat bei der Mittel

## Funktionsweise

Der Bürger\*innen Chatbot Muckl nutzt ein Embedding-Modell und ein großes Sprachmodell, um relevante Dokumente zu finden und präzise Antworten auf Nutzerfragen zu generieren.

## Rechtliche Hinweise

Informationen zum Datenschutz finden Sie unter: [Datenschutzhinweise für die Nutzung des Chatbots](https://stadt.muenchen.de/infos/datenschutzhinweis-chatbot.html)

Informationen zur Barrierefreiheit finden Sie unter: [Erklärung zur Barrierefreiheit: Chatbot „Muckl“](https://stadt.muenchen.de/infos/barrierefreiheit-erklaerung-chatbot.html)

---

[<v-icon>mdi-arrow-left</v-icon> Zurück zur Übersicht](/ki-systeme/index.md)
