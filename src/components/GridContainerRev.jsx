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
        <h2>Web SEO Branding</h2>
        <div className={styles.articleEl}>
          <h3>Full range of skillsets</h3>
          <p>
            Building a successful product requires a range of skillsets and
            specializations. Our Agile Pod Teams are the simplest way to
            bootstrap, scale and sustain any Web App / SaaS development needs.
          </p>
        </div>
        <div className={styles.articleEl}>
          <h3>Mature processes</h3>
          <p>
            You leverage not only our mature processes but decades of experience
            building such products at scale.
          </p>
        </div>
      </div>
    </article>
  );
};

export default GridContainerRev;
