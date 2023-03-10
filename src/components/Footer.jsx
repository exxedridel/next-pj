import { useContext } from "react";
import AppContext from "@/context/AppContext";
import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

function Footer() {
  const { t } = useContext(AppContext);
  return (
    <footer className={`${styles.footer}`}>
      <div className={`${styles.privacyLink}`}>
        <Link href="/privacy-policy">{t.footer.privacyLink}</Link>
      </div>
      <div className="container">
        <p>
          © Set<b>apps</b>™ 2023 - {t.footer.rights}
        </p>
        <span>
          <a href="https://linkedin.com">
            <Image
              className={styles.brandLogo}
              src="/linkedin.png"
              alt="Linkedin logo"
              width={24}
              height={24}
              priority
            />
          </a>
          <a href="https://twitter.com">
            <Image
              className={styles.brandLogo}
              src="/twitter.png"
              alt="Twitter logo"
              width={24}
              height={24}
              priority
            />
          </a>
          <a href="https://facebook.com">
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
