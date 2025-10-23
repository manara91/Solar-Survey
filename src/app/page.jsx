"use client";

import Image from "next/image";

import styles from "./page.module.css";
import mainPhoto from "../../public/images/main-photo.svg";

import { useRouter } from "next/navigation";
import Button from "../elements/Button/Button";

export default function Home() {
  const router = useRouter();
  const handleSurveyStart = () => {
    router.push("/survey/");
  };

  return (
    <div className={styles.container}>
      <div className={styles.col}>
        <h1 className={styles.title}>
          Lohnt sich eine Solaranlage für Ihr Dach?
        </h1>
        <p className={styles.description}>
          Beantworten Sie einfache Fragen und erhalten Sie Ihre erste,
          unverbindliche Einschätzung.
        </p>

        <Button
          text="Kostenlos prüfen"
          handleClick={handleSurveyStart}
        ></Button>
      </div>
      <div className={styles.col}>
        <Image className={styles.img} src={mainPhoto} alt="main Photo Image" />
      </div>
    </div>
  );
}
