import { useContext } from "react";
import AppContext from "@/context/AppContext";
import Head from "next/head";
import AboutHeader from "@/components/AboutHeader";
import ContactForm from "@/components/ContactForm";
import styles from "@/styles/About.module.css";

const About = () => {
  const { t } = useContext(AppContext);

  return (
    <>
      <Head>
        <title>{`Setapps | ${t.about.pageTitle}`}</title>
        <meta name="description" content="About Setapps Company" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className={styles.main}>
        <AboutHeader />
        <hr className={styles.hr} />
        <article className={`${styles.mision} container`}>
          <h2>Our Mission</h2>
          <p>
            To simplify the process of making our customers product vision come
            to life. And to leverage our extensive experience to help expand
            that vision and deliver delight.
          </p>
        </article>
        <article className={`${styles.values} container`}>
          <h2>Our Values</h2>
          <div className={styles.elements}>
            <div className={styles.value}>
              <h3>Lorem, ipsum dolor</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing</p>
            </div>
            <div className={styles.value}>
              <h3>Lorem, ipsum dolor</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing</p>
            </div>
            <div className={styles.value}>
              <h3>Lorem, ipsum dolor</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing</p>
            </div>
            <div className={styles.value}>
              <h3>Lorem, ipsum dolor</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing</p>
            </div>
            <div className={styles.value}>
              <h3>Lorem, ipsum dolor</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing</p>
            </div>
            <div className={styles.value}>
              <h3>Lorem, ipsum dolor</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing</p>
            </div>
          </div>
        </article>
        <ContactForm/>
      </main>
    </>
  );
};

export default About;
