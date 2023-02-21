import { useContext, useState } from "react";
import AppContext from "@/context/AppContext";
import Head from "next/head";
import Image from "next/image";
import products from "@/data/productsData";
import styles from "@/styles/Products.module.css";

const Products = () => {
  const { t } = useContext(AppContext);
  const [currentProduct, setCurrentProduct] = useState(0);

  function handleClick(index) {
    setCurrentProduct(index);
    console.log(index);
  }

  return (
    <>
      <Head>
        <title>{`Setapps | Products`}</title>
        <meta name="description" content="Our products to help you decide" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className={`${styles.main}`}>
        <section className={`${styles.products} container`}>
          <h1 className={`${styles.numberedTitle}`}>
            Select one of our products:
          </h1>
          <Image
            src={products[currentProduct].image}
            alt="Current project"
            width={512}
            height={512}
            priority
          />

          <div className={styles.tabList}>
            {products.map((product) => (
              <button
                key={product.id}
                id={product.id}
                onClick={() => handleClick(product.id)}
              >
                {product.title}
              </button>
            ))}
          </div>

          <article className={styles.destinationInfo}>
            <h2>{products[currentProduct].title}</h2>
            <p>
              {products[currentProduct].description}
            </p>
            <div className={styles.destinationMeta}>
              <div>
                <a href={products[currentProduct].link1} className={`${styles.button}`}>Example</a>
              </div>
              {/* <div>
                <button className={`${styles.button}`}>example b</button>
              </div> */}
            </div>
          </article>
        </section>
      </main>
    </>
  );
};

export default Products;
