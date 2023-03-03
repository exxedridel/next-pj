import { useContext } from "react";
import AppContext from "@/context/AppContext";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const { t, homeActive, servicesActive, productsActive, aboutActive } =
    useContext(AppContext);
  const { mainFocus } = useContext(AppContext);

  return (
    <>
      <button onClick={mainFocus} className={styles.SkipToContent}>
        Skip to content
      </button>
      <nav className={`navbar navbar-expand-lg  ${styles.navCont}`}>
        <div className={`container-fluid container`}>
          <Link
            href="/"
            className={`navbar-brand ff-sans-title ${styles.navbarBrand}`}
          >
            <Image
              src="/setapps-logo.svg"
              alt="Setapps Logo"
              className={styles.logo}
              width={26}
              height={26}
              priority
            />
            Set<b>apps</b>
          </Link>
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
                  className={`nav-link ${homeActive} ${styles.navLink}`}
                  aria-current="page"
                >
                  {t.navbar.home}
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className={`nav-link dropdown-toggle ${servicesActive} ${styles.navLink}`}
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
                    <Link
                      href="/services/webapp-calculator"
                      className="dropdown-item"
                    >
                      {t.navbar.services1}
                    </Link>
                  </li>
                  <li>
                    <a
                      className="dropdown-item disabled"
                      href="#"
                      aria-disabled="true"
                    >
                      {t.navbar.services2}
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      className="dropdown-item disabled"
                      href="#"
                      aria-disabled="true"
                    >
                      {t.navbar.services3}
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link
                  href="/products"
                  className={`nav-link ${productsActive} ${styles.navLink}`}
                >
                  {t.navbar.products}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/about"
                  className={`nav-link ${aboutActive} ${styles.navLink}`}
                >
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
                  {t.navbar.language} &nbsp;
                  <Image
                    src="/translate.png"
                    alt="translate icon"
                    width={28}
                    height={28}
                    priority
                  />
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className={`${styles.langFlex} dropdown-item`} href="/" locale="en">
                      English&nbsp;
                      <Image
                        src="/united-states.png"
                        alt="usa icon"
                        width={23}
                        height={23}
                        priority
                      />
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className={`${styles.langFlex} dropdown-item`} href="/" locale="es">
                      Español&nbsp;
                      <Image
                        src="/mexico.png"
                        alt="mexico icon"
                        width={25}
                        height={25}
                        priority
                      />
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
