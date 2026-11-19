[<v-icon>mdi-arrow-left</v-icon> Zurück zum Blog](/blog/index.md)

<p align="right"><em>19. November 2026</em></p>

---

# Unser Open Source KI-Stack: Update 2026

Im Sommer 2025 haben wir in [Unser Open Source KI-Stack](/blog/2025-07-23-oss-genai-stack) vorgestellt, welche Open-Source-Komponenten das [KI-Team](/ki-team) der Stadt München für die städtischen KI-Systeme bereitstellt.
Seitdem ist einiges passiert: [MUCGPT 2.0](/blog/2026-06-29-mucgpt-2.0) ist mit teilbaren Assistenten gestartet, die [KI-Suche im Dienstleistungsfinder](/ki-systeme/dlf) stellt ihre Retrieval-API als MCP-Server bereit und mit [Zammad-AI](/ki-systeme/zammad-ai) hat ein weiteres KI-System den Betrieb aufgenommen.

Mit wachsender Anzahl an Systemen wachsen auch die Anforderungen an den Stack darunter. Deshalb schauen wir in diesem Artikel zurück: Was haben wir ausgetauscht, was ist geblieben – und was kommt als Nächstes?

Über allen Änderungen steht dabei dieselbe Leitidee wie 2025: digitale Souveränität. Sie bedeutet für uns nicht, alles selbst zu betreiben, sondern selbst bestimmen zu können – welcher Anbieter welche Daten verarbeitet, wo unsere Dokumente geparst werden und wie schnell wir einen Anbieter wechseln können, wenn sich dessen Bedingungen ändern. Genau diese Fähigkeit ist im letzten Jahr architektonisch gewachsen.

## Der Stack im Überblick

Die Rolle der einzelnen Komponenten hat sich seit 2025 nicht grundsätzlich verändert – wohl aber ihre konkrete Ausprägung:

| Bestandteil                          | 2025                      | Ende 2026                                                                                        |
| ------------------------------------ | ------------------------- | ------------------------------------------------------------------------------------------------ |
| **Dokumenten-Parsing**               | Docling                   | **Xberg** (Nachfolger von Kreuzberg)                                                             |
| **Websuche**                         | SearXNG (geplant)         | **SearXNG produktiv** + MCP-Server als Search-Proxy                                              |
| **KI-Modellzugriff**                 | LiteLLM                   | **LiteLLM als AI-Gateway in drei Stages** – Provider austauschbar, zusätzlich **Privatemode AI** |
| **Nachvollziehbarkeit & Evaluation** | Langfuse                  | **Langfuse 3**                                                                                   |
| **Logik & Orchestrierung**           | LangChain & LangGraph     | unverändert LangChain & LangGraph                                                                |
| **Persistenz**                       | Qdrant, pgvector & Valkey | unverändert Qdrant, PostgreSQL/pgvector & Valkey                                                 |
| **Embeddings**                       | über Modellanbieter       | Ausblick: **model2vec-serve** (Eigenentwicklung)                                                 |

### 📃 Dokumenten-Parsing: [Xberg](https://github.com/xberg-io/xberg) statt Docling

Die größte Änderung betrifft das Einlesen von Dokumenten. 2025 hatten wir `Docling` im Einsatz, um PDFs, Word-Dateien und Co. in ein maschinenlesbares Format zu überführen. Mit zunehmender Anzahl an Dokumenten und Systemen, die auf das Parsing zugreifen, wurden Performance, Formatvielfalt und Stabilität zu den wichtigsten Anforderungen.

Anfang 2026 haben wir daher zunächst `Kreuzberg` als Parsing-Dienst deployt – eine Python-Bibliothek mit Fokus auf genau diese Anforderungen. Im Sommer 2026 hat das Projekt dann unter dem Namen `Xberg` eine neue v1-Release-Linie begonnen und die Nutzerbasis von Kreuzberg übernommen. Wir sind direkt mit umgestiegen und betreiben Xberg seit Juli 2026.

