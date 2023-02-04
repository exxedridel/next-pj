import { useContext } from "react";
import AppContext from "@/context/AppContext";
import Head from "next/head";
import Hero from "@/components/Hero";
import GridContainer from "@/components/GridContainer";
import styles from "@/styles/Home.module.css";

// import { Inter } from "@next/font/google";
// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { t } = useContext(AppContext);

  return (
    <>
      <Head>
        <title>Setapps | {t.home.pageTitle}</title>
        <meta
          name="description"
          content="Web App development and all related to make´em sustainable."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Hero />
      <main id="main-content" className="container flow">
        <div className={`${styles.header} text-center`}>
          <h1 className="ff-sans-title fs-700">Our Services</h1>
          <p className="fs-500">
            We are a Software as a Service (SaaS) development company. With us, you leverage our
            expertise to build world class products.
          </p>
        </div>
        <GridContainer />
        <footer className="container text-center">
          © Copyright Setapps™ 2023. Todos los derechos reservados.
        </footer>
      </main>
    </>
  );
}
