import Image from "next/image";
import styles from "./HeroCalculator.module.css";

const HeroCalculator = () => {
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
        <h1 className="ff-sans-title fs-800">Web App Calculator</h1>
        <p className="fs-500">
          With this Setapps&lsquo; tool you can quote how much your desired web
          app it&apos;s going to cost.
        </p>
        <button
          onClick={scrollToContent}
          className={`${styles.heroBtn} btn btn-primary uppercase ff-sans-title`}
        >
          Lets start
        </button>
      </div>
    </section>
  );
};

export default HeroCalculator;
