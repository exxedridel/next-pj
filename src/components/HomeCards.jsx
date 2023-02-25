import Link from "next/link";
import Image from "next/image";
import styles from "./HomeCards.module.css";

const HomeCards = () => {
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
            <h3>Reliable Technology</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Obcaecati consequuntur veniam nulla error dignissimos assumenda
              excepturi fuga quae, dolorum eius minus ad suscipit beatae commodi
              eligendi culpa aperiam hic at.
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
            <h3>Long-Term Solutions</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Obcaecati consequuntur veniam nulla error dignissimos assumenda
              excepturi fuga quae, dolorum eius minus ad suscipit beatae commodi
              eligendi culpa aperiam hic at.
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
            <h3>Customer Oriented</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Obcaecati consequuntur veniam nulla error dignissimos assumenda
              excepturi fuga quae, dolorum eius minus ad suscipit beatae commodi
              eligendi culpa aperiam hic at.
            </p>
          </div>
        </Link>
      
      
    </section>
  );
};

export default HomeCards;
