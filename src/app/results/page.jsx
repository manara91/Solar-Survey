export default function ResultsPage({ searchParams }) {
  const apiMessage = searchParams.message
    ? decodeURIComponent(searchParams.message)
    : "Keine Ergebnisnachricht verfügbar.";

  const isWorthIt = searchParams.worthIt === "true";

  let title;
  let summaryText;
  let colorStyle;

  if (isWorthIt) {
    title = "🥳 Ergebnis: Die Solaranlage lohnt sich!";
    summaryText =
      "Basierend auf der ersten Analyse der Daten (Simulation), sieht es sehr gut aus. Wir empfehlen, die nächsten Schritte zu prüfen.";
    colorStyle = "green";
  } else {
    title = "🤔 Ergebnis: Derzeit nicht optimal.";
    summaryText =
      "Basierend auf der ersten Analyse der Daten (Simulation), ist die Wirtschaftlichkeit aktuell nicht gegeben. Eine weitere, detaillierte Prüfung kann jedoch noch lohnenswert sein.";
    colorStyle = "orange";
  }

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h1 style={{ color: colorStyle }}>{title}</h1>

      <p style={{ fontSize: "1.1em", marginTop: "20px" }}>{summaryText}</p>

      <div
        style={{
          padding: "15px",
          border: `2px solid ${colorStyle}`,
          borderRadius: "8px",
          marginTop: "30px",
        }}
      >
        <h2>API-Antwort (Simulation):</h2>
        <p style={{ fontWeight: "bold", fontSize: "1.4em" }}>{apiMessage}</p>
      </div>
    </div>
  );
}
