import { useContext, useEffect } from "react";
import AppContext from "@/context/AppContext";
import Head from "next/head";
import AboutHeader from "@/components/AboutHeader";
import ContactForm from "@/components/ContactForm";
import styles from "@/styles/About.module.css";

const About = () => {
  const { t, setAboutActive } = useContext(AppContext);

  useEffect(() => {
    setAboutActive("active");   
    return function () {
      setAboutActive("");
    };
    
  }, []);

  return (
    <>
      <Head>
        <title>{`Setapps | ${t.about.pageTitle}`}</title>
        <meta name="description" content={t.about.pageDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className={styles.main}>
        <AboutHeader />
        <hr className={styles.hr} />
        <article className={`${styles.mision} container`}>
          <h2>{t.about.mission.title}</h2>
          <p>{t.about.mission.description}</p>
        </article>
        <article className={`${styles.values} container`}>
          <h2>{t.about.values.title}</h2>
          <div className={styles.elements}>
            <div className={styles.value}>
              <h3>{t.about.values.value1}</h3>
              <p>{t.about.values.description1}</p>
            </div>
            <div className={styles.value}>
              <h3>{t.about.values.value2}</h3>
              <p>{t.about.values.description2}</p>
            </div>
            <div className={styles.value}>
              <h3>{t.about.values.value3}</h3>
              <p>{t.about.values.description3}</p>
            </div>
            <div className={styles.value}>
              <h3>{t.about.values.value4}</h3>
              <p>{t.about.values.description4}</p>
            </div>
            <div className={styles.value}>
              <h3>{t.about.values.value5}</h3>
              <p>{t.about.values.description5}</p>
            </div>
            <div className={styles.value}>
              <h3>{t.about.values.value6}</h3>
              <p>{t.about.values.description6}</p>
            </div>
          </div>
        </article>
        <ContactForm />
      </main>
    </>
  );
};

export default About;
