import Image from "next/image";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={`${styles.footer}`}>
      <div className="container">
        <p>
          © Set<b>apps</b>™ 2023 - Todos los derechos reservados.
        </p>
        <span>
          <a href="https://google.com">
            <Image
              className={styles.brandLogo}
              src="/linkedin.png"
              alt="Linkedin logo"
              width={24}
              height={24}
              priority
            />
          </a>
          <a href="https://google.com">
            <Image
              className={styles.brandLogo}
              src="/twitter.png"
              alt="Twitter logo"
              width={24}
              height={24}
              priority
            />
          </a>
          <a href="https://google.com">
            <Image
              className={styles.brandLogo}
              src="/facebook.png"
              alt="Facebook logo"
              width={24}
              height={24}
              priority
            />
          </a>
        </span>
      </div>
    </footer>
  );
}
export default Footer;
