"use client";

import styles from "./expense-breakdown.module.scss";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

export default function ExpenseBreakdown(props) {
  const data = [
    { name: "Employees", value: 50 },
    { name: "Software", value: 30 },
    { name: "Merchant Fees", value: 20 },
  ];

  const COLORS = ["#ea1831", "#ffffff", "#000000"];

  return (
    <div className={styles["expense-breakdown"]}>
      <h2 className={styles["expense-breakdown__heading"]}>Expense Breakdown</h2>
      <div className={styles["expense-breakdown__chart"]}>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={100}
              dataKey="value"
              label
              strokeWidth={0}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
