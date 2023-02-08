import { useContext } from "react";
import AppContext from "@/context/AppContext";
// import Head from "next/head";
import Image from "next/image";
import styles from "./webapp-calculator.module.css";

const WebappCalculator = () => {
  const { t } = useContext(AppContext);
  return (
    <main className={`${styles.main} container`}>
        <Image
          className={`${styles.appDevImg} `}
          src="/app-development.png"
          alt="App development"
          width={512}
          height={512}
        />
      <section className={styles.title}>
        <h1 className="ff-sans-title fs-800">Web App Calculator</h1>
        <p className="fs-500">
          With this Setapps&lsquo; tool you can quote how much your desired web
          app it&apos;s going to be.
        </p>
      </section>
    </main>
  );
};

export default WebappCalculator;
