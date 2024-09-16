import styles from "./statistics.module.scss";
import Image from "next/image";

export default function Statistics() {
  return (
    <div className={styles["statistics"]}>
      <p className={styles["statistics__title"]}>Sales by Product/Service</p>
      <div className={styles["statistics__total"]}>
          <p className={styles["statistics__total-title"]}>
            Total Sales
          </p>
          <p className={styles["statistics__total-price"]}>
            $55.8k
          </p>
      </div>
      <div className={styles["statistics__wrapper"]}>
        <div style={{width: '50%'}} className={styles["statistics__precent"]}>
          <div style={{backgroundColor : '#ea1831'}} className={styles["statistics__precent-line"]}></div>
          <p className={styles["statistics__precent-text"]}>50%</p>
        </div>
        <div style={{width: '30%'}}  className={styles["statistics__precent"]}>
          <div style={{backgroundColor : '#ffffff'}} className={styles["statistics__precent-line"]}></div>
          <p className={styles["statistics__precent-text"]}>30%</p>
        </div>
        <div style={{width: '20%'}}  className={styles["statistics__precent"]}>
          <div style={{backgroundColor : '#232323'}} className={styles["statistics__precent-line"]}></div>
          <p className={styles["statistics__precent-text"]}>20%</p>
        </div>
      </div>
      <div className={styles["statistics__info"]}>
          <div className={styles["statistics__info-heading"]}>
            <div className={styles["statistics__info-title"]}>
                <div style={{backgroundColor : '#ea1831'}} className={styles["statistics__info-roll"]}></div>
                <p className={styles["statistics__info-name"]}>Product 1 (50%)</p>
            </div>
            <p className={styles["statistics__info-price"]}>$5 373</p>
          </div>
          <div className={styles["statistics__info-line"]}>
            <div style={{width: '50%'}} className={styles["statistics__info-line-full"]}></div>
          </div>
      </div>  
      <div className={styles["statistics__info"]}>
          <div className={styles["statistics__info-heading"]}>
            <div className={styles["statistics__info-title"]}>
                <div style={{backgroundColor : '#ffffff'}} className={styles["statistics__info-roll"]}></div>
                <p className={styles["statistics__info-name"]}>Product 2 (30%)</p>
            </div>
            <p className={styles["statistics__info-price"]}>$3 223</p>
          </div>
          <div className={styles["statistics__info-line"]}>
            <div style={{width: '30%'}} className={styles["statistics__info-line-full"]}></div>
          </div>
      </div>  
      <div className={styles["statistics__info"]}>
          <div className={styles["statistics__info-heading"]}>
            <div className={styles["statistics__info-title"]}>
                <div style={{backgroundColor : '#232323'}} className={styles["statistics__info-roll"]}></div>
                <p className={styles["statistics__info-name"]}>Other (20%)</p>
            </div>
            <p className={styles["statistics__info-price"]}>$2 149</p>
          </div>
          <div className={styles["statistics__info-line"]}>
            <div style={{width: '20%'}} className={styles["statistics__info-line-full"]}></div>
          </div>
      </div>  
    </div>
  );
}