`Xberg` ist eine extrem schnelle Document-Intelligence-Engine, geschrieben in Rust mit Bindings für viele weitere Sprachen (Python, Node, Go, Java, C# …). Sie extrahiert und strukturiert Texte, Tabellen und Metadaten aus über 100 Dateiformaten – PDFs, Office- und OpenDocument-Dateien, Tabellen, Präsentationen, Bilder, E-Mails und mehr – vollständig lokal und offline, mit OCR-Fallback (Tesseract, Paddle) und Content-Hash-Caching. Beim Parsing verlassen Dokumente unsere Infrastruktur nicht – eine Grundvoraussetzung dafür, dass Inhalte aus Verwaltungsdokumenten überhaupt in unsere KI-Systeme eingespeist werden dürfen.

Für die Integration in GenAI-Systeme ist besonders interessant: Xberg kann als Bibliothek, als REST-Dienst, als CLI oder als [MCP](https://modelcontextprotocol.io/introduction)-Server genutzt werden. Dazu kommen Funktionen wie Chunking und die direkte Generierung von Embeddings, die die Einspeisung in Retrieval-Pipelines zusätzlich erleichtern. Zuverlässiges lokales Dokumenten-Parsing ist die Voraussetzung, um Dokumente in Embeddings und Retrieval-Pipelines einzuspeisen.

Der Betrieb bei uns erfolgt wie gehabt als Container auf der städtischen Containerplattform – jetzt allerdings über das offizielle Helm-Chart der Xberg-Maintainer statt eines selbst gepflegten Charts. Renovate hält Container-Image und Chart automatisch aktuell, Health-Probes und ein beschränktes Ressourcen-Budget (1 GiB Speicher) sorgen für einen stabilen Betrieb. Der OCR-Fallback ist leistungsfähig, aber ressourcenhungrig – in unserer Testumgebung läuft er daher aktuell deaktiviert, da die dortigen Dokumente maschinenlesbaren Text enthalten.

Im Einsatz ist Xberg heute an zwei zentralen Stellen:

- In [MUCGPT](/ki-systeme/mucgpt) 2.0 ermöglicht der separate Xberg-Container den Dokumenten-Upload und das Parsing in Chats („Chat with your Docs“).
- In [Zammad-AI](/ki-systeme/zammad-ai) extrahiert Xberg Ticket-Anhänge, damit deren Inhalte für das Retrieval zur Verfügung stehen.

### 🌏 Websuche: SearXNG als Search-Proxy – jetzt produktiv

Im letzten Artikel hatten wir den Einsatz von `SearXNG` noch als Plan angekündigt. Heute ist daraus Realität: SearXNG läuft bei uns in einer Test- und einer Produktivinstanz auf der Containerplattform und dient als zentraler Search-Proxy für unsere KI-Systeme.

`SearXNG` ist eine Open-Source-Metasuchmaschine, die Suchanfragen an verschiedene Anbieter weiterleitet und die Ergebnisse aggregiert. Der Vorteil eines zentralen Proxys: Statt dass jede KI-Anwendung selbst Suchmaschinen anbindet, gibt es genau eine Anlaufstelle. Die Instanzen fragen ausschließlich über den städtischen Internet-Proxy nach außen, sind zustandslos betrieben und bieten eine JSON-Schnittstelle für die maschinelle Verarbeitung an. Und auch hier gilt das Austauschbarkeitsprinzip: Fällt eine Suchmaschine weg oder ändern sich ihre Konditionen, passen wir die Engine-Liste der Instanz an – die anbindenden KI-Systeme merken davon nichts.

Die Liste der Suchmaschinen haben wir bewusst kuratiert – von generalistischen Anbietern (Google, Bing, DuckDuckGo, Qwant) über Wissensquellen wie Wikipedia und Wikidata bis zu spezialisierten Angeboten: Tagesschau und die Bundeszentrale für politische Bildung für aktuelle und verlässliche Inhalte, MediathekViewWeb und YouTube für Videos, OpenStreetMap für Karten sowie arXiv, Google Scholar und Semantic Scholar für wissenschaftliche Publikationen.

Besonders spannend ist die zweite Stufe des Deployments: Neben SearXNG selbst betreiben wir einen MCP-Server, der die Websuche als Werkzeug über das [Model Context Protocol](https://modelcontextprotocol.io/introduction) bereitstellt. Damit können Agenten – etwa Assistenten in MUCGPT – aktuelle Webinformationen als Kontextquelle abfragen, ohne dass jede Anwendung eine eigene Suchanbindung braucht. Der Vorteil aus dem letzten Artikel gilt unverändert: Durch die direkte Abfrage aktueller Daten entfällt das aufwändige Parsen und Speichern großer Datenmengen als Embeddings in einer Vektordatenbank.

### 🧠 KI-Modellzugriff: LiteLLM als AI-Gateway – Souveränität durch Austauschbarkeit

`LiteLLM` bleibt das zentrale AI-Gateway für Sprachmodelle – intern nennen wir es den „KI-Proxy“. Es bündelt verschiedene Modellprovider hinter einer gemeinsamen OpenAI-kompatiblen API, verwaltet virtuelle API-Keys mit Budgets und Ratelimits und sorgt dafür, dass der Modellzugriff über alle Systeme hinweg einheitlich geregelt ist. Dabei ist das Gateway längst mehr als ein Chat-Proxy: Neben LLMs und Embedding-Modellen stellt es auch Reranking-, Transcription- und Bildgenerierungs-Modelle bereit, sodass alle Modelltypen über dieselbe zentrale Stelle verwaltet werden.

Warum das der wichtigste Hebel für digitale Souveränität im gesamten Stack ist: Keines unserer KI-Systeme spricht direkt mit einem Modellanbieter – sie sprechen alle nur mit dem Gateway. Welcher Provider dahinter tatsächlich antwortet, entscheidet allein unsere Gateway-Konfiguration. Der Wechsel zu einem anderen Anbieter bedeutet für eine Anwendung deshalb in der Regel nichts weiter, als Deployment- und Modellnamen zu ändern – der Code bleibt unverändert, und die Anwendung merkt den Unterschied höchstens an der Antwortqualität.

Das ist 2026 kein theoretisches Argument geblieben. Der Modellmarkt hat sich erneut spürbar bewegt: neue Modellgenerationen, veränderte Konditionen und neue Anbieter mit neuen Sicherheitskonzepten. Weil die Austauschbarkeit architektonisch gegeben ist, können wir pro Modell und Anwendungsfall entscheiden, welcher Weg passt – und bei geänderten Bedingungen, ob Preis, Lizenz, Verfügbarkeit oder Datenschutzbewertung, reagieren, ohne eine einzige Anwendung anzupassen. Souveränität ist für uns damit keine Absichtserklärung, sondern eine operationelle Fähigkeit des Stacks.

Seit dem letzten Artikel hat sich der Betrieb in zwei Punkten weiterentwickelt:

Zum einen betreiben wir LiteLLM jetzt in drei Stages: einer Test- und einer Produktivinstanz sowie einer zusätzlich abgesicherten externen Instanz, die über die Web Application Firewall der Stadt auch aus dem Internet erreichbar ist – etwa für Anwendungsfälle mit externen Partnern. Alle Instanzen sichern ihren Zustand in einer PostgreSQL-Datenbank, ein Rollen- und Rechtekonzept regelt den Zugriff auf die Verwaltungsoberfläche.

Zum anderen haben wir mit `Privatemode AI` einen weiteren Modellprovider angebunden. Privatemode AI ist ein SaaS-Dienst, der GenAI-Modelle in einer durch Confidential Computing geschützten Umgebung bereitstellt. Die Daten werden während der Verarbeitung verschlüsselt und erst in der verifizierten, abgeschotteten Umgebung entschlüsselt – so lassen sich cloudbasierte Modelle nutzen, ohne dass sensible Daten das geschützte Umfeld verlassen. Der Privatemode-Proxy läuft dabei in unserer Containerplattform und ist aus Sicht des Gateways nur ein weiterer Provider. Damit spannt sich der Bogen unserer Modellangebote von Azure OpenAI in der Cloud über Confidential Computing bis zu offenen Modellen, die wir selbst auf unserer Containerplattform betreiben – und wir wählen je Anwendungsfall, welcher Schutzlevel zu welchen Daten passt. Wie wir diese Auswahl künftig systematisch mit einem Ampel-Modell regeln werden, beschreiben wir im Ausblick.

### 🔎 Nachvollziehbarkeit & Evaluation: Langfuse 3

`Langfuse` bleibt unsere zentrale Komponente für Tracing, Evaluation und Prompt-Management. Alle relevanten KI-Systeme – vom Dienstleistungsfinder über Zammad-AI bis MUCGPT – schreiben ihre Zwischenschritte dorthin, sodass Abläufe nachvollziehbar bleiben und sich Qualität messen lässt.

Im letzten Jahr haben wir Langfuse von Version 2 auf Version 3 gehoben. Der Upgrade-Pfad war die größte operationelle Herausforderung – Langfuse 3 stellt die Infrastruktur auf ein neues Fundament –, bringt aber auch eine stabilere Basis für die weitere Entwicklung. Nach einem zwischenzeitlichen Versionsfreeze laufen wir nun auf einem aktuellen Stand und nutzen weiterhin Evaluierungsläufe auf eigenen Datensätzen, etwa um die Effizienz des Retrievals mit unterschiedlichen Embedding-Modellen zu vergleichen.

### 🎼 Logik & Orchestrierung: LangChain & LangGraph (unverändert)

An der Orchestrierungsebene hat sich nichts Grundlegendes geändert: `LangChain` abstrahiert den Modellzugriff und standardisiert die Bausteine unserer RAG-Pipelines, `LangGraph` bildet agentische Workflows als Graphen ab.

Deutlich sichtbar wird das in [MUCGPT](/ki-systeme/mucgpt) 2.0: Die dortigen Assistenten laufen als Agenten auf der LangGraph-Runtime, ihr Zustand wird in PostgreSQL persistiert. Neu ist dagegen die Integrationsrichtung: Über das Model Context Protocol werden externe Kontextquellen und Werkzeuge standardisiert angebunden – die Dienstleistungsfinder KI-Suche bietet ihren Retrieval-Endpunkt beispielsweise als MCP-Server an, und mit Xberg und SearXNG haben jetzt auch zwei Stack-Komponenten selbst MCP-Schnittstellen. MCP entwickelt sich für uns zum Standard-Integrationsmuster zwischen KI-Systemen.

### 💾 Persistenz: Qdrant, PostgreSQL & Valkey (unverändert)

Auch bei der Persistenz setzen wir weiter auf bewährte Komponenten:

- `Qdrant` bleibt unsere Vektordatenbank für Retrieval-Augmented Generation. Die hybride Suche – die Kombination von Embedding-basierter Suche und klassischer Stichwortsuche – kommt sowohl in der [KI-Suche im Dienstleistungsfinder](/ki-systeme/dlf) als auch in Zammad-AI zum Einsatz.
- `PostgreSQL` (mit der pgvector-Erweiterung) persistiert Anwendungsdaten und Agentenzustände, etwa die Konfigurationen und Freigaben der MUCGPT-Assistenten, und sichert zudem den Zustand unseres KI-Proxys.
- `Valkey` dient als Hochleistungs-Key/Value-Store zur Zwischenspeicherung kurzfristiger Informationen.

## Ausblick

### 🇪🇺 Frontier-Modelle aus Europa und ein Ampel-Modell

Ein Baustein fehlt in unserer Modellpalette bisher noch: der Zugang zu den großen Frontier-Modellen aus europäischer Hand. Deshalb bereiten wir die Anbindung eines souveränen europäischen Frontier-KI-Anbieters vor – des einzigen europäischen KI-Labors, das Frontier-Modelle auf Augenhöhe der großen US-Anbieter entwickelt und trainiert, mit Datenverarbeitung in Europa nach EU-Recht. Über das AI-Gateway angebunden, bedeutet das für unsere Anwendungen wiederum nur einen neuen Deployment-Namen.

Mit dieser Erweiterung führen wir ein Ampel-Modell ein, das Anwendungsfälle je nach Datenschutz-, DSGVO- und Sicherheitsanforderungen dem passenden Provider zuordnet:

- 🔴 **Rot**: Hyperscaler, die in Europa betrieben werden (Azure) – für Anwendungsfälle mit geringen Schutzanforderungen. Auch wenn die Rechenzentren in der EU stehen, muss die Nutzung mit personenbezogenen Daten projektbezogen durch den Datenschutz freigegeben werden.
- 🟡 **Gelb**: der europäische Frontier-Anbieter – für Anwendungsfälle mit erhöhten Anforderungen an Souveränität und Datenschutz.
- 🟢 **Grün**: Confidential Computing (Privatemode AI) sowie selbst betriebene offene Modelle – für sensible Daten und höchste Anforderungen.

![Ampelsystem für KI-Provider: Hyperscaler in Europa, europäische Frontier-KI-Labore und Confidential Computing Cloud](/img/blog/ki-proxy-ampel.png){.light-only}
![Ampelsystem für KI-Provider: Hyperscaler in Europa, europäische Frontier-KI-Labore und Confidential Computing Cloud](/img/blog/ki-proxy-ampel_dark.png){.dark-only}

> Ampelsystem für KI-Provider, Quelle: Eigene Darstellung

Das Ampel-Modell leben wir dabei im Gateway statt in den Anwendungen: Jedes Deployment wird einer Farbe zugeordnet, und ein Wechsel des Schutzlevels bedeutet erneut nur eine Anpassung der Deployment-Konfiguration. So bleibt die Einstufung zentral geregelt, dokumentiert und technisch durchgesetzt – ganz im Sinne der Austauschbarkeit, die unseren Stack trägt.

### 🧩 model2vec-serve: souveräne Embeddings aus eigener Produktion

Ein Baustein des Stacks war bisher immer eine externe Abhängigkeit: die Embeddings. Für die Vektorisierung von Dokumenten und Anfragen haben wir bislang überwiegend Embedding-Modelle unserer Modellanbieter genutzt. An diesem Punkt setzen wir mit einer Eigenentwicklung an: `model2vec-serve`.

`model2vec-serve` ist ein leichtgewichtiger Server für [model2vec](https://github.com/MinishLab/model2vec)-Static-Embedding-Modelle – geschrieben in Rust, veröffentlicht als Open Source unter MIT-Lizenz. Static-Embedding-Modelle wie die „Potion“-Modelle von MinishLab sind extrem klein (32M–128M Parameter), laufen effizient auf CPU und benötigen keine GPU noch komplexe ML-Infrastruktur.

Der Server versteht dabei die klassischen API-Formate: Anfragen im OpenAI-`/v1/embeddings`-Format funktionieren genauso wie die Formate von HuggingFaces Text Embedding Inference (TEI). Bestehende Anwendungen stellen darauf um, indem sie nur die Basis-URL und den Modellnamen ändern – alles andere bleibt unverändert. Mehrere Modelle lassen sich parallel in einem Prozess betreiben, dazu kommen API-Key-Authentifizierung, TLS, Prometheus-Metriken, strukturierte Logs und ein mitgeliefertes Helm-Chart.

In unserer Infrastruktur läuft model2vec-serve bereits in einer Entwicklungs- und Testumgebung auf der Containerplattform. Der nächste Schritt ist die Nutzung als zentrale, souveräne Embeddings-API für unsere RAG-Pipelines: schnelle lokale Embeddings ohne Abhängigkeit von externen Modellanbietern – etwa für Klassifizierung, Deduplizierung und semantisches Caching, während für hochwertige Retrieval-Embeddings weiterhin größere Modelle zum Einsatz kommen. Weil model2vec-serve dieselben OpenAI-kompatiblen Formate spricht wie unsere übrigen Modellendpunkte, kann es auf demselben Weg angebunden werden: Aus Sicht der Anwendungen ist es damit nur ein weiteres Embedding-Modell, dessen Bereitstellung wir über das AI-Gateway steuern – und dessen Anbieter wir dort bei Bedarf jederzeit wechseln können. Die Entwicklung von model2vec-serve verfolgen Sie übrigens öffentlich auf [GitHub](https://github.com/it-at-m/model2vec-serve).

Darüber hinaus evaluieren wir weitere zentrale Komponenten für den Stack – etwa eine MCP-Registry, die den Zugriff auf die wachsende Zahl an MCP-Servern bündelt, und einen dedizierten Übersetzungs-Service.

## Fazit

Ein Jahr nach dem ersten Überblick ist unser Stack reifer geworden: Mit Xberg parsen wir Dokumente schneller und formatvielfältiger als zuvor, SearXNG stellt als zentraler Search-Proxy aktuelle Webinformationen datenschutzfreundlich bereit, und mit LiteLLM als AI-Gateway bleibt unser Modellzugriff jederzeit austauschbar – bei einem inzwischen breiteren Spektrum an Providern als noch 2025. Mit dem Ampel-Modell ordnen wir künftig jedem Anwendungsfall je nach Datenschutz- und Sicherheitsanforderungen den passenden Schutzlevel zu.

Auffällig ist ein Trend, der sich quer durch alle Änderungen zieht: Immer mehr Komponenten unseres Stacks sprechen MCP. Was 2025 noch eine Fußnote war, ist 2026 das Standard-Integrationsmuster zwischen unseren KI-Systemen geworden – vom Dokumenten-Parsing über die Websuche bis zum Retrieval des Dienstleistungsfinders.

An der Motivation hat sich dagegen nichts geändert: Open Source wahrt die digitale Souveränität der Stadt München und hält die Kosten im Rahmen. Aber Souveränität ist für uns mehr als eine Lizenzfrage – sie entsteht in der Architektur: im AI-Gateway, das Provider austauschbar macht, in Komponenten wie Xberg und SearXNG, die Daten und Verarbeitung in unserer eigenen Infrastruktur halten, und in Eigenentwicklungen wie model2vec-serve, mit denen wir Lücken im Ökosystem selbst schließen und dabei so viel wie möglich an die Open-Source-Community zurückgeben.

---

<p align="center"><strong>Autor*innen</strong></p>

<script setup>
import { VPTeamMembers } from "vitepress/theme"

const members = [
  {
    avatar: "/img/people/fr.jpg",
    name: "Fabian Reinold",
    title: "ML Engineer",
    links: [
      { icon: "github", link: "https://github.com/freinold" },
      { icon: "linkedin", link: "https://www.linkedin.com/in/fabian-reinold/" },
      { icon: "maildotru", link: "mailto:fabian.reinold@muenchen.de"},
    ],
  },
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
]
</script>

<VPTeamMembers size="small" :members />

---

[<v-icon>mdi-arrow-left</v-icon> Zurück zum Blog](/blog/index.md)
