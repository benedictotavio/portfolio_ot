import Card from "../../layout/Card";
import styles from "./FrontendPortfolio.module.css";

const FrontendPortfolio = () => {
  return (
    <div id={styles.frontend}>
      <div className={styles.card_content}>
        <Card
          title="Mayara Vieira Psicóloga"
          secondBtn={true}
          linkSite="https://may-psico.vercel.app/"
        />
        <Card
          title="MD Guinchos"
          secondBtn={true}
          linkSite="https://mdguincho.com/"
        />
        <Card
          title="MD Guincho"
          secondBtn={true}
          linkSite="https://md-guinchos.vercel.app/"
        />
      </div>
    </div>
  );
};

export default FrontendPortfolio;
