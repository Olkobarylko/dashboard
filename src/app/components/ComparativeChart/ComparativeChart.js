"use client";

import styles from "./comparative-chart.module.scss";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

export default function ComparativeChart(props) {
  // Данні для англійських лідів
  const englishLeadsData = [
    { name: "Jan", revenue: 5000, adSpend: 2000, commissions: 500, refunds: 100 },
    { name: "Feb", revenue: 7000, adSpend: 2500, commissions: 600, refunds: 150 },
    { name: "Mar", revenue: 8000, adSpend: 3000, commissions: 700, refunds: 200 },
    { name: "Apr", revenue: 6500, adSpend: 2300, commissions: 550, refunds: 120 },
    { name: "May", revenue: 9000, adSpend: 3500, commissions: 800, refunds: 250 },
    { name: "Jun", revenue: 8500, adSpend: 3200, commissions: 750, refunds: 210 },
    { name: "Jul", revenue: 9500, adSpend: 3700, commissions: 820, refunds: 300 },
    { name: "Aug", revenue: 11000, adSpend: 4000, commissions: 900, refunds: 350 },
    { name: "Sep", revenue: 10500, adSpend: 3800, commissions: 860, refunds: 310 },
    { name: "Oct", revenue: 12000, adSpend: 4200, commissions: 950, refunds: 400 },
    { name: "Nov", revenue: 11500, adSpend: 4100, commissions: 920, refunds: 380 },
    { name: "Dec", revenue: 13000, adSpend: 4500, commissions: 1000, refunds: 450 },
  ];

  // Данні для іспанських лідів
  const spanishLeadsData = [
    { name: "Jan", revenue: 3000, adSpend: 1500, commissions: 400, refunds: 80 },
    { name: "Feb", revenue: 5000, adSpend: 1800, commissions: 500, refunds: 120 },
    { name: "Mar", revenue: 6000, adSpend: 2000, commissions: 550, refunds: 150 },
    { name: "Apr", revenue: 4500, adSpend: 1700, commissions: 420, refunds: 100 },
    { name: "May", revenue: 7000, adSpend: 2200, commissions: 600, refunds: 180 },
    { name: "Jun", revenue: 6500, adSpend: 2100, commissions: 570, refunds: 160 },
    { name: "Jul", revenue: 7500, adSpend: 2500, commissions: 620, refunds: 200 },
    { name: "Aug", revenue: 9000, adSpend: 2800, commissions: 700, refunds: 250 },
    { name: "Sep", revenue: 8500, adSpend: 2700, commissions: 670, refunds: 230 },
    { name: "Oct", revenue: 10000, adSpend: 3000, commissions: 750, refunds: 300 },
    { name: "Nov", revenue: 9500, adSpend: 2900, commissions: 720, refunds: 280 },
    { name: "Dec", revenue: 11000, adSpend: 3300, commissions: 800, refunds: 350 },
  ];

  // Функція для обчислення прибутку
  const calculateProfit = (data) => {
    return data.map((item) => ({
      name: item.name,
      profit: item.revenue - item.adSpend - item.commissions - item.refunds,
    }));
  };

  const englishProfitData = calculateProfit(englishLeadsData);
  const spanishProfitData = calculateProfit(spanishLeadsData);

  // Об'єднання даних для порівняльного графіка
  const combinedData = englishProfitData.map((item, index) => ({
    name: item.name,
    englishProfit: item.profit,
    spanishProfit: spanishProfitData[index].profit,
  }));

  return (
    <div className={styles["comparative-chart"]}>
      <h2 className={styles["comparative-chart__heading"]}>English Leads vs. Spanish Leads Profit</h2>
      <div className={styles["comparative-chart__container"]}>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={combinedData}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="englishProfit" stroke="#82ca9d" strokeWidth={3} name="English Leads Profit" />
            <Line type="monotone" dataKey="spanishProfit" stroke="#8884d8" strokeWidth={3} name="Spanish Leads Profit" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
