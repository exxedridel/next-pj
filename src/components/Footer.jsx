import Image from "next/image";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={`${styles.footer}`}>
      <div className="container">
        <p>© Set<b>apps</b>™ 2023 - Todos los derechos reservados.</p>
        <Image
          className={styles.logo}
          src="/linkedin.png"
          alt="Linkedin logo"
          width={28}
          height={28}
          priority
        />
      </div>
    </footer>
  );
}
export default Footer;
