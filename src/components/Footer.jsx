import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={`${styles.footer}`}>
      <p className="container text-center fs-200">© Copyright Setapps™ 2023. Todos los derechos reservados.</p>
    </footer>
  );
}
export default Footer;
