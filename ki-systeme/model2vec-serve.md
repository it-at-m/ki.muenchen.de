---
system_type: KI-System
title: model2vec-serve
code: https://github.com/it-at-m/model2vec-serve
docs: https://it-at-m.github.io/model2vec-serve/
license: MIT
tags:
  - Embeddings
  - Open Source
  - intern
  - Infrastruktur
description: model2vec-serve ist ein leichtgewichtiger Open-Source-Server für statische Embedding-Modelle. Er stellt Embeddings über OpenAI- und TEI-kompatible Schnittstellen bereit – schnell, auf CPU und ohne GPU.
---

[<v-icon>mdi-arrow-left</v-icon> Zurück zur Übersicht](/ki-systeme/index.md)

# model2vec-serve

model2vec-serve ist ein leichtgewichtiger Open-Source-Server für statische [model2vec](https://github.com/MinishLab/model2vec)-Embedding-Modelle. Er stellt Embeddings über OpenAI- und TEI-kompatible Schnittstellen bereit – schnell, auf CPU und ohne GPU.

---

Viele KI-Anwendungen brauchen Embeddings: Semantische Suche, RAG-Pipelines, Klassifizierung oder Duplikaterkennung vergleichen Texte über Vektoren statt über Schlüsselwörter. Für die Vektorisierung kommt dabei häufig ein Embedding-Modell eines externen Modellanbieters zum Einsatz. model2vec-serve ist eine Eigenentwicklung des KI-Teams, die diesen Schritt in die eigene Infrastruktur holt: ein kleiner, souveräner Embeddings-Server, der optimierte Static-Embedding-Modelle auf CPU betreibt – ohne GPU und ohne komplexe ML-Infrastruktur. Er ist ein Baustein des [KI-Stacks](/ki-systeme/ki-stack.md) der Landeshauptstadt München.

## Einführung und Kontext

model2vec-serve betreibt die [model2vec](https://github.com/MinishLab/model2vec)-Modelle der [minishlab-Organisation auf Hugging Face](https://huggingface.co/minishlab). Static-Embedding-Modelle sind mit 8 bis 64 Millionen Parametern extrem kompakt und arbeiten ohne aufwändige Transformer-Durchläufe: Jeder Token besitzt eine feste Vektorrepräsentation, aus der sich der Textvektor ergibt. Dadurch erzeugen sie Embeddings sehr schnell auf normalen CPUs – ideal für Anwendungen, bei denen Geschwindigkeit, Kosten und Datensouveränität wichtiger sind als die letzte Qualitätsstufe großer Modelle.

## Funktionen

- **OpenAI-kompatible Schnittstelle**: Anfragen im Format `POST /v1/embeddings` (inklusive `GET /v1/models`). Bestehende Anwendungen, die bisher OpenAI-Embeddings aufrufen, wechseln nur die Basis-URL und den Modellnamen – alles andere bleibt unverändert.
- **TEI-kompatible Schnittstelle**: `POST /embed` und `GET /info` wie bei HuggingFaces Text Embedding Inference; pro Modell zusätzlich unter `POST /tei/{modell}/embed` und `GET /tei/{modell}/info`.
- **Mehrere Modelle in einem Prozess**: Verschiedene Modelle – etwa ein multilinguales und ein Code-Modell – laufen parallel in einem Service und lassen sich pro Anfrage auswählen.
- **Betriebsfertig mitgeliefert**: Optionale API-Key-Authentifizierung (Bearer-Token), TLS-Verschlüsselung, Health- und Readiness-Endpunkte, Prometheus-Metriken, strukturierte JSON-Logs mit Korrelations-IDs sowie eine interaktive API-Dokumentation unter `/docs`.

## Modelle

model2vec-serve kann beliebige Static-Embedding-Modelle der minishlab-Organisation bereitstellen. Gute Einstiegspunkte:

| Modell                             | Umfang  | Geeignet für                                           |
| ---------------------------------- | ------- | ------------------------------------------------------ |
| `minishlab/blink-multilingual-64M` | ~256 MB | Standardmodell – über 100 Sprachen                     |
| `minishlab/blink-8M`               | ~31 MB  | Englischsprachige Anwendungen mit minimalem Fußabdruck |
| `minishlab/potion-code-16M-v2`     | ~33 MB  | Quellcode (u. a. Python, Java, JavaScript)             |

Die Modelle lädt der Service beim Start aus dem Hugging Face Hub oder von einem lokalen Pfad – so funktioniert der Betrieb auch in abgeschotteten Netzwerken ohne Internetzugang.

## Technische Architektur

model2vec-serve ist ein kleiner, zustandsloser HTTP-Service in [Rust](https://www.rust-lang.org/) auf Basis des Web-Frameworks [axum](https://github.com/tokio-rs/axum). Die Inferenz nutzt die Crate `model2vec-rs`, die offizielle Inferenz-Implementierung von model2vec. Ausgeliefert wird der Service als Multi-Arch-Containerimage über [GHCR](https://github.com/it-at-m/model2vec-serve/pkgs/container/model2vec-serve) sowie als Helm-Chart für Kubernetes; Modelle lassen sich zusätzlich als Volume einbinden.

## Schnellstart

Der schnellste Einstieg ist der veröffentlichte Container:

```bash
docker run -p 8080:8080 -e MODEL=minishlab/blink-multilingual-64M \
  ghcr.io/it-at-m/model2vec-serve:0.7.0
```

Erste Anfrage im OpenAI-Format:

```bash
curl -X POST http://localhost:8080/v1/embeddings \
  -H "Content-Type: application/json" \
  -d '{"input": "Hallo Welt"}'
```

Für Kubernetes steht ein Helm-Chart bereit:

```bash
helm install model2vec-serve \
  oci://ghcr.io/it-at-m/helm-charts/model2vec-serve \
  --set models[0]=minishlab/blink-multilingual-64M
```

Alle Optionen – von API-Key und TLS über mehrere Modelle bis zum Volume-Mount eigener Modelle – sind in der [Dokumentation](https://it-at-m.github.io/model2vec-serve/) beschrieben.

## Status und Ausblick

model2vec-serve ist in aktiver Entwicklung (aktuelle Version: 0.7.0) und läuft derzeit in einer Entwicklungs- und Testumgebung auf der Containerplattform. Ziel ist eine zentrale, souveräne Embeddings-API für RAG-Pipelines der Stadtverwaltung: schnelle lokale Embeddings ohne Abhängigkeit von externen Modellanbietern – etwa für Klassifizierung, Deduplizierung und semantisches Caching – während für besonders hochwertige Retrieval-Embeddings weiterhin größere Modelle zum Einsatz kommen können.

## Risiken und Limitierungen

- **Qualität vs. Modellgröße**: Statische Embedding-Modelle sind deutlich schneller und kleiner als große neuronale Embedding-Modelle, erreichen deren Qualität bei anspruchsvollen Retrieval-Aufgaben aber nicht immer. Wo höchste Retrieval-Qualität entscheidend ist, können größere Modelle die bessere Wahl sein.
- **Nur Embeddings**: Der Server liefert Vektoren, erzeugt aber keinen Text – er ersetzt keine LLM-Endpunkte.
- **Kontextlänge**: Eingaben sind standardmäßig auf 512 Token begrenzt (konfigurierbar); längere Dokumente müssen vorab aufgeteilt werden.
- **Öffentliche Trainingsdaten**: Die Modelle wurden nicht mit städtischen Daten trainiert; ihre Qualität kann je nach Sprache und Fachlichkeit variieren.

## Kontakt und Mitwirkung

model2vec-serve wird offen auf [GitHub](https://github.com/it-at-m/model2vec-serve) entwickelt (MIT-Lizenz). Fehlermeldungen, Ideen und Pull Requests sind willkommen. Fragen zum KI-Team und seinen Systemen beantworten wir gerne per Mail an [ki@muenchen.de](mailto:ki@muenchen.de).

---

[<v-icon>mdi-arrow-left</v-icon> Zurück zur Übersicht](/ki-systeme/index.md)
