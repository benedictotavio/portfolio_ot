import Logo from "../../../assets/logo.png";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav id={styles.navbar} className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={Logo} alt="Logo Otavio Benedicto portfolio" srcSet="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse d-md-flex justify-content-lg-center"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <a className="nav-link mx-md-3" aria-current="page" href="/backend">
              Backend
            </a>
            <a className="nav-link mx-md-3" aria-current="page" href="/frontend">
              Frontend
            </a>
            <a className="nav-link mx-md-3" href="#">
              Presentation letter
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
