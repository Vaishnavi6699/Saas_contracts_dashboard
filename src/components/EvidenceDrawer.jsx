import React from "react";

export default function EvidenceDrawer({ source, snippet, relevance }) {
  return (
    <div className="p-4 mb-3 rounded-lg shadow-md bg-purple-50 border border-purple-200">
      <h3 className="text-purple-700 font-semibold text-lg mb-1">📂 Evidence</h3>
      <p className="text-gray-700 mb-2">
        <b>Source:</b> {source}
      </p>
      <p className="italic text-gray-600 mb-2">“{snippet}”</p>
      {relevance && (
        <p className="text-sm text-gray-500">
          Relevance: <span className="font-medium">{(relevance * 100).toFixed(0)}%</span>
        </p>
      )}
    </div>
  );
}
