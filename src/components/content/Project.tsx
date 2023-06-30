import styles from "./Project.module.css";
import CardProject from "../layout/items/CardProject";
import {
  FaLaptopCode,
  FaDatabase,
  FaProjectDiagram
} from "react-icons/fa";

import {RiStackshareLine} from 'react-icons/ri'

const Project = () => {
  return (
    <div className={styles.project}>
      <CardProject
        title={"Projetos Frontend"}
        stack={"(Next, React, HTML)"}
        icon={<FaLaptopCode />}
      />
      <CardProject
        title={"Projetos Backend"}
        stack={"(Node.js, MongoDB, PostgreSQL)"}
        icon={<FaDatabase />}
      />
      <CardProject
        title={"Projetos Full Stack"}
        stack={"(Nest, Next, Heroku)"}
        icon={<RiStackshareLine />}
      />

      <CardProject
        title={"Todos Projetos"}
        stack={""}
        icon={<FaProjectDiagram />}
      />
    </div>
  );
};

export default Project;
