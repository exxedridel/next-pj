import { useContext, useEffect } from "react";
import AppContext from "@/context/AppContext";
import Image from "next/image";
import styles from "./AboutHeader.module.css";

const AboutHeader = () => {
  const { t, setAboutActive } = useContext(AppContext);

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
              src="/setapps.webp"
              alt="Linkedin logo"
              width={64}
              height={64}
              priority
            />
            <span>
              Set<b>apps</b>
            </span>{" "}
            Company
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
