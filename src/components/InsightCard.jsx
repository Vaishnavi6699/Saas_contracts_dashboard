import React from "react";

export default function InsightCard({ risk, message }) {
  const riskColors = {
    High: "bg-red-100 border-red-300 text-red-700",
    Medium: "bg-yellow-100 border-yellow-300 text-yellow-700",
    Low: "bg-green-100 border-green-300 text-green-700",
  };

  return (
    <div className={`p-4 mb-3 rounded-lg shadow-md border ${riskColors[risk] || ""}`}>
      <h3 className="font-semibold mb-1">💡 Insight</h3>
      <p className="mb-1">{message}</p>
      <p className="text-sm font-medium">Risk Level: {risk}</p>
    </div>
  );
}
