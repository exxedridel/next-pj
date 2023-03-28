import { useContext, useEffect, useState } from "react";
import MoonLoader from "react-spinners/MoonLoader";
import AppContext from "@/context/AppContext";
import Link from "next/link";
import Head from "next/head";
import Hero from "@/components/Hero";
import BannerFixed from "@/components/BannerFixed";
import GridContainer from "@/components/GridContainer";
import GridContainerRev from "@/components/GridContainerRev";
import HomeCards from "@/components/HomeCards";
import styles from "@/styles/Home.module.css";

export default function Home() {
  const { t, setHomeActive } = useContext(AppContext);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1250);

    setHomeActive("active");
    return function () {
      setHomeActive("");
    };
  }, []);

  return (
    <>
      <Head>
        <title>{`Setapps | ${t.home.pageTitle}`}</title>
        <meta name="description" content={t.home.pageDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {loading ? (
        <div className={styles.loader}>
          <MoonLoader
            color={"hsl(var(--pale-blue))"}
            loading={loading}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <Hero />
      )}

      <BannerFixed />

      <main id="main-content" className="container flow">
        <section className={`${styles.header} text-center`}>
          <h1 className={styles.h1}>{t.home.title1}</h1>
          <p className="fs-500">{t.home.p1}</p>
        </section>

        <GridContainer />

        <GridContainerRev />

        <h1 className={`${styles.h1} text-center`}>{t.home.title2}</h1>

        <HomeCards />

        <section className={styles.nextTabNav}>
          <h1 className={`${styles.h1} text-center`}>{t.home.title3}</h1>
          <Link className={styles.btnDiv} href="/services/webapp-calculator">
            <button className={`${styles.button}`} type="submit">
              {t.home.quoteBtn}
            </button>
          </Link>
        </section>
      </main>
    </>
  );
}
