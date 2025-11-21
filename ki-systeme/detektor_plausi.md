[<v-icon>mdi-arrow-left</v-icon> Zurück zur Übersicht](/ki-systeme/index.md)
# Plausibilisierungsservice für Verkehrsdaten

Verkehrsdaten sind für Planung, Wissenschaft, Verwaltung, Politik und Bevölkerung von großem Interesse und unerlässlich für regionale und städtische Verkehrsprojekte sowie zur Bewertung von bspw. Klimaschutzmaßnahmen.
In München wurden etwa 100 Messstellen zur Erfassung des Kfz-Verkehrs mittels Induktionsschleifen installiert.
Diese erfassen die Anzahl und Art der Fahrzeuge.
Um qualitativ hochwertige Verkehrsinformationen zu gewährleisten, müssen die Daten regelmäßig auf Störungen (z.B. Beschädigung, Fehler bei der Datenübertragung) und besondere Verkehrssituationen (z.B. Unfall, Stau) geprüft werden. Die Messstellen liefern Daten getrennt nach Fahrstreifen in 15-Minuten-Intervallen.
Aufgrund der großen Datenmengen ist ein automatisiertes Verfahren zur Plausibilisierung notwendig.

## Datengrundlage
### Karte der Messstellen in München
In München wurden etwa 100 Messstellen zur Erfassung des Kfz-Verkehrs mittels Induktionsschleifen installiert. Diese erfassen die Anzahl und Art der Fahrzeuge in 15-Minuten-Intervallen. Die Daten müssen regelmäßig auf Störungen und besondere Verkehrssituationen geprüft werden, um qualitativ hochwertige Verkehrsinformationen zu gewährleisten.

![Karte des Messtellen in München](/img/detektor/image-2.png)

### Bilder der Sensorik

![sensorik bild](/img/detektor/image.png)

![sensorik bild](/img/detektorimage-1.png)




### Ganglinien der Dedektoren einer Messtelle
Beispielhafte Ganglinie einer Messtelle mit 4 Spuren/Detektoren. 
![ganglineien eines detektors = digramm wie viele Autos fahren](/img/detektor/image-3.png)



## Funktionsweise
### Überprüfung der Sensordaten
Die Daten jedes Detektors werden einmal täglich auf Auffälligkeiten überprüft. Dazu werden zwei Prüfmechanismen verwendet.

#### Nullwertregel

Durch die Festlegung von Schwellenwerten für die pro Tag zulässigen Nullwerte, basierend auf dem durchschnittlichen Verkehrsaufkommen des Sensors, werden Komplettausfälle erkannt. Sensoren, die diese Schwellenwerte überschreiten, werden als auffällig gekennzeichnet.
#### Intervallregel
Um Auffälligkeiten zu erkennen, die nicht von der Nullwertregel erfasst werden, wird für jeden Detektor täglich ein neues Machine-Learning-Modell trainiert, das ein Intervall für den typischen Verkehrsverlauf des Tages prognostiziert. Anschließend wird geprüft, wie oft die Messwerte außerhalb dieses Intervalls liegen. Auch hier werden Messstellen als auffällig gekennzeichnet, die einen festgelegten Grenzwert überschreiten.
**Beispiel**
![veranschulichung des algorithmus](/img/detektor/image-4.png)


### Ergebnisse der Datenprüfung
Auffällige Daten werden speziell markiert, wenn sie signifikant vom durchschnittlichen Verkehrsaufkommen abweichen. Diese markierten Daten können anschließend ausgeschlossen werden, um die Datenqualität und Genauigkeit der Datenanalyse zu verbessern.

### Visualisierung durch Dashboards
Die Überprüfungsfunktion des Modells erstellt Dashboards, um den Fachbereichen detaillierte Einblicke in die Häufigkeit von Auffälligkeiten zu geben. So können auffällige Sensoren schnell erkannt und Ursachen für Abweichungen gründlich untersucht werden.


## Evaluation
Die Plausibilisierungs-Komponente wurde mithilfe des Fachbereichs getestet und evaluiert. Die Genauigkeit des Algorithmus ist schwer exakt zu bestimmen, da neben den Sensorzählungen keine vergleichbaren alternativen Zählungen existieren.

### Beispiel Datensatz
| datetime            | 4001011 | 4001012 | 4001013 | 4001014 |
|---------------------|---------|---------|---------|---------|
| 2016-01-01 00:00:00 | 8.0     | 9.0     | 10.0    | 3.0     |
| 2016-01-01 00:15:00 | 7.0     | 20.0    | 5.0     | 3.0     |
| 2016-01-01 00:30:00 | 14.0    | 19.0    | 11.0    | 10.0    |
| 2016-01-01 00:45:00 | 21.0    | 33.0    | 12.0    | 20.0    |
| 2016-01-01 01:00:00 | 21.0    | 21.0    | 21.0    | 12.0    |
| 2016-01-01 01:15:00 | 28.0    | 42.0    | 33.0    | 34.0    |
| 2016-01-01 01:30:00 | 27.0    | 34.0    | 24.0    | 20.0    |
| 2016-01-01 01:45:00 | 33.0    | 30.0    | 24.0    | 32.0    |

## Risiken und Limitierungen
Obwohl der Plausibilisierungsservice viele Vorteile bietet, gibt es auch einige Risiken und Limitierungen:

### Keine eindeutige Datengrundlage
Da es nur sehr begrenzte menschliche Vergleichszählungen gibt, konnte der Algorithmus nicht mit einem typischen Testdatensatz evaluiert werden. 

---
[<v-icon>mdi-arrow-left</v-icon> Zurück zur Übersicht](/ki-systeme/index.md)