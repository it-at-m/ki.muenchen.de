---
system_type: KI-System
title: RIS-KI
logo: /img/logo/wip.png
external_link: https://github.com/it-at-m/riski
tags:
  - RAG
  - RIS
  - Suche
  - in Arbeit
description: Durchsuche das Ratsinformationssystem (RIS) mit Hilfe von KI. Verbessert die Auffindbarkeit von Stadtratsinformationen durch eine intelligente Suchfunktion.
---

# RIS KI-Suche

## Zusammenfassung der RIS KI Suche 

Die KI-Suche des Ratsinformationssystems (RISKI) soll den Anwender*innen sowohl intern als auch extern ermöglichen, schnell und einfach relevante Informationen zu finden. Diese KI-basierte Suche ergänzt die bestehende Schlagwortsuche im RIS, indem sie den Inhalt der Suchanfragen und Dokumente versteht und passende Ergebnisse liefert. Der Auftrag zur Umsetzung dieser Funktionalität wurde im Stadtratsbeschluss „[V 14682 KI-Roadmap (S.6, I. 2. 3.)]([url](https://risi.muenchen.de/risi/sitzungsvorlage/detail/8656056))“ festgelegt.

Die erste Ausbaustufe der KI-Suche integriert ein allgemeines Sprachmodell (LLM) über einen KI-Proxy, das standardmäßig über Azure konsumiert wird. Dies ermöglicht die Nutzung von Content-Filtern und System Prompts, um kritische Ausgaben wie Diskriminierung zu verhindern. Die Dokumentenbasis umfasst alle Stadtratsanträge, Sitzungsvorlagen und deren beigefügte Dokumente in Form von PDF-Inhalten.

In der kommenden zweiten Ausbaustufe werden weitere Entitäten aus der Datenbank verfügbar gemacht, um die Dokumentenbasis zu erweitern. Das Schaubild gibt eine Übersicht: 



---

## Ratsinformationssystem (RIS) 

Das Ratsinformationssystem (RIS) unter der URL risi.muenchen.de ist eine zentrale Plattform, die alle relevanten Informationen und Dokumente zu den Sitzungen und Anträgen des Stadtrats und den Bezirksauschüssen in München bereitstellt. Es bietet Zugang zu Sitzungsvorlagen, Beschlüssen, Anträgen und weiteren wichtigen Dokumenten, die für die Arbeit der Gremien und die Information der Bürger*innen von Bedeutung sind.

---

## Suche

Die KI-Suche im RIS ermöglicht es den Nutzer*innen, ihre Fragen direkt in das Suchfeld einzugeben. Die KI interpretiert den Inhalt der Anfrage und liefert eine generierte Antwort sowie eine Übersicht relevanter Dokumente und Anträge, die im RIS enthalten sind. 


