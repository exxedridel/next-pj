import { useContext } from "react";
import AppContext from "@/context/AppContext";
import Head from "next/head";
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

      <main className="container">
        <h1 className="fs-900">{t.about.title}</h1>
        <p>{t.about.description}</p>
      </main>
    </>
  );
};

export default About;
