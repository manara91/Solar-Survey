"use client";
import React from "react";
import Image from "next/image";
import Button from "../../elements/Button/Button";
import styles from "./results.module.css";
import yesImage from "../../../public/images/yes.svg";
import noImage from "../../../public/images/no.svg";

import { useRouter } from "next/navigation";

export default function ResultsPage({ searchParams }) {
  const router = useRouter();

  const searchParamsValue = React.use(searchParams);
  const isWorthIt = searchParamsValue.worthIt === "true";

  // const isWorthIt = searchParams.worthIt === "true";
  const sendMsg = () => {
    router.push("/contact/");
  };

  let title;
  let summaryText;
  let colorStyle;

  if (isWorthIt) {
    title = "Ihr Dach ist ideal für Solar!";

    summaryText = {
      main: "Die Ausgangslage für eine Solaranlage ist bei Ihnen ausgezeichnet",
      sub: "Wir empfehlen, die nächsten Schritte zu prüfen.",
    };
    colorStyle = "green";
  } else {
    title = "Derzeit nicht optimal";
    summaryText = {
      main: "Derzeit ist eine Solaranlage für Sie nicht empfehlenswert.",
      sub: "Eine weitere, detaillierte Prüfung kann jedoch noch lohnenswert sein.",
    };

    colorStyle = "negative";
  }

  return (
    <div className={styles.resultsContainer}>
      <h1
        className={`${styles.title} ${
          colorStyle === "negative"
            ? styles.negativeTitle
            : styles.positiveTitle
        }`}
      >
        {title}
      </h1>
      <div className={styles.resultText}>
        <p>{summaryText.main}</p>
        <p>{summaryText.sub}</p>
      </div>

      <Image
        className={styles.resultsImg}
        src={isWorthIt ? yesImage : noImage}
        width={500}
        height={300}
        alt="Result Image"
      />

      <div className={styles.contact}>
        <h2>Gerne beraten wir Sie persönlich!</h2>
        <p>Kontaktieren Sie uns für Ihre individuelle Solar-Lösung.</p>
        <Button text="Kontakt" handleClick={sendMsg} />
      </div>
    </div>
  );
}
