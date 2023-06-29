import Card from "../../layout/items/Card";
import styles from "./BackendPortifolio.module.css";

const BackendPortifolio = () => {
  return (
    <div id={styles.backend}>
      <div className={styles.card_content}>
        <Card title="Api de Sistema de Pagamento" secondBtn={false} />
        <Card title="Api para gestão de Estacionamento" secondBtn={false} />
        <Card title="Api E-Commerce" secondBtn={false} />
      </div>
    </div>
  );
};

export default BackendPortifolio;
