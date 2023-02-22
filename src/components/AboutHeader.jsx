import Image from "next/image";
import styles from "./AboutHeader.module.css";

const AboutHeader = () => {
  return (
      <section className={`${styles.hero} container`}>
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
            Set<b>apps</b> Company
          </h1>
          <p className="fs-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut culpa
            quos expedita maiores aperiam, consequuntur, quisquam rerum
            reprehenderit dolorum quasi nisi magni, labore alias vitae. Saepe!
          </p>
        </div>
      </section>
  );
};

export default AboutHeader;
