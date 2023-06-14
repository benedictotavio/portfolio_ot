import { ReactNode } from "react";
import styles from "./Button.module.css";

type Props = {
  text: string;
  icon?: ReactNode;
};

const Button = ({ text, icon }: Props) => {
  return icon ? (
    <button id={styles.btn}>
      {text} <i>{icon}</i>
    </button>
  ) : (
    <button id={styles.btn}>{text}</button>
  );
};

export default Button;
