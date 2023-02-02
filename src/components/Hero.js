import Image from "next/image";
import { useRouter } from "next/router";
import en from "../../public/locale/en";
import es from "../../public/locale/es";
import styles from "./Hero.module.css";

const Hero = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : es;

  function scrollToContent() {
    const element = document.getElementById("main-content");
    element.scrollIntoView();
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
      <div
        onClick={scrollToContent}
        className={`container flow-normal ${styles.overlap}`}
      >
        <h1 className="ff-sans-title fs-900">
          {t.hero.title1} <b>{t.hero.title2}</b>
          <br />
          {t.hero.title3} <b>{t.hero.title4}</b>
        </h1>
        <p className="fs-500">
          {t.hero.description}
        </p>
        <button
          className={`btn btn-primary uppercase fs-200 bold-text ${styles.navBtn}`}
          type="submit"
        >
          {t.hero.learnMore}
        </button>
      </div>
    </section>
  );
};

export default Hero;
