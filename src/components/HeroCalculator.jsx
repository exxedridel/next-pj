import { useContext } from "react";
import AppContext from "@/context/AppContext";
import Image from "next/image";
import styles from "./HeroCalculator.module.css";

const HeroCalculator = () => {
  const { t } = useContext(AppContext);

  function scrollToContent() {
    const element = document.getElementById("main-content");
    element.scrollIntoView();
  }
  return (
    <section className={`${styles.hero} container`}>
      <Image
        className={`${styles.appDevImg} `}
        src="/app-development.png"
        alt="App development"
        width={512}
        height={512}
        priority
      />
      <div className={styles.title}>
        <h1>{t.services.calculator.title}</h1>
        <p className="fs-500">
          {t.services.calculator.description}
        </p>
        <button
          onClick={scrollToContent}
          className={`${styles.heroBtn} btn btn-primary uppercase ff-sans-title`}
        >
          {t.services.calculator.startBtn}
        </button>
      </div>
    </section>
  );
};

export default HeroCalculator;
