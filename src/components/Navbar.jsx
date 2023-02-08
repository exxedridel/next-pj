import { useContext } from "react";
import AppContext from "@/context/AppContext";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const { t } = useContext(AppContext);
  const { mainFocus } = useContext(AppContext);

  return (
    <>
      <button onClick={mainFocus} className={styles.SkipToContent}>Skip to content</button>
      <nav className={`navbar navbar-expand-lg container ${styles.navCont}`}>
        <div className={`container-fluid`}>
          <a className={`navbar-brand ${styles.navbarBrand}`} href="#">
            <Image
              src="/setapps-logo.svg"
              alt="Setapps Logo"
              className={styles.logo}
              width={26}
              height={26}
              priority
            />
            Set<b>apps</b>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  href="/"
                  className={`nav-link active ${styles.navLink}`}
                  aria-current="page"
                >
                  {t.navbar.home}
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className={`nav-link dropdown-toggle ${styles.navLink}`}
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {t.navbar.services}
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link href="services/webapp-calculator" className="dropdown-item">
                      {t.navbar.services1}
                    </Link>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      {t.navbar.services2}
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      {t.navbar.services3}
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link href="about" className={`nav-link ${styles.navLink}`}>
                  {t.navbar.products}
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about" className={`nav-link ${styles.navLink}`}>
                  {t.navbar.about}
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav me-3 mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className={`nav-link dropdown-toggle ${styles.navLink}`}
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {t.navbar.language}
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" href="/" locale="en">
                      English
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/" locale="es">
                      Español
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <a href="https://wa.me/message/QNWKISFC6MBJI1">
              <button
                className={`btn btn-primary ff-sans-title ${styles.navBtn}`}
                type="submit"
              >
                {t.navbar.contactUs}
              </button>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
