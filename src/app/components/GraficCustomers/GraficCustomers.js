"use client";

import styles from "./grafic-customers.module.scss";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function ClientStats(props) {
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
    <div className={styles["client-stats"]}>
      <div className={styles["client-stats__cards"]}>
        <div className={styles["card"]}>
          <p className={styles["card__title"]}>Total Clients</p>
          <p className={styles["card__value"]}>200</p>
        </div>
        <div className={styles["card"]}>
          <p className={styles["card__title"]}>New Clients</p>
          <p className={styles["card__value"]}>50</p>
        </div>
        <div className={styles["card"]}>
          <p className={styles["card__title"]}>Lost Clients</p>
          <p className={styles["card__value"]}>10</p>
        </div>
        <div className={styles["card"]}>
          <p className={styles["card__title"]}>Launched Clients</p>
          <p className={styles["card__value"]}>30</p>
        </div>
        <div className={styles["card"]}>
          <p className={styles["card__title"]}>Onboarding Clients</p>
          <p className={styles["card__value"]}>20</p>
        </div>
      </div>
      <div className={styles["client-stats__chart"]}>
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
