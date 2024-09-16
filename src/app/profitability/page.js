import styles from "./page.module.scss";
import MetricBlock from "../components/MetricBlock/MetricBlock";
import Grafic from "../components/Grafic/Grafic";
import Statistics from "../components/Statistics/Statistics";
import ExpenseBreakdown from "../components/ExpenseBreakdown/ExpenseBreakdown";
import ProfitabilityPanels from "../components/ProfitabilityPanels/ProfitabilityPanels";
import ComparativeChart from "../components/ComparativeChart/ComparativeChart";

export default function Sales() {

  const MetricBlocks = [{
    title: "Total revenue",
    number: "$60.8K",
    percent : "+5.5%",
    grafic : true
  },
  {
    title: "Total Expenses",
    number: "$10.8k",
    percent : "-1.2%",
    grafic : false
  },
  {
  title: "Total Profit",
  number: "$50.0k",
  percent : "+6.5%",
  grafic : true
}]

  return (
    <div className={styles.content}>
      <MetricBlock data={MetricBlocks} />
      <ProfitabilityPanels />
      <div className={styles.content__row}>
        <ExpenseBreakdown />
        <ComparativeChart />
      </div>
    </div>
  );
}