import { useContext } from "react";
import AppContext from "@/context/AppContext";
import Image from "next/image";
import styles from "./Hero.module.css";

const Hero = () => {
  const { t } = useContext(AppContext);
  const { mainRef } = useContext(AppContext);

  function scrollToContent() {
    const elBanner = document.getElementById("banner");
    const elMainCont = document.getElementById("main-content");
    setTimeout(() => {
      elBanner.scrollIntoView({ behavior: 'smooth' });
    }, 100);
    setTimeout(() => {
      elMainCont.scrollIntoView({ behavior: 'smooth' });
    }, 2500);
  }

  return (
    <section className={styles.hero}>
      <Image
        className={styles.bgImage}
        src="/night-stars-bg.jpg"
        alt="Night stars sky landscape"
        width={2000}
        height={1333}
        priority
      />
      <div className={`container ${styles.overlap}`}>
        <h1 className="ff-sans-title fs-800">
          {t.hero.title1} <b>{t.hero.title2}</b>
          <br />
          {t.hero.title3} <b>{t.hero.title4}</b>
        </h1>
        <p className="fs-400">{t.hero.description}</p>
        <button
          ref={mainRef}
          onClick={scrollToContent}
          className={`btn btn-primary uppercase ff-sans-title ${styles.heroBtn}`}
          type="submit"
        >
          {t.hero.learnMore}
        </button>
      </div>
    </section>
  );
};

export default Hero;
