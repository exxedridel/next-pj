import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light box-shadow">
      <div className={`container-fluid ${styles.navCont}`}>
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 bold">
            <li className="nav-item">
              <Link href="/" className={`nav-link active ${styles.navLink}`} aria-current="page" >
                HOME
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
                SERVICES
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link href="#" className="dropdown-item">
                    Web app calculator
                  </Link>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Logo-svg creation
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Improve performance
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link href="about" className={`nav-link ${styles.navLink}`}>
                ABOUT
              </Link>
            </li>
          </ul>
          <a href="https://wa.me/message/QNWKISFC6MBJI1">
            <button className={`btn btn-primary ${styles.navBtn}`} type="submit">
              LET&apos;S CONNECT
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
