"use client";

import styles from "./profitability-panels.module.scss";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function ProfitabilityPanels(props) {

  const englishLeadsData = [
    { name: "Jan", revenue: 5000, adSpend: 2000, commissions: 500, refunds: 100 },
    { name: "Feb", revenue: 7000, adSpend: 2500, commissions: 600, refunds: 150 },
    { name: "Mar", revenue: 8000, adSpend: 3000, commissions: 700, refunds: 200 },
    { name: "Apr", revenue: 6500, adSpend: 2300, commissions: 550, refunds: 120 },
    { name: "May", revenue: 9000, adSpend: 3500, commissions: 800, refunds: 250 },
    { name: "Jun", revenue: 8500, adSpend: 3200, commissions: 750, refunds: 210 },
    { name: "Jul", revenue: 9500, adSpend: 3700, commissions: 820, refunds: 300 },
    { name: "Aug", revenue: 11000, adSpend: 4000, commissions: 900, refunds: 350 },
  ];

  const spanishLeadsData = [
    { name: "Jan", revenue: 3000, adSpend: 1500, commissions: 400, refunds: 80 },
    { name: "Feb", revenue: 5000, adSpend: 1800, commissions: 500, refunds: 120 },
    { name: "Mar", revenue: 6000, adSpend: 2000, commissions: 550, refunds: 150 },
    { name: "Apr", revenue: 4500, adSpend: 1700, commissions: 420, refunds: 100 },
    { name: "May", revenue: 7000, adSpend: 2200, commissions: 600, refunds: 180 },
    { name: "Jun", revenue: 6500, adSpend: 2100, commissions: 570, refunds: 160 },
    { name: "Jul", revenue: 7500, adSpend: 2500, commissions: 620, refunds: 200 },
    { name: "Aug", revenue: 9000, adSpend: 2800, commissions: 700, refunds: 250 },
  ];

  const calculateProfit = (data) => {
    return data.map((item) => ({
      ...item,
      profit: item.revenue - item.adSpend - item.commissions - item.refunds,
    }));
  };

  const englishLeadsWithProfit = calculateProfit(englishLeadsData);
  const spanishLeadsWithProfit = calculateProfit(spanishLeadsData);

  return (
    <div className={styles["profitability-panels"]}>
      <div className={styles["panel"]}>
        <h3 className={styles["panel__title"]}>English Leads</h3>
        <div className={styles["panel__content"]}>
          <p>Revenue: ${englishLeadsWithProfit[5].revenue}</p>
          <p>Ad Spend: ${englishLeadsWithProfit[5].adSpend}</p>
          <p>Commissions Paid Out: ${englishLeadsWithProfit[5].commissions}</p>
          <p>Refunds: ${englishLeadsWithProfit[5].refunds}</p>
          <p>Profit: ${englishLeadsWithProfit[5].profit}</p>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={englishLeadsWithProfit}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="profit" stroke="#82ca9d" strokeWidth={3} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className={styles["panel"]}>
        <h3 className={styles["panel__title"]}>Spanish Leads</h3>
        <div className={styles["panel__content"]}>
          <p>Revenue: ${spanishLeadsWithProfit[5].revenue}</p>
          <p>Ad Spend: ${spanishLeadsWithProfit[5].adSpend}</p>
          <p>Commissions Paid Out: ${spanishLeadsWithProfit[5].commissions}</p>
          <p>Refunds: ${spanishLeadsWithProfit[5].refunds}</p>
          <p>Profit: ${spanishLeadsWithProfit[5].profit}</p>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={spanishLeadsWithProfit}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="profit" stroke="#8884d8" strokeWidth={3} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
