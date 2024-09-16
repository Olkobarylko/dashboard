"use client";

import styles from "./grafic-ads-roi-clients.module.scss";
import Image from "next/image";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";


export default function GraficAdsRoi(props) {
  const data = [
    { name: "Jan", roi: 15 },
    { name: "Feb", roi: 10 },
    { name: "Mar", roi: 12 },
    { name: "Apr", roi: 9 },
    { name: "May", roi: 13 },
    { name: "Jun", roi: 11 },
    { name: "Jul", roi: 23.5 },
  ];

  return (
    <div className={styles["fulfillment"]}>
      <h2 className={styles["fulfillment__heading"]}>Fulfillment</h2>
      <div className={styles["fulfillment__cards"]}>
        <div className={styles["card"]}>
          <p className={styles["card__title"]}>Initiated</p>
          <p className={styles["card__value"]}>120</p>
        </div>
        <div className={styles["card"]}>
          <p className={styles["card__title"]}>On time</p>
          <p className={styles["card__value"]}>85</p>
        </div>
        <div className={styles["card"]}>
          <p className={styles["card__title"]}>Behind</p>
          <p className={styles["card__value"]}>15</p>
        </div>
        <div className={styles["card"]}>
          <p className={styles["card__title"]}>Early</p>
          <p className={styles["card__value"]}>10</p>
        </div>
        <div className={styles["card"]}>
          <p className={styles["card__title"]}>Issue</p>
          <p className={styles["card__value"]}>5</p>
        </div>
      </div>
      <div className={styles["fulfillment__chart"]}>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis domain={[0, 25]} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="roi"
              stroke="#ea1831"
              strokeWidth={3}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}