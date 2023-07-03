import { IconType } from "react-icons";
import styles from "./CardProject.module.css";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { ReactElement } from "react";
import { Link } from "react-router-dom";

type IPropsCardProject = {
  title: string;
  stack?: string;
  icon: ReactElement<IconType>;
};

const CardProject = ({ title, stack, icon }: IPropsCardProject) => {
  return (
    <div className={styles.card}>
      <div className={styles.heading}>
        {title} <br />
        <span>{stack}</span>
      </div>
      <div className={styles.code}>{icon}</div>
      <div className={styles.icons_container}>
        <Link to={`/${title.split(" ")[1].toLocaleLowerCase()}`}>
          <i className={styles.icons}>
            <FaArrowAltCircleRight />
          </i>
        </Link>
      </div>
    </div>
  );
};

export default CardProject;
