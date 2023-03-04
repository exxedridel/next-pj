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
          src="/nextjs-framework.png"
          alt="next.js framework"
          height={392}
          width={855}
          priority
        />
        <div className={styles.iconDiv}>
          <div className={styles.bgIcon}>
            <Image
              src="/technology.png"
              alt="technology icon"
              height={64}
              width={64}
              priority
            />
          </div>
        </div>
        <div className={`${styles.info}`}>
          <h3>{t.home.advantage.title1}</h3>
          <p>{t.home.advantage.description1}</p>
        </div>
      </Link>
      <Link className={styles.card} href="/products">
        <Image
          className={styles.image}
          src="/satisfaction.jpg"
          alt="happy entrepreneurs"
          height={427}
          width={640}
          priority
        />
        <div className={styles.iconDiv}>
          <div className={styles.bgIcon}>
            <Image
              src="/satisfaction-icon.png"
              alt="satisfaction icon"
              height={64}
              width={64}
              priority
            />
          </div>
        </div>
        <div className={`${styles.info}`}>
          <h3>{t.home.advantage.title2}</h3>
          <p>{t.home.advantage.description2}</p>
        </div>
      </Link>
      <Link className={styles.card} href="/about">
        <Image
          className={styles.image}
          src="/always-up.jpg"
          alt="contact card"
          height={427}
          width={640}
          priority
        />
        <div className={styles.iconDiv}>
          <div className={styles.bgIcon}>
            <Image
              src="/maintenance-icon.png"
              alt="Setapps icon"
              height={64}
              width={64}
              priority
            />
          </div>
        </div>
        <div className={`${styles.info}`}>
          <h3>{t.home.advantage.title3}</h3>
          <p>{t.home.advantage.description3}</p>
        </div>
      </Link>
    </section>
  );
};

export default HomeCards;
