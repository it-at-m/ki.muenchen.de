---
system_type: KI-System
title: Zammad-AI
logo: /img/logo/zammad.svg
code: https://github.com/it-at-m/zammad-ai
docs: https://it-at-m.github.io/zammad-ai
tags:
  - GenAI
  - Zammad
  - Automatisierung
  - in Arbeit
description: Ein mit GenAI betriebener Agent für Zammad. Erweitert den Helpdesk um KI-gestützte Ticketverarbeitung und intelligente Antwortvorschläge.
---

# Zammad-AI

Ein mit GenAI betriebener Agent für Zammad. Erweitert den Helpdesk um KI-gestützte Ticketverarbeitung und intelligente Antwortvorschläge.

---

Zammad-AI erweitert das Ticketsystem Zammad um einen KI-gestützten Agenten. Ziel ist es, Helpdesk-Teams bei der Bearbeitung von Anfragen zu unterstützen: Tickets werden schneller verstanden, sinnvoll vorsortiert und mit passenden Antwortvorschlägen versehen. Dabei bleibt die Verantwortung für Inhalte und Entscheidungen immer bei den Mitarbeitenden. Weiterführende Informationen zur Lösung selbst finden sich in der [Zammad-AI-Dokumentation](https://it-at-m.github.io/zammad-ai).

Zammad-AI ist als eigenständige Komponente konzipiert. Die Integration erfolgt über klar definierte Schnittstellen, sodass Zammad selbst möglichst unverändert bleibt und Zammad-AI unabhängig weiterentwickelt werden kann.

## Welche Probleme Zammad-AI adressiert

Im Alltag eines Helpdesks entstehen mehrere wiederkehrende Herausforderungen:

- Viele Anfragen ähneln sich inhaltlich, müssen aber jeweils individuell beantwortet werden.
- Tickets müssen schnell eingeschätzt, kategorisiert und an die richtigen Zuständigen weitergeleitet werden.
- Inhalte sind oft komplex formuliert oder unvollständig, was die Bearbeitung verzögert.
- Relevante Informationen aus Wissensdatenbanken, FAQ oder Dokumentation müssen für jede Antwort neu gesucht werden.

Zammad-AI unterstützt hier:

- hilft bei der **Vorsortierung und Einschätzung** von Tickets,
- schlägt **Antwortentwürfe** vor, die geprüft und angepasst werden können,
- nutzt angebundene Wissensquellen für **kontextbezogene Antworten**,
- vereinfacht oder strukturiert Text, damit Rückmeldungen leichter verständlich sind.

Ziel ist eine schnellere, konsistentere Bearbeitung von Tickets, nicht die vollständige Automatisierung. Fachliche Bewertung und Freigabe bleiben beim Menschen.

## Funktionen im Überblick

Zammad-AI bringt insbesondere folgende Fähigkeiten mit:

- **KI-gestützte Ticketverarbeitung**: Inhalte von Tickets werden analysiert, Schwerpunkte erkannt und Hinweise für Priorität und Kategorie abgeleitet.
- **Antwortvorschläge**: Für typische Anfragen können textliche Vorschläge erstellt werden, die das Helpdesk-Team weiterverarbeitet.
- **Konfigurierbare Arbeitsweise**: Zammad-AI lässt sich an unterschiedliche Einsatzszenarien, Organisationen und Workflows anpassen.
- **Erweiterbarkeit**: Projektteams können Zammad-AI um eigene Logik und Regeln ergänzen, etwa für spezielle Routing- oder Automationsanforderungen.

## Einbindung in Zammad

Zammad-AI ist bewusst als separate Komponente neben Zammad umgesetzt. Das hat mehrere Vorteile:

- Zammad bleibt das führende System für Ticketbearbeitung und Benutzeroberfläche.
- GenAI-Funktionen können unabhängig von Zammad-Releasezyklen weiterentwickelt werden.
- Organisationen können eigene Regeln für Ticket-Triage, Antwortgenerierung und Wissensabruf umsetzen.

Für Mitarbeitende zeigt sich die Integration vor allem darin, dass in Zammad zusätzliche Vorschläge zur Ticketverarbeitung und Antwortformulierung zur Verfügung stehen. Diese Vorschläge sind klar als KI-Unterstützung erkennbar und müssen vor der Nutzung geprüft werden.

## Erweiterbarkeit und Projektkontext

Zammad bietet seit [Version 7 eigene KI-Funktionen](https://zammad.com/de/produkt/kuenstliche-intelligenz), die in der [Zammad-Dokumentation zu AI Features](https://user-docs.zammad.org/en/pre-release/extras/ai-features.html) beschrieben sind.
Zammad-AI verfolgt dazu einen ergänzenden Ansatz: Es dient als kontrollierbare Integrations- und Orchestrierungsschicht für GenAI-Workflows rund um Zammad.

Damit können z.B. projekt- oder organisationsspezifische:

- Triage-Logiken,
- Automationsregeln,
- Wissensabruf-Pfade

umgesetzt werden, ohne Zammad selbst verändern zu müssen. Zammad-AI kann außerdem an weitere Systeme angebunden werden, die rund um das Helpdesk angesiedelt sind.

## Risiken und Limitierungen

Wie andere KI-Systeme hat auch Zammad-AI Grenzen, die beachtet werden müssen:

- **Fehlerhafte oder unvollständige Antworten**: KI-Vorschläge können falsch oder missverständlich sein. Jede Antwort muss fachlich geprüft werden.
- **Bias und Trainingsdaten**: Die zugrunde liegenden Modelle können Vorurteile aus ihren Trainingsdaten enthalten. Vorschläge sind kritisch zu bewerten.
- **Sprachliche und inhaltliche Beschränkungen**: Die Qualität hängt von Formulierung, Sprache und Kontext ab; komplexe Fälle erfordern weiterhin sorgfältige menschliche Bearbeitung.
- **Datenschutz und Verantwortlichkeit**: Personenbezogene Daten dürfen nur im Rahmen der geltenden Vorgaben verarbeitet werden. Rechtlich oder sachlich wirksame Entscheidungen müssen weiterhin von Menschen getroffen werden.

Zammad-AI ist als Unterstützungssystem konzipiert. Es ersetzt keine fachliche Prüfung durch Mitarbeitende.

---

[<v-icon>mdi-arrow-left</v-icon> Zurück zur Übersicht](/ki-systeme/index.md)
