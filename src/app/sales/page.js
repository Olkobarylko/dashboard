import styles from "./page.module.scss";
import MetricBlock from "../components/MetricBlock/MetricBlock";
import Grafic from "../components/Grafic/Grafic";
import Statistics from "../components/Statistics/Statistics";
import Employee from "../components/Employee/Employee";
import TopSettersClosers from "../components/TopSettersClosers/TopSettersClosers";

export default function Sales() {

  const MetricBlocks = [{
    title: "Conversion Rates",
    number: "750",
    percent : "+6.5%",
    grafic : true
  },
  {
    title: "Average Deal Size",
    number: "$525",
    percent : "-1.2%",
    grafic : false
  },
  {
  title: "Total Sales",
  number: "$55.8k",
  percent : "+6.5%",
  grafic : true
}]

  return (
    <div className={styles.content}>
      <MetricBlock data={MetricBlocks} />
      <div className={styles.content__row}>
        <Grafic imageSrc="/grafic-image.png" />
        <Statistics />
      </div>
      <TopSettersClosers />
    </div>
  );
}