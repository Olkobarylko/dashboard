"use client";

import styles from "./grafic-ads-roi.module.scss";
import Image from "next/image";
import { LineChart } from '@mui/x-charts/LineChart';

export default function GraficAdsRoi(props) {
  return (
    <div className={styles["grafic-ads-roi"]}>
      <p className={styles["grafic-ads-roi__title"]}>Coversion Rate</p>
      <div className={styles["grafic-ads-roi__image"]}>
      <LineChart
      xAxis={[
        {
          id: "months",
          data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          scaleType: "band",
          dataKey: "month",
        },
      ]}
      series={[
        {
          data: [0.5, 4.5, 2, 6, 4.5, 4, 8.5],
          area: true,
          showMark: false
        },
      ]}
      width={760}
      height={300}
    />
      </div>
    </div>
  );
}
