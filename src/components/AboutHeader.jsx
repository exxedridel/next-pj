import { useContext } from "react";
import AppContext from "@/context/AppContext";
import Image from "next/image";
import styles from "./AboutHeader.module.css";

const AboutHeader = () => {
  const { t } = useContext(AppContext);

  return (
    <section className={`${styles.hero} `}>
      <div className="container">
        <Image
          className={`${styles.appDevImg} `}
          src="/dev-team.svg"
          alt="App development"
          width={512}
          height={512}
          priority
        />
        <div className={styles.title}>
          <h1>
            <Image
              className={styles.logo}
              src="/setapps-bg-logo.svg"
              alt="setapps logo"
              width={86}
              height={86}
              priority
            />
            <span>
              Set<b>apps</b>
            </span>
          </h1>
          <p className="fs-500">
            {t.about.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHeader;
