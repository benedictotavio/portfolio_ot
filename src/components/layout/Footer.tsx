import styles from "./Footer.module.css";
import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <footer className="py-md-3 mt-2 text-center">
        <ul className="nav justify-content-center pt-md-4 pb-md-4 mb-3">
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-body-secondary">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              target="blank"
              href="https://www.linkedin.com/in/otavio-benedicto-746421232/"
              className="nav-link px-2 text-body-secondary"
            >
              Linkedin
            </a>
          </li>
          <li className="nav-item">
            <a
              target="blank"
              href="https://www.instagram.com/mahhh_vieira/ "
              className="nav-link px-2 text-body-secondary"
            >
              Instagram
            </a>
          </li>
        </ul>
        <p className="text-center text-body-secondary">
          © {new Date().getFullYear()} Company, Inc&nbsp;|&nbsp;
          <span>
            <a target="blank" href="https://github.com/otaviobenedicto">
              <i>
                <AiFillGithub />
              </i>
              Created BY
            </a>
          </span>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
