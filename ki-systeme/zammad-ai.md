---
system_type: KI-System
title: Zammad-AI
logo: /img/logo/zammad.svg
code: https://github.com/it-at-m/zammad-ai
docs: https://it-at-m.github.io/zammad-ai
license: MIT
display_rank: 15
tags:
  - GenAI
  - Zammad
  - RAG
  - Automatisierung
  - Open Source
description: Eine GenAI-Integrationsschicht für Zammad mit Ticket-Triage, Antwortgenerierung und wissensbasierten Antworten.
---

[<v-icon>mdi-arrow-left</v-icon> Zurück zur Übersicht](/ki-systeme/index.md)

# Zammad-AI

Eine GenAI-Integrationsschicht für Zammad mit Ticket-Triage, Antwortgenerierung und wissensbasierten Antworten.

---

Zammad-AI erweitert das Ticketsystem Zammad um eine eigenständige GenAI-Integrationsschicht. Ziel ist es, Helpdesk-Teams bei der Bearbeitung von Anfragen zu unterstützen: Tickets werden schneller verstanden, sinnvoll vorsortiert und mit passenden Antwortvorschlägen versehen. Dabei bleibt die Verantwortung für Inhalte und Entscheidungen immer bei den Mitarbeitenden. Weiterführende Informationen zur Lösung selbst finden sich in der [Zammad-AI-Dokumentation](https://it-at-m.github.io/zammad-ai).

## Einführung und Kontext

Zammad-AI ist eine bewusst getrennt betreibbare Middleware für GenAI-Workflows rund um Zammad. Im Unterschied zu den in Zammad integrierten KI-Funktionen verfolgt das Projekt nicht primär das Ziel einer generischen Produktfunktion, sondern einer kontrollierbaren, projektbezogenen Orchestrierungsschicht. Dadurch können GenAI-Funktionen unabhängig von Zammad-Releasezyklen entwickelt, betrieben und erweitert werden.

Das Projekt ist bewusst nicht Teil des Zammad-Kerns, sondern eine getrennt betreibbare Komponente. Zammad-AI besteht aus drei Python-Diensten:

- Die Zammad-AI Workflow-Engine als FastAPI- und FastStream-basierter Backend-Dienst für Ticket-Triage, Antwortgenerierung, Kafka-Verarbeitung und ein optional eingebettetes Gradio-Frontend,
- Die Index-Pipeline für die Synchronisation von Wissensdaten aus der Zammad-Knowledge-Base nach Qdrant,
- Der Guardrailservice für Sicherheits- und Inhaltsprüfungen von Prompts und Antworten.

Die Integration erfolgt über klar definierte Schnittstellen, sodass Zammad selbst möglichst unverändert bleibt und Prompts, Retrieval, Automationsregeln und Integrationen unabhängig weiterentwickelt werden können.

## Datengrundlage

Zammad-AI verarbeitet mehrere Arten von Daten, die je nach Einsatzkonfiguration zusammenwirken:

- **Tickets und Ticketartikel aus Zammad**: Für Triage und Antwortgenerierung werden Ticketinhalte und zugehörige Artikel aus Zammad abgerufen. Hierbei werden nur die für die Bearbeitung relevanten Inhalte genutzt.
- **Wissensinhalte aus der Zammad-Knowledge-Base**: Der Indexer synchronisiert Wissensdaten aus Zammad in eine Qdrant-Vektordatenbank, damit sie für Retrieval und Antwortentwürfe genutzt werden können.
- **Dienstleistungsfinder**: Die Beschreibungen städtischer Dienstleistungen aus dem [Dienstleistungsfinder](/ki-systeme/dlf) können als zusätzliche Wissensquelle für Retrieval und Antwortentwürfe eingebunden werden. Der zugrunde liegende [Datensatz Münchner Verwaltungs-Dienstleistungen](/datensaetze/munich-public-services.md) enthält die aufbereiteten Dienstleistungsartikel und Metadaten.
- **Konfigurations- und Regeldaten**: Kategorien, Aktionen, Prompt-Quellen, Routing-Regeln und Fallback-Verhalten werden in der Konfiguration definiert.
- **Optionale zusätzliche Wissensquellen**: Rechts- oder Fachquellen können in denselben Retrieval-Bestand eingebunden werden.

Die konkrete Datengrundlage hängt vom jeweiligen UseCase und Deployment ab.

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

![Zammad-AI Workflow](/public/img/zammad-ai/zammad-ai-workflow.png)

Die Grafik zeigt zwei Abläufe: Im ersten erstellt Zammad-AI aus einer Bürgeranfrage immer einen Antwortvorschlag für die Sachbearbeiter\*innen. Im zweiten erstellt Zammad-AI bei bestimmten Kategorien eine automatisierte Antwort für die Einzelfällen erstellt das System weiterhin Antwortvorschläge oder übergibt die Tickets an die Sachbearbeiter\*innen.

## Funktionen im Überblick

Zammad-AI bringt insbesondere folgende Fähigkeiten mit:

- **KI-gestützte Ticketverarbeitung**: Inhalte von Tickets werden analysiert, Schwerpunkte erkannt und Hinweise für Priorität und Kategorie abgeleitet.
- **Antwortvorschläge**: Für typische Anfragen können textliche Vorschläge erstellt werden, die das Helpdesk-Team weiterverarbeitet.
- **Ereignisgesteuerte Verarbeitung**: Ticket-Ereignisse können über Kafka verarbeitet werden, was auch asynchrone oder größere Support-Workflows unterstützt.
- **Wissensgestützte Antworten**: Wissensinhalte aus Zammad können indexiert und über Qdrant für Retrieval und kontextbezogene Antworten genutzt werden.
- **Guardrails und Nachvollziehbarkeit**: Sicherheitsprüfungen für Prompts und Antworten sowie Tracing und Prompt-Management über Langfuse sind Teil des Architekturansatzes.
- **Veröffentlichte API**: Der Workflow-Dienst stellt Endpunkte für Health-Checks, Prompt-Versionen, Triage und Antwortgenerierung bereit.
- **Konfigurierbare und code-nahe Erweiterbarkeit**: Projektteams können eigene Prompts, Adapter, Regeln und Verarbeitungspipelines für organisationsspezifische Abläufe umsetzen.

## Funktionsweise

Zammad-AI unterstützt sowohl REST-basierte Aufrufe als auch ereignisgesteuerte Verarbeitung über Kafka. Der fachliche Ablauf ist in beiden Fällen ähnlich:

1. Ein neues Ticket oder ein Tickettext wird aus Zammad oder über die API an den Workflow-Dienst übergeben.
2. Optional wird der Text vorverarbeitet, bevor ein Sprachmodell für die Triage aufgerufen wird. Um irrelevante Teile des Tickets zu entfernen und den Kontext klein zu halten.
3. Die Triage klassifiziert den Inhalt, ordnet ihn einer Kategorie zu und bestimmt anhand konfigurierbarer Regeln die nächste Aktion.
4. Bei niedriger Sicherheit oder keiner passenden Kategorie kann das System den Fall gezielt an menschliche Bearbeitung zurückgeben (Keine Aktion).
5. Für beantwortbare Anfragen erzeugt der Antwortdienst einen Entwurf. Dabei können Wissensdokumente aus Qdrant, Prompt-Vorlagen und zusätzliche Werkzeuge in die Antworterstellung einfließen.
6. Vor der Ausgabe können Prompts und Antworten durch Guardrails auf Sicherheits- und Inhaltsaspekte geprüft werden.
7. Das Ergebnis wird entweder als Entwurf in Zammad gespeichert, als Antwort zurückgegeben oder bei geeigneten Kategorien automatisiert weiterverarbeitet.

Die Architektur unterstützt dabei zwei grundsätzliche Betriebsweisen:

- **Teilautomatisiert**: Die KI erzeugt einen Antwortentwurf, der von Mitarbeitenden geprüft und freigegeben wird.
- **Vollautomatisiert für geeignete Kategorien**: Für klar abgegrenzte, risikoarme Fälle kann eine Antwort direkt erzeugt und weitergegeben werden.

Wenn die Triage keine ausreichend sichere Einordnung trifft, wird das Ticket an menschliche Bearbeitung übergeben.

## Einbindung in Zammad

Zammad-AI ist bewusst als separate Komponente neben Zammad umgesetzt. Das hat mehrere Vorteile:

- Zammad bleibt das führende System für Ticketbearbeitung und Benutzeroberfläche.
- GenAI-Funktionen können unabhängig von Zammad-Releasezyklen weiterentwickelt werden.
- Organisationen können eigene Regeln für Ticket-Triage, Routing, Antwortgenerierung und Wissensabruf umsetzen.
- Zammad-AI kann eigenständig betrieben, skaliert, überwacht und weiterentwickelt werden.

Technisch unterstützt das Projekt sowohl REST-basierte Anbindungen an Zammad als auch EAI-basierte Integrationen. Der Workflow-Dienst kann zusätzlich per API angesprochen werden. Für Mitarbeitende zeigt sich die Integration vor allem darin, dass in Zammad zusätzliche Vorschläge zur Ticketverarbeitung und Antwortformulierung zur Verfügung stehen. Diese Vorschläge sind klar als KI-Unterstützung erkennbar und müssen vor der Nutzung geprüft werden.

Die Integrationsschicht stellt dafür gemeinsame Zammad-Clients bereit, mit denen Tickets gelesen sowie Antworten, interne Notizen oder geteilte Entwürfe zurück nach Zammad geschrieben werden können.

## KI-Modelle und Modellkonfiguration

Zammad-AI ist modellagnostisch aufgebaut und kann grundsätzlich deployment-spezifisch konfiguriert werden. Im derzeitigen Einsatz kommen folgende Modelle zum Einsatz:

- Für **Triage** und **Antwortgenerierung** wird das Sprachmodell **`gpt-oss-120b`** verwendet.
- Für **Retrieval** und die Wissensindexierung wird das Embedding-Modell **`qwen3-embedding-4b`** genutzt, dessen Vektordimension zur Qdrant-Konfiguration passen muss.
- Für **Guardrails** kann ein separates Modell für Sicherheits- und Inhaltsprüfungen angesprochen werden. Derzeit wird hier [`GLiNER2-Guardrails-PII-Multi`](https://huggingface.co/fastino/GLiNER2-Guardrails-PII-Multi) genutzt, das auf die Erkennung von personenbezogenen Daten und sensiblen Inhalten trainiert ist.

Die Sprach- und Embeddingmodelle werden in unserem Fall über [Privatemode AI](https://www.privatemode.ai/de) bezogen. Privatemode AI bietet eine datenschutzkonforme Bereitstellung von LLMs, die auf Open Source-Modellen basiert, welche uns eine Verarbeitung von sensiblen Daten ermöglicht. Die Modelle können je nach Bedarf ausgetauscht oder angepasst werden, solange sie die erforderlichen Schnittstellen und Leistungsanforderungen erfüllen.

## Technische Architektur

Zammad-AI folgt einer modularen Service-Architektur:

- **Workflow-Service**: FastAPI- und FastStream-basierter Dienst für API, Triage, Antwortgenerierung und Kafka-Verarbeitung
- **Index-Job**: Synchronisiert Wissensinhalte aus Zammad, dem Dienstleistungsfinder und Gesetzen aus dem Internet in die Qdrant
- **Guardrails-Service**: Prüft Prompts, Antworten und Queries auf Sicherheits- und Inhaltsaspekte
- **Qdrant**: Vektordatenbank für Retrieval aus Wissensbeständen
- **Kafka**: Ereignisgesteuerte Verarbeitung von Ticketflüssen und asynchronen Workflows
- **Langfuse**: Tracing und Prompt-Management
- **Prometheus**: Metriken für Betrieb und Monitoring
- **Optionales Gradio-Frontend**: Für lokale oder eingebettete Arbeitsabläufe

Die öffentliche API des Workflow-Dienstes stellt insbesondere Endpunkte für `health`, `prompt_versions`, `triage` und `answer` bereit. Optional kann die API per Bearer-Token abgesichert werden.

![Zammad-AI Architekturdiagramm](/public/img/zammad-ai/zammad-ai-architecture.png)

## Erweiterbarkeit und Projektkontext

Zammad bietet seit [Version 7 eigene KI-Funktionen](https://zammad.com/de/produkt/kuenstliche-intelligenz), die in der [Zammad-Dokumentation zu AI Features](https://user-docs.zammad.org/en/pre-release/extras/ai-features.html) beschrieben sind.
Zammad-AI verfolgt dazu einen ergänzenden Ansatz: Es dient als kontrollierbare Integrations- und Orchestrierungsschicht für GenAI-Workflows rund um Zammad.

Während die eingebauten Zammad-AI-Funktionen eher generische Produktunterstützung bieten, ist Zammad-AI als code-first Middleware für projektspezifische Geschäftslogik, externe Integrationen und eigene Verarbeitungspipelines gedacht.

Damit können z.B. projekt- oder organisationsspezifische:

- Triage-Logiken,
- Automationsregeln,
- Wissensabruf-Pfade,
- Prompt- und Antwortprüfungen,
- Monitoring- und Compliance-Vorgaben

umgesetzt werden, ohne Zammad selbst verändern zu müssen. Zammad-AI kann außerdem an weitere Systeme angebunden werden, die rund um das Helpdesk angesiedelt sind.

## Qualitätssicherung und Betrieb

Die öffentlich dokumentierte Qualitätssicherung konzentriert sich auf technische und betriebliche Absicherung:

- automatisierte Tests für Workflow- und Index-Komponenten,
- Linting und Formatierung mit Ruff,
- Typprüfung,
- Guardrails für Prompt- und Antwortprüfungen,
- Tracing mit Langfuse,
- Monitoring über Prometheus und Grafana.

## Evaluierung

Die fachliche Evaluierung erfolgt über einen Goldstandard-Datensatz.

- Rund **92 %** der eingehenden Anliegen werden als **bearbeitbar** klassifiziert.
- Rund **88 %** der bearbeiteten Anliegen erhalten ein **Scoring von 4 oder besser** auf einer Skala von **1 bis 5**, wobei **5** den besten Wert darstellt.

Damit zeigt die Auswertung, dass ein großer Teil der eingehenden Anfragen automatisiert als bearbeitbar erkannt wird und die erzeugten Bearbeitungsergebnisse überwiegend gut bis sehr gut bewertet werden.

## Risiken und Limitierungen

Wie andere KI-Systeme hat auch Zammad-AI Grenzen, die beachtet werden müssen:

- **Fehlerhafte oder unvollständige Antworten**: KI-Vorschläge können falsch oder missverständlich sein. Jede Antwort muss fachlich geprüft werden.
- **Bias und Trainingsdaten**: Die zugrunde liegenden Modelle können Vorurteile aus ihren Trainingsdaten enthalten. Vorschläge sind kritisch zu bewerten.
- **Sprachliche und inhaltliche Beschränkungen**: Die Qualität hängt von Formulierung, Sprache und Kontext ab; komplexe Fälle erfordern weiterhin sorgfältige menschliche Bearbeitung.
- **Datenschutz und Verantwortlichkeit**: Personenbezogene Daten dürfen nur im Rahmen der geltenden Vorgaben verarbeitet werden. Rechtlich oder sachlich wirksame Entscheidungen müssen weiterhin von Menschen getroffen werden.
- **Abhängigkeit von Integrationen und Wissensbasis**: Die Qualität von Retrieval und Antwortvorschlägen hängt auch von der Pflege der Wissensbasis, der Indexierung und den angebundenen Systemen ab.
- **Automatisierungsrisiken**: Vollautomatisierte Antworten sind nur für klar abgegrenzte und ausreichend sichere Kategorien geeignet. Bei unklarer Triage oder sensiblen Fällen ist menschliche Prüfung erforderlich.
- **Betriebsabhängigkeit von externer Infrastruktur**: Die Lösung ist auf funktionierende Integrationen zu Zammad, Qdrant, Kafka sowie optional Guardrails- und Observability-Dienste angewiesen.

Zammad-AI ist als Unterstützungssystem konzipiert. Es ersetzt keine fachliche Prüfung durch Mitarbeitende.

---

[<v-icon>mdi-arrow-left</v-icon> Zurück zur Übersicht](/ki-systeme/index.md)
