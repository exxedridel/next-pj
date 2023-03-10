import { useContext } from "react";
import AppContext from "@/context/AppContext";
import Head from "next/head";
import styles from "@/styles/Privacy-policy.module.css";

const PrivacyPolicy = () => {
  const { t } = useContext(AppContext);
  return (
    <>
      <Head>
        <title>{`Setapps | ${t.privacy.pageTitle}`}</title>
        <meta name="description" content={t.privacy.pageDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={`${styles.privacy} container`}>
        <div className={styles.containerPrivacy}>
          <h1>{t.privacy.title}</h1>
          <span>{t.privacy.date}</span>
          <div className={styles.containerBody}>
            <p>
            {t.privacy.p1}
            </p>
            <br />
            <ul>
              <li>
              {t.privacy.li1}
              </li>
            </ul>
            <br />
            <p>
              <b>
              {t.privacy.p2}
              </b>
            </p>
            <br />
            <ul>
              <li>
              {t.privacy.li2}
              </li>
              <br />
              <li>
              {t.privacy.li3}
              </li>
            </ul>
            <p>
            {t.privacy.p3}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
