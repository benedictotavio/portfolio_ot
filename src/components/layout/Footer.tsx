import styles from "./Footer.module.css";
import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <div id={styles.footer} className="container-fluid">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top">
        <p className="col-md-4 mb-0 text-muted">
          © {new Date().getFullYear()} Company, Inc
        </p>

        <a
          href="/"
          className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
        >
          <AiFillGithub fontSize={24} color={"yellow"} />
        </a>

        <ul className="nav col-md-4 justify-content-end">
          <li className="nav-item">
            <a href="" className="nav-link px-2 text-muted">
              Linkedln
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-muted">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-muted">
              Pricing
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
