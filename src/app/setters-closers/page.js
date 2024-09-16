import styles from "./page.module.scss";
import MetricBlock from "../components/MetricBlock/MetricBlock";
import Grafic from "../components/Grafic/Grafic";
import Statistics2 from "../components/Statistics2/Statistics2";
import SettersClosers from "../components/SettersClosers/SettersClosers";

export default function CustomerData() {

  const MetricBlocks = [{
    title: "Total Customers",
    number: "15.6K",
    percent : "+5.5%",
    grafic : true
  },
  {
    title: "New Customers",
    number: "728",
    percent : "-1.2%",
    grafic : false
  },
  {
  title: "Customers lost",
  number: "165",
  percent : "+6.5%",
  grafic : true
}]

  return (
    <div className={styles.content}>
      <SettersClosers />
    </div>
  );
}