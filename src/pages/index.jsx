import { useContext } from "react";
import AppContext from "@/context/AppContext";
import Link from "next/link";
import Head from "next/head";
import Hero from "@/components/Hero";
import GridContainer from "@/components/GridContainer";
import GridContainerRev from "@/components/GridContainerRev";
import HomeCards from "@/components/HomeCards";
import styles from "@/styles/Home.module.css";

// import { Inter } from "@next/font/google";
// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { t } = useContext(AppContext);

  return (
    <>
      <Head>
        <title>{`Setapps | ${t.home.pageTitle}`}</title>
        <meta
          name="description"
          content="WebApp development and all related to make 'em sustainable."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Hero />

      <main id="main-content" className="container flow">
        <section className={`${styles.header} text-center`}>
          <h1 className={styles.h1}>Our Services</h1>
          <p className="fs-500">
            We are a Software as a Service (SaaS) development company. With us,
            you leverage our expertise to build world class products.
          </p>
        </section>

        <GridContainer />

        <GridContainerRev />

        <h1 className={`${styles.h1} text-center`}>
          Set<b>apps</b> Advantage
        </h1>

        <HomeCards />
        <section className={styles.nextTabNav}>
          <h1 className={`${styles.h1} text-center`}>Quote your web app now!</h1>
          <Link
            className={styles.btnDiv}
            href="/services/webapp-calculator"
          >
            <button className={`${styles.button}`} type="submit">
              Quote
            </button>
          </Link>
        </section>
      </main>
    </>
  );
}
