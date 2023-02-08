import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={`${styles.footer} container text-center`}>
      © Copyright Setapps™ 2023. Todos los derechos reservados.
    </footer>
  );
}
export default Footer;
