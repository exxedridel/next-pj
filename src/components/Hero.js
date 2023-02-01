import Image from "next/image";
import styles from "./Hero.module.css";

const Hero = () => {
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
      <div onClick={scrollToContent} className={`container ${styles.overlap}`}>
        <h1>
          We make your <b>vision</b>
          <br />
          come to <b>life</b>
        </h1>
        <p>
          We develop SaaS solutions, and everything around it to make them
          sustainable. With us, you leverage more than 20 years of software
          development success to make your vision come to life.
        </p>
        <button className={`btn btn-primary ${styles.navBtn}`} type="submit">
          Learn more
        </button>
      </div>
    </section>
  );
};

export default Hero;
