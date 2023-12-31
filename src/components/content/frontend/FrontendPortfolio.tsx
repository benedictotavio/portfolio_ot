import Card from "../../layout/items/Card";
import styles from "./FrontendPortfolio.module.css";
import {
  SiVitest,
  SiPreact,
  SiCss3,
  SiTypescript,
  SiWordpress,
  SiAmazonaws,
  SiElementor,
  SiReact,
  SiBootstrap,
  SiSass,
  SiNodedotjs,
} from "react-icons/si";

const FrontendPortfolio = () => {
  return (
    <div id={styles.frontend}>
      <div className={styles.card_content}>
        <Card
          title="Mayara Vieira Psicóloga"
          secondBtn={true}
          linkSite="https://may-psico.vercel.app"
          stacksIcon={[
            { icon: SiVitest, name: "Vite", color: "#ab4bfe" },
            { icon: SiPreact, name: "PReact", color: "#673ab8" },
            { icon: SiCss3, name: "CSS", color: "#264de4" },
            { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
            { icon: SiBootstrap, name: "Bootstrap", color: "#563d7c" },
          ]}
          linkGit="https://github.com/otaviobenedicto/may-psico"
          text="Site estatico e com responsividade total, com mais de 95% de desempenho, utilizando as tecnologia mais eficientes do mercado como Preact, Bootstrap e compilador VITE.
          "
        />
        <Card
          title="MD Guincho"
          secondBtn={true}
          linkSite="https://mdguincho.com"
          stacksIcon={[
            { icon: SiWordpress, name: "Wordpress", color: "#3858E9" },
            { icon: SiAmazonaws, name: "AWS", color: "#EC7211" },
            { icon: SiElementor, name: "Elementor", color: "#92003B" },
          ]}
          linkGit="https://github.com/otaviobenedicto/md_guinchos"
          text="Site estatico desenvlvido em WordPress e Elementor, para a construção e postado em cloud AWS(Amazon) ja em produção com Yoast SEO para gestão de arquivos.
          "
        />
        <Card
          title="MD Guinchos"
          secondBtn={true}
          linkSite="https://md-guinchos.vercel.app"
          stacksIcon={[
            { icon: SiReact, name: "React", color: "#3998B6" },
            { icon: SiCss3, name: "CSS", color: "#264de4" },
            { icon: SiSass, name: "Sass", color: "#CF649A" },
            { icon: SiBootstrap, name: "Bootstrap", color: "#563d7c" },
            { icon: SiNodedotjs, name: "Node", color: "#026E00" },
          ]}
          linkGit={""}
          text="Site estatico desenvolvido com Biblioteca JavaScript , React.js e com o framework CSS, SCSS. Com cerca de 95% de desempenho em Desktop.
          "
        />
      </div>
    </div>
  );
};

export default FrontendPortfolio;
