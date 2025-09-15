import React from "react";

export default function ClauseCard({ title, summary, confidence }) {
  return (
    <div className="p-4 mb-3 rounded-lg shadow-md bg-blue-50 border border-blue-200">
      <h3 className="text-blue-700 font-semibold text-lg mb-1">📑 {title}</h3>
      <p className="text-gray-700 mb-2">{summary}</p>
      {confidence && (
        <p className="text-sm text-gray-500">
          Confidence: <span className="font-medium">{(confidence * 100).toFixed(0)}%</span>
        </p>
      )}
    </div>
  );
}
