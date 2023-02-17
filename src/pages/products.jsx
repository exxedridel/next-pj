import { useContext } from "react";
import AppContext from "@/context/AppContext";
import Head from "next/head";
import styles from "@/styles/Products.module.css";

const Products = () => {
  const { t } = useContext(AppContext);
  return (
    <>
      <Head>
        <title>{`Setapps | Products`}</title>
        <meta name="description" content="Quote your desired Web App." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className={styles.main}>
        <section className="container">
          <h1 className="fs-800">Products</h1>
          <p>{t.about.description}</p>
        </section>
      </main>
    </>
  );
};

export default Products;
