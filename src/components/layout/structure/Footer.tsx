import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <div id={styles.footer}>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top">
        <p className="col-md-4 mb-0 text-muted">
          © {new Date().getFullYear()} Company, Inc
        </p>
        <ul className="nav col-md-4 justify-content-end align-items-center">
          <li className="nav-item mx-2">
            <Link
              to="https://www.linkedin.com/in/otavio-benedicto-746421232"
              target="_blank"
              className="text-decoration-none"
            >
              Linkedin
            </Link>
          </li>
          <li>
            <Link
              to="https://github.com/otaviobenedicto"
              className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
            >
              <AiFillGithub fontSize={32} color="#FAECBD" />
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
