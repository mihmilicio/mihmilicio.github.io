import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => (
  <footer className={styles.footer}>
    <a href="https://github.com/mihmilicio/" target="_blank">
      <FontAwesomeIcon icon={faGithub} size="2x" />
    </a>
    <a href="mailto:milenamilicio@hotmail.com" target="_blank">
      <FontAwesomeIcon icon={faEnvelope} size="2x" />
    </a>
    <a
      href="https://www.linkedin.com/in/milena-milicio-7b566116b/"
      target="_blank"
    >
      <FontAwesomeIcon icon={faLinkedin} size="2x" />
    </a>
    <a href="https://www.instagram.com/mihmilicio/" target="_blank">
      <FontAwesomeIcon icon={faInstagram} size="2x" />
    </a>
  </footer>
);
