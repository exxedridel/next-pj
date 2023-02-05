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
        <h2>Web App Development</h2>
        <div className={styles.articleEl}>
          <h3>Expertise</h3>
          <p>
            We understand the nuances of building successful SaaS web stack such
            as multi - tenancy, feature flags, i18n / l10n, role - based access,
            security compliance, and more.
          </p>
        </div>
        <div className={styles.articleEl}>
          <h3>Approach</h3>
          <p>
            We focus on establishing an effective team and processes to develop
            a sustainable product.
          </p>
        </div>
      </div>
    </article>
  );
};

export default GridContainer;
