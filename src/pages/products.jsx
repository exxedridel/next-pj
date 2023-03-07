import { useContext, useEffect, useState } from "react";
import AppContext from "@/context/AppContext";
import Head from "next/head";
import Image from "next/image";

import styles from "@/styles/Products.module.css";

const Products = () => {
  const { t, setProductsActive} = useContext(AppContext);
  const [currentProduct, setCurrentProduct] = useState(0);

  useEffect(() => {
    setProductsActive("active");
    return function () {
      setProductsActive("");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleClick(index) {
    setCurrentProduct(index);
    document.querySelector('[aria-current="true"]').setAttribute("aria-current", false);
    document.getElementById(index).setAttribute("aria-current", true);
  }

  return (
    <>
      <Head>
        <title>{`Setapps | ${t.productsPage.pageTitle}`}</title>
        <meta name="description" content="Our products to help you decide" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className={`${styles.main}`}>
        <section className={`${styles.products} container`}>
          <h1 className={`${styles.title}`}>{t.productsPage.title}</h1>
          <Image
            src={t.products[currentProduct].image}
            alt="Current project"
            width={512}
            height={512}
            priority
          />

          <div className={styles.tabList}>
            {t.products.map((product) => (
              <button
                key={product.id}
                id={product.id}
                onClick={() => handleClick(product.id)}
                aria-current={product.isCurrent}
              >
                {product.title}
              </button>
            ))}
          </div>

          <article className={styles.destinationInfo}>
            <h2>{t.products[currentProduct].title}</h2>
            <p>{t.products[currentProduct].description}</p>
            <div className={styles.destinationMeta}>
              {t.products[currentProduct].links.map((link, index) => (
                <a key={index} href={link} className={`${styles.button}`}>
                  {t.productsPage.example} {index + 1}
                </a>
              ))}
            </div>
          </article>
        </section>
      </main>
    </>
  );
};

export default Products;
