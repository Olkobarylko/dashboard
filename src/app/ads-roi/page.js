import styles from "./page.module.scss";
import MetricBlock from "../components/MetricBlock/MetricBlock";
import GraficAdsRoi from "../components/GraficAdsRoi/GraficAdsRoi";
import Statistics2 from "../components/Statistics2/Statistics2";

export default function AdsRoi() {

  const MetricBlocks = [{
    title: "Total Ad Spend",
    number: "$5.2k",
    percent : "+6.5%",
    grafic : true
  },
  {
    title: "New Customer Acquired",
    number: "605",
    percent : "-1.2%",
    grafic : false
  },
  {
  title: "Cost Per Acquisition",
  number: "$5.8",
  percent : "+6.5%",
  grafic : true
  },
  {
    title: "Cost Per Call",
    number: "100$",
    percent : "+1.2%",
    grafic : true
  },
  {
    title: "Cost Per Lead",
    number: "150$",
    percent : "-2.2%",
    grafic : false
  }]

  return (
    <div className={styles.content}>
      <MetricBlock data={MetricBlocks} />
      <div className={styles.content__row}>
        <GraficAdsRoi />
        <Statistics2 />
      </div>
    </div>
  );
}