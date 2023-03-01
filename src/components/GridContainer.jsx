import { useContext } from "react";
import AppContext from "@/context/AppContext";
import Image from "next/image";
import styles from "./GridContainer.module.css";

const GridContainer = () => {
  const { t } = useContext(AppContext);
  return (
    <article className={styles.GridContainer}>
      <div className={styles.divImg}>
        <Image
          className={styles.webDevImg}
          src="/webapp-development.png"
          alt="Webapp developing"
          width={540}
          height={360}
          priority
        />
      </div>
      <div className={styles.information}>
        <h2>{t.home.webappDev.title}</h2>
        <div className={styles.articleEl}>
          <h3>{t.home.webappDev.subtitle1}</h3>
          <p>
            {t.home.webappDev.p1}
          </p>
        </div>
        <div className={styles.articleEl}>
          <h3>{t.home.webappDev.subtitle2}</h3>
          <p>
          {t.home.webappDev.p2}
          </p>
        </div>
      </div>
    </article>
  );
};

export default GridContainer;
