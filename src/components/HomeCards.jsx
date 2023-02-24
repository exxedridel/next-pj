import Image from "next/image";
import styles from "./HomeCards.module.css";

const HomeCards = () => {
  function scrollToContact() {
    const element = document.getElementById("contact-sect");
    element.scrollIntoView();
  }

  return (
    <section className={styles.homeCards}>
      <article onClick={scrollToContact} className={styles.card}>
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
        <div className={`${styles.info} fs-300`}>
          <h3 className="uppercase ff-sans-cond letter-spacing-3">
            Web App Calculator
          </h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
            consequuntur veniam nulla error dignissimos assumenda excepturi fuga
            quae, dolorum eius minus ad suscipit beatae commodi eligendi culpa
            aperiam hic at.
          </p>
        </div>
      </article>
      <article onClick={scrollToContact} className={styles.card}>
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
        <div className={`${styles.info} fs-300`}>
          <h3 className="uppercase ff-sans-cond letter-spacing-3">
            Web App Calculator
          </h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
            consequuntur veniam nulla error dignissimos assumenda excepturi fuga
            quae, dolorum eius minus ad suscipit beatae commodi eligendi culpa
            aperiam hic at.
          </p>
        </div>
      </article>
      <article onClick={scrollToContact} className={styles.card}>
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
        <div className={`${styles.info} fs-300`}>
          <h3 className="uppercase ff-sans-cond letter-spacing-3">
            Web App Calculator
          </h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
            consequuntur veniam nulla error dignissimos assumenda excepturi fuga
            quae, dolorum eius minus ad suscipit beatae commodi eligendi culpa
            aperiam hic at.
          </p>
        </div>
      </article>
    </section>
  );
};

export default HomeCards;
