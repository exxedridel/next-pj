import { useContext } from "react";
import AppContext from "@/context/AppContext";
import Link from "next/link";
import Image from "next/image";
import styles from "./HomeCards.module.css";

const HomeCards = () => {
  const { t } = useContext(AppContext);
  return (
    <section className={styles.homeCards}>
      
        <Link className={styles.card} href="/services/webapp-calculator">
          <Image
            className={styles.image}
            src="/night-stars-bg.jpg"
            alt="contact card"
            height={220}
            width={300}
            priority
          />
          <div className={styles.iconDiv}>
            <Image
              src="/setapps.webp"
              alt="Setapps icon"
              height={68}
              width={68}
              priority
            />
          </div>
          <div className={`${styles.info}`}>
            <h3>{t.home.advantage.title1}</h3>
            <p>
            {t.home.advantage.description1}
            </p>
          </div>
        </Link>
        <Link className={styles.card} href="/products">
          <Image
            className={styles.image}
            src="/night-stars-bg.jpg"
            alt="contact card"
            height={220}
            width={300}
            priority
          />
          <div className={styles.iconDiv}>
            <Image
              src="/setapps.webp"
              alt="Setapps icon"
              height={68}
              width={68}
              priority
            />
          </div>
          <div className={`${styles.info}`}>
            <h3>{t.home.advantage.title2}</h3>
            <p>
             {t.home.advantage.description2}
            </p>
          </div>
        </Link>
        <Link className={styles.card} href="/about">
          <Image
            className={styles.image}
            src="/night-stars-bg.jpg"
            alt="contact card"
            height={220}
            width={300}
            priority
          />
          <div className={styles.iconDiv}>
            <Image
              src="/setapps.webp"
              alt="Setapps icon"
              height={68}
              width={68}
              priority
            />
          </div>
          <div className={`${styles.info}`}>
            <h3>{t.home.advantage.title3}</h3>
            <p>
            {t.home.advantage.description3}
            </p>
          </div>
        </Link>
      
      
    </section>
  );
};

export default HomeCards;
