import { useContext } from "react";
import AppContext from "@/context/AppContext";
import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Products.module.css";

const Products = () => {
  const { t } = useContext(AppContext);
  return (
    <>
      <Head>
        <title>{`Setapps | Products`}</title>
        <meta name="description" content="Our products to help you decide" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className={`${styles.main}`}>
        <section className={`${styles.products} container`}>
          <h1 className={`${styles.numberedTitle} ff-sans-title`}>
            Select a product
          </h1>
          <Image
            src="/devices-coffe2-setapps.jpg"
            alt="Current project"
            width={350}
            height={350}
            priority
          />

          <div className={styles.tabList}>
            <button className="uppercase ff-sans-title fs-100">
              Landing Page
            </button>
            <button className="uppercase ff-sans-title fs-100">
              Landing Page
            </button>
            <button className="uppercase ff-sans-title fs-100">
              Landing Page
            </button>
            <button className="uppercase ff-sans-title fs-100">
              Landing Page
            </button>
          </div>

          <article className={styles.destinationInfo}>
            <h2 className="fs-800 uppercase ff-serif">Landing Page</h2>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui saepe
              sequi eius nesciunt quam reprehenderit neque earum animi quas,
              atque, veritatis ratione perferendis eum ut?
            </p>

            <div className={styles.destinationMeta}>
              <div>
                <button className="ff-serif uppercase">Link 1</button>
              </div>
              <div>
                <button className="ff-serif uppercase">Link 2</button>
              </div>
            </div>
          </article>
        </section>
      </main>
    </>
  );
};

export default Products;
