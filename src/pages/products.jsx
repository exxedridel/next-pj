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
            Select one of our products:
          </h1>
          <Image
            src="/landing-page1.png"
            alt="Current project"
            width={512}
            height={512}
            priority
          />

          <div className={styles.tabList}>
            <button>Landing page</button>
            <button>Interactive web site</button>
            <button>Blog like</button>
            <button>Electronic commerce</button>
          </div>

          <article className={styles.destinationInfo}>
            <h2>Landing Page</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod rem
              facilis porro pariatur quidem possimus, at analme perspiciatis fuga
              suscipit aut, modi veritatis hic. Velit cuadros necessitatibus quia,
              officiis odio at ipsam autemticacion de 1 accusantium, recusandae quibusdam
              facilis labores.
            </p>
            <div className={styles.destinationMeta}>
              <div>
                <button className="ff-sans-title uppercase">Example 1</button>
              </div>
              <div>
                <button className="ff-sans-title uppercase">Example 2</button>
              </div>
            </div>
          </article>
        </section>
      </main>
    </>
  );
};

export default Products;
