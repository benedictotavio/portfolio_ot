import me from "../../assets/me.png";
import Button from "../buttons/Button";
import styles from "./Main.module.css";
import { AiFillFilePdf, AiOutlineWhatsApp } from "react-icons/ai";

const Main = () => {
  return (
    <div id={styles.main}>
      <div id={styles.main_card} className="d-sm-flex align-items-sm-center">
        <div id={styles.main_card_img}>
          <img src={me} alt="Photo from Otavio Benedicto portifolio content" />
        </div>
        <div className="p-sm-3">
          <div id={styles.main_card_text}>
            <h3>I am</h3>
            <h2>Otavio Benedicto</h2>
            <div className={styles.wrapper}>
              <div className={styles.words}>
                <span>React</span>
                <span>React</span>
                <span>Node.js</span>
                <span>MongoDB</span>
                <span>PostgreSQL</span>
                <span>Next.js</span>
              </div>
              <p>Developer</p>
            </div>
            <p className="mt-md-5">
              Young Full Stack developer, passionate about technology with
              diverse professional experiences in the technology market, such as
              structuring WEB applications.
            </p>
          </div>
          <div id={styles.btn_section} className="d-flex justify-content-end">
              <Button text={"Download CV"} icon={<AiFillFilePdf />} />
              <Button text={"WhatsApp"} icon={<AiOutlineWhatsApp />} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
