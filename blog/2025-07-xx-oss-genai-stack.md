# Generative KI im Enterprise: der Münchner Open Source Stack

Generative KI (GenAI) hat in den letzten Jahren enorm an Bedeutung gewonnen.
Neben ChatGPT oder einem internen Klon arbeiten die meisten großen Organisationen mittlerweile an eigenen KI-Systemen für ihre spezifischen Anforderungen.

Diese Systeme erfodern jedoch meist eine Vielzahl an Funktionalitäten und Komponenten, die zusätzlich bereitgestellt werden müssen.
Neben nischigen Startups mit SaaS-Lösungen und Hyperscalern mit End-to-End-Systemen sind auch Open Source-Lösungen eine interessante Option, um die eigene digitale Souveränität zu wahren und gleichzeitig Kosten zu sparen.

Welchen Stack das KI Competence Center (KICC) der Stadt München für die städtischen KI-Systeme zusammengestellt hat, erklären wir in diesem Artikel.

## GenAI wird immer komplexer

Generative KI ist ein sehr dynamisches Feld, in dem sich die Technologien und Methoden rasant weiterentwickeln.
Zu Anfang wurde für Systeme wie den einfachen "ChatGPT-Klon" nur eine einfache Webanwendung und die Anbindung an ein großes Sprachmodell (LLM) benötigt.

![Primitives GenAI System](/img/blog/genai.png){.light-only}
![Primitives GenAI System](/img/blog/genai_dark.png){.dark-only}

> Primitives GenAI System; Quelle: Eigene Darstellung

Mit der Zeit kommen jedoch immer mehr Anforderungen hinzu, um ein vollwertiges KI-System zu betreiben.
Auslöser hierfür sind nicht nur steigende Anforderungen von Nutzer\*innen, sondern auch neue technische Möglichkeiten, rechtliche Anforderungen (AI Act) und die zunehmende Integration generativer KI mit Bestands-Systemen.

![Überblick über Anforderungen und mögliche Anbieter](/img/blog/swirlai-vendor-landscape.png)

> Überblick über Anforderungen und mögliche Anbieter, Quelle: [SwirlAI Newsletter](https://www.newsletter.swirlai.com/p/enterprise-agentic-ai-hierarchy-of)

Die wichtigsten Komponenten, die in einem modernen GenAI-System benötigt werden, sind:

- **Anwendungslogik und Orchestrierung**: Standardisierte Frameworks und darin integrierte Abläufe, die über einzelne Anbieter hinweg möglichst einheitlich und deterministisch sind.
- **KI-Modelle**: Große Sprachmodelle (LLMs), Embedding-Modelle und andere spezialisierte Modelle, die im Bestfall über eine standardisierte Schnittstelle (API) aus dem ganzen Unternehmen heraus angesprochen werden können.
- **Nachvollziehbarkeit & Evaluation**: Der Ablauf und sowie die Ein- und Ausgaben der KI-Systeme müssen zur Sicherstellung der Nachvollziehbarkeit protokolliert und evaluiert werden.
- **Persistenz**: Speicherung von Dokumenten zugehörigen Suchvektoren (Embeddings)
- **Einlesen von Dokumenten**: Extraktion von Informationen aus verschiedenen Dateiformaten (z.B. PDFs, Word-Dokumente) und deren Umwandlung in ein für die KI verständliches Format.
- **Websuche**: Integration von Websuchfunktionen zur Anreicherung der KI-Modelle mit aktuellen Informationen

Das Lösungsangebot für diese Komponenten ist vielfältig und reicht von Hyperscaler-Services über proprietäre SaaS-Lösungen bis hin zu Open Source-Projekten.

![Auswahl möglicher Komponenten](/img/blog/genai-component-map.png){.light-only}
![Auswahl möglicher Komponenten](/img/blog/genai-component-map_dark.png){.dark-only}

> Auswahl möglicher Komponenten, Quelle: Eigene Darstellung

## Der Münchner Open Source GenAI Stack

Wir haben uns bewusst für einen Open Source-Stack entschieden, um die digitale Souveränität der Stadt München zu wahren und gleichzeitig die Kosten im Rahmen zu halten.
Die einzelnen Komponenten des Stacks sind aufeinander abgestimmt und ermöglichen eine nahtlose Integration ineinander.

![Münchner Open Source GenAI Stack](/img/blog/kicc-muc-stack.png){.light-only}
![Münchner Open Source GenAI Stack](/img/blog/kicc-muc-stack_dark.png){.dark-only}

> Münchner Open Source GenAI Stack, Quelle: Eigene Darstellung

### Logik & Orchestrierung: [LangChain](https://github.com/langchain-ai/langchain) & [LangGraph](https://github.com/langchain-ai/langgraph)

### KI-Modellzugriff: LiteLLM

### Nachvollziehbarkeit & Evaluation: Langfuse

### Persistenz: Qdrant, pgvector & Valkey

### Dokumenten-Parsing: Docling

### Websuche: SearXNG

## Fazit

Der Münchner Open Source GenAI Stack bietet eine flexible und kosteneffiziente Lösung für die Herausforderungen der generativen KI im Enterprise-Bereich.
Durch den Einsatz bewährter OSS-Projekte kann die Stadt München ihre digitale Souveränität wahren und gleichzeitig innovative KI-Anwendungen entwickeln.

Die verschiedenen Komponenten des Stacks ermöglichen eine nahtlose Integration und Orchestrierung von KI-Systemen, die für die spezifischen Anforderungen der Stadt angepasst sind.
So wird sichergestellt, dass die städtischen KI-Systeme nicht nur leistungsfähig, sondern auch transparent und nachvollziehbar sind.
