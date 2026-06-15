[<v-icon>mdi-arrow-left</v-icon> Zurück zum Blog](/blog/index.md)

<p align="right"><em>15. Juni 2026</em></p>

---

# Kleine Modelle für große Aufgaben

![Build Small Hackathon Logo](/img/blog/build-small-hackathon-logo.png)

> Teilnahme am [Build Small Hackathon](https://huggingface.co/build-small-hackathon). Bild: Hugging Face.

Wir wollten uns intern mit den aktuellen Fähigkeiten kleiner Sprachmodelle (SLMs) vertraut machen. Als [Hugging Face](https://huggingface.co/) zum _Build Small Hackathon_ aufgerufen hat, war dies die perfekte Gelegenheit. In diesem Blog berichten wir über unsere Teilnahme und zeigen, welche Erkenntnisse wir aus diesem Event gewonnen haben.

## Die Aufgabe: Think small

Während die Frontier-Modelle immer größer werden, ging es hier explizit darum, nur kleine Modelle mit weniger als 32 Milliarden Parametern zu verwenden.

Dabei gab es zwei Tracks:

- _Backyard AI_: Ein echtes Problem lösen
- _An Adventure in Thousand Token World_: Etwas Wunderschönes erschaffen

::: details Zahlen für Zahlenfanatiker

- 5.–15. Juni (Wir haben insgesamt 3 Tage mitgemacht)
- $48.000+ Preisgeld
- Mehr als 2.000 Teilnehmer
- 6 Bonus Quests (z. B. Fine-Tune eines eigenen Modells verwenden)

:::

## Unsere Idee: Smolnalysis

### Übersetzung in OpenUI-Lang

Als Basis wollten wir ein Modell fine-tunen, das natürliche Sprache direkt in [OpenUI-Lang](https://www.openui.com/docs/openui-lang/specification-v05) übersetzt.

_OpenUI_ ist ein generatives UI-Framework, das Frontendkomponenten dynamisch mit einem LLM generiert. Die zugrunde liegende Abstraktionssprache _OpenUI-Lang_ ist dabei deutlich token-effizienter als ein direktes HTML-Rendering.

Ein kurzes Beispiel zeigt das Prinzip:

::: details Beispiel: Wetterabfrage in OpenUI-Lang
Die Nutzerfrage lautet:

> Wie ist das Wetter in München

Das LLM erzeugt daraufhin mithilfe von Wetterdaten eine OpenUI-Lang-Repräsentation:

```OpenUI-Lang
root = Stack([header, callout, cards, footer])
header = CardHeader("Wetter in München", "Aktuelle Vorhersage — heute")
callout = Callout("info", "Hinweis", "Dies sind typische Wetterwerte für München. Für Echtzeit-Daten bitte einen Wetterdienst besuchen.")
cards = Stack([tempCard, windCard, humCard, uvCard], "row", "m", "stretch", "start", true)
tempCard = Card([CardHeader("🌤️ Temperatur", "Teilweise bewölkt"), TextContent("14 °C", "large-heavy"), TextContent("Gefühlt: 12 °C", "small")], "card")
windCard = Card([CardHeader("💨 Wind", "Aus Nordwest"), TextContent("18 km/h", "large-heavy"), TextContent("Böen bis 30 km/h", "small")], "card")
humCard = Card([CardHeader("💧 Luftfeuchtigkeit", "Mäßig"), TextContent("62 %", "large-heavy"), TextContent("Taupunkt: 7 °C", "small")], "card")
uvCard = Card([CardHeader("☀️ UV-Index", "Niedrig"), TextContent("2", "large-heavy"), TextContent("Kein Sonnenschutz nötig", "small")], "card")
footer = Card([CardHeader("5-Tage-Vorschau", ""), forecastChart], "sunk")
forecastChart = BarChart(["Mo", "Di", "Mi", "Do", "Fr"], [highSeries, lowSeries], "grouped", "Wochentag", "Temperatur (°C)")
highSeries = Series("Hoch (°C)", [14, 16, 13, 11, 12])
lowSeries = Series("Tief (°C)", [7, 9, 8, 5, 6])
```

Im Frontend gerendertes Ergebnis:

![OpenUI-Lang Rendered](/img/blog/openui-lang-example.png)

:::

Statt ein großes LLM mit einem ausführlichen Systemprompt einzusetzen, der die Funktionsweise von OpenUI-Lang erklärt, wollten wir ein SLM trainieren, das die Kombination aus Nutzerfrage und relevantem Kontext direkt in OpenUI-Lang übersetzt.

### Kombination mit dem OpenData-Katalog der LHM

Damit wir einen sinnvollen Use Case für den _Backyard AI_ Track hatten, wollten wir einen Agenten bauen, der bei Fragen zu Datensätzen in einem Open-Data-Portal hilft. Konkret sollte er mit https://opendata.muenchen.de/ interagieren, das auf [CKAN](https://ckan.org/) basiert.

::: details Mehr Informationen zur CKAN-Schnittstelle

Die Daten sind dort nach Gruppen und Tags organisiert, zum Beispiel über die Gruppe Verkehr: https://opendata.muenchen.de/group/tran oder über Tags wie https://opendata.muenchen.de/dataset/?tags=Fahrrad. Über einen Query-Endpunkt lassen sich passende Datensätze suchen und anschließend herunterladen.

:::

## Umsetzung

### Architektur

Ein zentrales Deliverable im Hackathon war ein eigener Gradio Space zum Austesten. Da wir zusätzlich ein eigenes, angepasstes Frontend für das Rendering von OpenUI-Lang mitliefern wollten, haben wir uns für [gr.Server](https://huggingface.co/blog/introducing-gradio-server) entschieden. Der eigentliche Agent läuft auf dem gr.Server und verbindet sich mit den relevanten Sprachmodellen, die auf [ZeroGPU-Instanzen](https://huggingface.co/docs/hub/spaces-zerogpu) laufen.

![Zielarchitektur](/img/blog/build-small-architecture.png){.light-only}
![Zielarchitektur](/img/blog/build-small-architecture_dark.png){.dark-only}

Wir haben uns bewusst dafür entschieden, ausschließlich mit [MiniCPM-1B](https://huggingface.co/openbmb/MiniCPM5-1B) beziehungsweise fein-getunten LoRA-Adaptern zu arbeiten. Einerseits, weil der Anbieter des Modells den Hackathon unterstützt hat, andererseits, weil wir ausprobieren wollten, wie weit wir mit einem 1B-Modell kommen.

### Datensätze

TODO Input Sebastian

### Training

Wir haben zwei verschiedene Varianten zum Training ausprobiert. Zum einen auf lokaler Hardware. Auf der anderen Seite hatten wir auch im Zuge des Hackathons Modal Credits zur Verfüung gestellt bekommen.

::: details Training auf Modal

:::

::: details Training auf Nvidia RTX 3090
TODO Input Sebastian
:::

## Erkenntnisse

::: details Gute Datensätze zu erstellen ist schwer

Das Erstellen hochwertiger Datensätze ist zeitaufwändiger als erwartet. Im Rahmen des Hackathons hatten wir schlicht nicht genug Zeit, um dies wirklich sorgfältig zu tun — unsere synthetisch generierten Datensätze waren in der Folge zu wenig realitätsnah, um die Modelle hinreichend gut zu trainieren.

Ein vielversprechenderer Ansatz wäre es gewesen, die Anwendung zunächst vollständig mit einem generischen LLM aufzubauen, echte Nutzungsinteraktionen zu sammeln und diese anschließend als Trainingsdaten für das Fine-Tuning kleiner Modelle zu verwenden. Genau dieses Vorgehen beschreibt der Ansatz aus [LLM-to-SLM Distillation via Real-World Usage](https://arxiv.org/abs/2506.02153): Erst Daten in der Praxis sammeln, dann destillieren.

:::

::: details Training von SLMs ist günstig

Das Erstellen von Datensätzen mit LLMs ist überraschend günstig. Für die CKAN-Schnittstelle haben wir z. B. über mehrere Iterationen rund 3.000 Trainingsbeispiele mit `mistral-medium` generiert ([Mehr dazu](https://github.com/Meteord/smolnalysis/blob/main/train/ckan/DATASET_GENERATION.md)) — Gesamtkosten: ca. 5 €.

Das anschließende Training und die Evaluierung des CKAN-Fine-Tunes über [Modal](https://modal.com/) haben ebenfalls nur rund 5 $ gekostet.

TODO Input on Device Kosten von Sebastian
:::

::: details Weniger ist mehr
Wir haben uns zu viel vorgenommen. Das Erstellen eines hochwertigen Datensatzes für nur eines unserer Modelle hätte mehr Zeit erfordert, als wir für den gesamten Hackathon eingeplant hatten. Die bessere Entscheidung wäre gewesen, sich auf ein einziges Modell für eine klar abgegrenzte Aufgabe zu konzentrieren, statt mehrere voneinander abhängige Expertenmodelle parallel zu trainieren.

:::

::: details Codex
Im Zuge des Hackathons wurden uns [Codex](https://openai.com/de-DE/codex/) Credits zur Verfügung gestellt.

Positiv aufgefallen ist:

- Codex war sehr gut darin, auch bei langlaufenden Entwicklungssessions den Gesamtkontext im Blick zu behalten.
- Trainingsskripte konnten weitgehend automatisch mithilfe der mitgelieferten Skills ([MiniCPM-Fine-Tuning](https://github.com/OpenBMB/MiniCPM/blob/main/skills/minicpm5-finetune-trl/SKILL.md)) erstellt werden.

Negativ aufgefallen ist:

- Es ist schwierig, bei der Masse an KI-Änderungen den Überblick über den Code zu behalten und später von Hand nachzujustieren.
- Man verliert etwas die Intuition dafür, was gut funktioniert. Insbesondere beim Erstellen der Datensätze für das Training der Modelle ist weiterhin viel menschliche Kontrolle notwendig.

:::

## Fazit & Ausblick

::: details Limitierungen

:::

::: details Ausblick

:::

## Links

- Fine-Tunes:
  - [MiniCPM5-Finetune für CKAN Retrieval](https://huggingface.co/build-small-hackathon/smolnalysis-ckan-retrieval-minicpm5-lora)
- [GitHub-Repo mit dem ganzen Projekt](https://github.com/Meteord/smolnalysis)
- [Huggingface Space zum ausprobieren](https://huggingface.co/spaces/build-small-hackathon/smolnalysis)

---

<p align="center"><strong>Autor*innen</strong></p>

<script setup>
import { VPTeamMembers } from "vitepress/theme"

const members = [
  {
    avatar: "/img/people/mj.jpg",
    name: "Michael Jaumann",
    title: "ML Engineer",
    links: [
      { icon: "github", link: "https://github.com/Meteord" },
      { icon: "linkedin", link: "https://www.linkedin.com/in/michael-jaumann-a4736a263/" },
      { icon: "maildotru", link: "mailto:michael.jaumann@muenchen.de"},
    ],
  },
   {
    avatar: "/img/people/sb.jpg",
    name: "Sebastian Berger",
    title: "ML Engineer",
    links: [
      { icon: "github", link: "https://github.com/illuminate97" },
      { icon: "linkedin", link: "https://www.linkedin.com/in/sebastian-berger-35625a280/" },
      { icon: "maildotru", link: "mailto:sebastian.berger@muenchen.de"},
    ],
  }
]
</script>

<VPTeamMembers size="small" :members />

[<v-icon>mdi-arrow-left</v-icon> Zurück zum Blog](/blog/index.md)
