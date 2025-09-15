import React from "react";

export default function StatsCards({ stats }) {
  const cardData = [
    { title: "Active", value: stats.active, color: "bg-green-100", text: "text-green-700" },
    { title: "Expired", value: stats.expired, color: "bg-red-100", text: "text-red-700" },
    { title: "Renewal Due", value: stats.renewalDue, color: "bg-yellow-100", text: "text-yellow-700" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
      {cardData.map((card) => (
        <div key={card.title} className={`p-6 rounded-lg shadow ${card.color}`}>
          <h3 className={`text-lg font-semibold ${card.text}`}>{card.title}</h3>
          <p className={`text-2xl font-bold ${card.text}`}>{card.value}</p>
        </div>
      ))}
    </div>
  );
}
