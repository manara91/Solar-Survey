# Solar-Survey App (Next.js)

Eine Webanwendung, entwickelt mit Next.js (unter Verwendung des App Routers), die Nutzer:innen eine erste Einschätzung zur Frage ließt: **„Lohnt sich eine Solaranlage für Ihr Dach?”**

## Funktionen

Das Projekt implementiert die folgenden Kernfunktionen:

* **Ein-/Mehrseitiges Formular:** Ein Formular mit 5 Pflichtfragen zur Datenerfassung.
* **Optionales Kontaktformular:** Möglichkeit zur Eingabe von Kontaktdaten (Name, E-Mail, Telefon) zur Anforderung weiterer Informationen oder einer kostenlosen Ertragssimulation.
* **Validierung:** Client-seitige und/oder Server-seitige Validierung der Nutzereingaben.
* **Formularversand:**
    * Die Daten werden an einen internen API-Endpunkt (`/api/submit`) gesendet.
    * Der API-Endpunkt führt eine erneute Validierung durch und antwortet **zufällig** mit einer Ja/Nein-Einschätzung zur Fragestellung.
* **Ergebnisanzeige:** Anzeige einer kreativen Ergebnisansicht basierend auf der Antwort des API-Endpunkts.

## Die 5 Pflichtfragen

1.  **Welche Art von Immobilie besitzen Sie?** (Einfamilienhaus, Mehrfamilienhaus, Gewerbeimmobilie)
2.  **Wie ist Ihr Dach ausgerichtet?** (Süd, West, Ost, Nord, Keine Angabe) (Mehrfachauswahl möglich)
3.  **Wie alt ist Ihr Dach?** (Unter 5 Jahre, 5–15 Jahre, Über 15 Jahre, Keine Angabe)
4.  **Wie hoch ist Ihr Stromverbrauch pro Jahr?** (Unter 3.000 kWh, 3.000–5.000 kWh, Über 5.000 kWh, Keine Angabe)
5.  **Sind Sie auch an weiteren Energielösungen interessiert?** (Ja, Nein, Weiß nicht)

## Technologie-Stack

* [**Next.js**](https://nextjs.org/) (mit App Router)
* **React**

## Installation und Start

Um das Projekt lokal auszuführen, befolgen Sie bitte diese Schritte:

### 1. Repository klonen

### 2. Abhängigkeiten installieren
npm install
oder
yarn install

### 3. Entwicklungsserver starten
npm run dev
oder
yarn dev
