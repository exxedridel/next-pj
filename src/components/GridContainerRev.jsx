import { useContext } from "react";
import AppContext from "@/context/AppContext";
import Image from "next/image";
import styles from "./GridContainerRev.module.css";

const GridContainerRev = () => {
  const { t } = useContext(AppContext);
  return (
    <article className={styles.GridContainer}>
      <div className={styles.divImg}>
        <Image
          className={styles.webDevImg}
          src="/agile-teams.svg"
          alt="Webapp developing"
          width={540}
          height={360}
          priority
        />
      </div>
      <div className={styles.information}>
        <h2>{t.home.brandSEO.title}</h2>
        <div className={styles.articleEl}>
          <h3>{t.home.brandSEO.subtitle1}</h3>
          <p>
          {t.home.brandSEO.p1}
          </p>
        </div>
        <div className={styles.articleEl}>
          <h3>{t.home.brandSEO.subtitle2}</h3>
          <p>
          {t.home.brandSEO.p2}
          </p>
        </div>
      </div>
    </article>
  );
};

export default GridContainerRev;
