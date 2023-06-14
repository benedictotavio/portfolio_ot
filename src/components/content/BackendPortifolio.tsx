import Card from "../layout/Card";
import styles from "./BackendPortifolio.module.css";

const BackendPortifolio = () => {
  return (
    <div id={styles.backend}>
      <div className={styles.card_content}>
        <Card title="Api de Sistema de Pagamento" />
        <Card title="Api para gestão de Estacionamento" />
        <Card title="Server side de ecommerce" />
      </div>
    </div>
  );
};

export default BackendPortifolio;
