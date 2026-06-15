[<v-icon>mdi-arrow-left</v-icon> Zurück zum Blog](/blog/index.md)

<p align="right"><em>15. Juni 2026</em></p>

---

# Kleine Modelle für große Aufgaben

![Build Small Hackathon Logo](/img/blog/build-small-hackathon-logo.png)

> Teilnahme am [Build Small Hackathon](https://huggingface.co/build-small-hackathon) Bild: Huggingface.

Wir wollten uns intern mit den aktuellen Fähigkeiten von kleinen Sprachmodellen (SLMs) vertraut machen. Als [Huggingface](https://huggingface.co/) zum _Build Small Hackathon_ aufgerufen hat, war dies die perfekte Gelegenheit. In diesem Blog berichten wir über unsere Teilnahme und zeigen, welche Erkenntnisse wir aus diesem Event gewonnen haben.

## Die Aufgabe: Think small

Während die Frontier Modelle immer größer werden, ging es hier explizit darum nur kleine Modelle, < 32 Milliarden Parametern, zu verwenden.

Dabei gab es zwei Tracks:

- _Backyard AI_: Ein echtes Problem lösen
- _An Adventure in Thousand Token World_: Etwas Wunderschönes erschaffen

Hier noch einige Informationen zum Event:

- 5.–15. Juni (Wir haben insgesamt 3 Tage mitgemacht)
- $48.000+ Preisgeld
- Mehr als 2.000 Teilnehmer
- 6 Bonus Quests (z. B. Fine-Tune eines eigenen Modells verwenden)

## Unsere Idee: Smolnalysis

### Übersetzung in OpenUI-Lang

Als Basis wollten wir ein Modell fine-tunen, das Text in [OpenUI-Lang](https://www.openui.com/docs/openui-lang/specification-v05) übersetzt.

_OpenUI_ ist ein generatives UI-Framework, das Frontendkomponenten dynamisch mit einem LLM generiert. Dabei wird die Abstraktionssprache _OpenUI-Lang_ verwendet, die deutlich token-effizienter ist als beispielsweise direktes HTML-Generieren.

Hier ein Beispiel zur besseren Veranschaulichung:

::: details Beispiel: Wetterabfrage in OpenUI-Lang
Nutzer fragt:

> Wie ist das Wetter in München

Generierte Antwort vom LLM in OpenUI-Lang mithilfe einer Wetterschnittstelle:

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

Gerendertes Ergebnis im Frontend:
![OpenUI-Lang Rendered](/img/blog/openui-lang-example.png)

:::

Statt ein großes LLM mit einem ausführlichen Systemprompt einzusetzen, der die Funktionsweise von OpenUI-Lang erklärt, wollten wir ein SLM trainieren, das „Nutzerfrage + relevanter Kontext“ direkt in OpenUI-Lang übersetzt.

### Kombination mit dem OpenData-Katalog der LHM

### Ein Zoo von Modellen zum Routing

## Umsetzung

## Was haben wir gelernt

## Links

- Fine-Tunes:
  - [Minicpm5 Finetune für CKAN Retreival](https://huggingface.co/build-small-hackathon/smolnalysis-ckan-retrieval-minicpm5-lora)
- [Github Repo mit dem ganzen Projekt](https://github.com/Meteord/smolnalysis)
- [Huggingface Space zum ausprobieren](https://huggingface.co/spaces/build-small-hackathon/smolnalysis)

## Fazit

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
