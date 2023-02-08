import Image from "next/image";
import styles from "./HeroCalculator.module.css";

const HeroCalculator = () => {
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
        <h1 className="ff-sans-title fs-800">Web App Calculator</h1>
        <p className="fs-500">
          With this Setapps&lsquo; tool you can quote how much your desired web
          app it&apos;s going to be.
        </p>
        <button className={`btn btn-primary uppercase ff-sans-title ${styles.heroBtn}`}>Lets start</button>
      </div>
    </section>
  );
};

export default HeroCalculator;
