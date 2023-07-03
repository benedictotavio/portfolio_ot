import Card from "../../layout/items/Card";
import styles from "./BackendPortifolio.module.css";
import {
  SiNestjs,
  SiNodedotjs,
  SiMongodb,
  SiMongoose,
  SiTypescript,
} from "react-icons/si";

const BackendPortifolio = () => {
  return (
    <div id={styles.backend}>
      <div className={styles.card_content}>
        <Card
          title="Api de Sistema de Troca de Ingressos + Login"
          secondBtn={false}
          linkGit={"https://github.com/otaviobenedicto/pAID_2.0"}
          stacksIcon={[
            { icon: SiNodedotjs, color: "#026E00", name: "Node" },
            { icon: SiNestjs, color: "#E0234E", name: "Nest" },
            { icon: SiMongodb, color: "#00ED64", name: "MongoDB" },
            { icon: SiMongoose, color: "#A03333", name: "Mongoose" },
            { icon: SiTypescript, color: "#3178C6", name: "TypeScript" },
          ]}
          text={
            "Api para sistema de commerce para troca/ vendas de ingressos, tickets e algumas items exclusivamente para plataformas digitais."
          }
        />
      </div>
    </div>
  );
};

export default BackendPortifolio;
