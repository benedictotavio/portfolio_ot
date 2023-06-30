import { IconType } from "react-icons";
import styles from "./CardProject.module.css";
import {FaArrowAltCircleRight } from "react-icons/fa";
import { ReactElement } from "react";

type IPropsCardProject = {
  title: string;
  stack?: string;
  icon: ReactElement<IconType>;
};

const CardProject = ({ title, stack,icon }: IPropsCardProject) => {
  return (
    <div className={styles.card}>
      <div className={styles.heading}>
        {title} <br /><span>{stack}</span>
      </div>
      <div className={styles.code}>
        {icon}
      </div>
      <div className={styles.icons_container}>
        <a href={`/${title.split(" ")[1].toLocaleLowerCase()}`}>
          <div className={styles.icons}>
            <FaArrowAltCircleRight />
          </div>
        </a>
      </div>
    </div>
  );
};

export default CardProject;
