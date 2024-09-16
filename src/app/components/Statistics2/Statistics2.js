import styles from "./statistics2.module.scss";
import Image from "next/image";

export default function Statistics() {
  return (
    <div className={styles["statistics2"]}>
      <p className={styles["statistics2__title"]}>New Customer Acquisition by Platforms</p>
      <Image src="/statistics2-image.png" width="200" height="200" />
      <div className={styles["statistics2__wrapper"]}>
        <div className={styles["statistics2__item"]}>
          <div style={{backgroundColor : '#ea1831'}} className={styles["statistics2__item-roll"]}></div>
          <div className={styles["statistics2__item-text"]}>Website</div>
        </div>
        <div className={styles["statistics2__item"]}>
          <div style={{backgroundColor : '#ffffff'}} className={styles["statistics2__item-roll"]}></div>
          <div className={styles["statistics2__item-text"]}>Instagram</div>
        </div>
        <div  className={styles["statistics2__item"]}>
          <div style={{backgroundColor : '#232323'}} className={styles["statistics2__item-roll"]}></div>
          <div className={styles["statistics2__item-text"]}>Other</div>
        </div>
      </div>
    </div>
  );
}
