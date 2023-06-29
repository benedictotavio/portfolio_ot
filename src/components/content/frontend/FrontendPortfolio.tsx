import Card from "../../layout/Card";
import styles from "./FrontendPortfolio.module.css";

const FrontendPortfolio = () => {
  return (
      <div id={styles.frontend}>
        <div className={styles.card_content}>
          <Card title="Mayara Vieira Psicóloga" />
          <Card title="Api para gestão de Estacionamento" />
          <Card title="Server side de ecommerce" />
        </div>
      </div>
  );
};

export default FrontendPortfolio;
