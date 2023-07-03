import { ReactNode } from "react";
import styles from "./Button.module.css";

type Props = {
  text: string;
  icon?: ReactNode;
};

const Button = ({ text, icon }: Props) => {
  return icon ? (
    <button className="p-2 px-lg-4 p-md-3" id={styles.btn}>
      {text} <i>{icon}</i>
    </button>
  ) : (
    <button className="p-2 px-lg-4 p-md-3" id={styles.btn}>
      {text}
    </button>
  );
};

export default Button;
