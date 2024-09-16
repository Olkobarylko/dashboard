import styles from "./metic-block.module.scss";
import Image from "next/image";

export default function MetricBlock({ data }) {
  return (
    <div className={styles["metric__wrapper"]}>
      {data.map((item, index) => (
        <div 
          key={index} 
          className={`${styles["metric-block"]} ${item.percent.includes('-') ? styles.down : ''}`}
        >
          <div className={styles["metric-block__top"]}>
            <div className={styles["metric-block__icon"]}>
              <Image src="percent-icon.svg" width="20" height="20" alt="Percent Icon" />
            </div>
            <div className={styles["metric-block__precent"]}>
              <Image 
                src={item.percent.includes('-') ? "percent-down-icon.svg" : "percent-up-icon.svg"} 
                width="20" 
                height="20" 
                alt="Percent Change Icon"
              />
              <p className={styles["metric-block__precent-text"]}>{item.percent}</p>
            </div>
          </div>
          <div className={styles["metric-block__bottom"]}>
            <p className={styles["metric-block__title"]}>{item.title}</p>
            <p className={styles["metric-block__number"]}>{item.number}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
