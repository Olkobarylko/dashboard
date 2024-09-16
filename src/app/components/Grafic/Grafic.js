"use client";

import styles from "./grafic.module.scss";
import Image from "next/image";
import { BarChart } from "@mui/x-charts/BarChart";

export default function Grafic(props) {
  return (
    <div className={styles["grafic"]}>
      <p className={styles["grafic__title"]}>Sales Trends</p>
      <div className={styles["grafic__image"]}>
        <BarChart
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
              id: "sales",
              data: [0.5, 4.5, 2, 6, 4.5, 4, 8.5],
              color: '#ea1831'
            },
          ]}
          width={732}
          height={287}
          borderRadius={12}
        />
      </div>
    </div>
  );
}
