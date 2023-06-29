import Card from "../../layout/Card";
import styles from "./FrontendPortfolio.module.css";
import { SiVite, SiPreact, SiCss3 } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";

const FrontendPortfolio = () => {
  return (
    <div id={styles.frontend}>
      <div className={styles.card_content}>
        <Card
          title="Mayara Vieira Psicóloga"
          secondBtn={true}
          linkSite="https://may-psico.vercel.app"
          stacksIcon={[SiVite, SiPreact, FaBootstrap, SiCss3]}
        />
        <Card
          title="MD Guinchos"
          secondBtn={true}
          linkSite="https://mdguincho.com"
          stacksIcon={[]}
        />
        <Card
          title="MD Guincho"
          secondBtn={true}
          linkSite="https://md-guinchos.vercel.app"
          stacksIcon={[]}
        />
      </div>
    </div>
  );
};

export default FrontendPortfolio;
