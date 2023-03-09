import { useContext } from "react";
import AppContext from "@/context/AppContext";
import { Fade } from "react-awesome-reveal";
import styles from "./BannerFixed.module.css";

const BannerFixed = () => {
  const { t } = useContext(AppContext);

  return (
    <div id="banner" className={`${styles.heroFixed} container`}>
      <Fade duration="2000">
        <h1 className={styles.fadeText}>{t.home.banner}</h1>
      </Fade>
    </div>
  );
};

export default BannerFixed;
