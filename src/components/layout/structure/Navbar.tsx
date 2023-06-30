import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav id={styles.navbar} className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <picture>
            <source
              media="(max-width: 600px)"
              srcSet="/src/assets/logo_sm.jpg 600w"
              sizes="600px"
            />
            <source srcSet="/src/assets/logo.jpg 1280w" sizes="1280px" />
            <img src="/src/assets/logo.jpg" />
          </picture>
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
            <a className="nav-link mx-md-3" aria-current="page" href="/project">
              Projetos
            </a>
            <a className="nav-link mx-md-3" href="#">
              Carta de apresentação
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
