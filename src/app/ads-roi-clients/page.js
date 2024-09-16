import styles from "./page.module.scss";
import MetricBlock from "../components/MetricBlock/MetricBlock";
import GraficAdsRoiClients from "../components/GraficAdsRoiClients/GraficAdsRoiClients";
import Statistics2 from "../components/Statistics2/Statistics2";

export default function AdsRoiClients() {
  const MetricBlocks = [
    {
      title: "Client Ad Spend",
      number: "$8.3k",
      percent: "+5.5%",
      grafic: true,
    },
    {
      title: "Submitted Target Premium",
      number: "$25k",
      percent: "-1.2%",
      grafic: false,
    },
    {
      title: "Cost Per Submitted Policy",
      number: "$5.8",
      percent: "+6.5%",
      grafic: true,
    },
    {
      title: "Submitted Target Premium Per Agent",
      number: "$25k",
      percent: "-1.2%",
      grafic: false,
    },
    {
      title: "Average Closing Rate",
      number: "$25k",
      percent: "+1.2%",
      grafic: true,
    },
    {
      title: "Booking Call Average",
      number: "$25k",
      percent: "-1.2%",
      grafic: false,
    },
  ];

  return (
    <div className={styles.content}>
      <GraficAdsRoiClients />
      <MetricBlock data={MetricBlocks} />
    </div>
  );
}
