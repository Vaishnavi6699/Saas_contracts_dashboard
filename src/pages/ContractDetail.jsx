
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ClauseCard from "../components/ClauseCard";
import InsightCard from "../components/InsightCard";
import EvidenceDrawer from "../components/EvidenceDrawer";

const contracts = [
  {
    id: "c1",
    name: "MSA 2025",
    parties: "Microsoft & ABC Corp",
    start: "2023-01-01",
    expiry: "2025-12-31",
    status: "Active",
    risk: "Medium",
    clauses: [
      { title: "Termination", summary: "90 days notice period.", confidence: 0.82 },
      { title: "Liability Cap", summary: "12 months’ fees limit.", confidence: 0.87 }
    ],
    insights: [
      { risk: "High", message: "Liability cap excludes data breach costs." },
      { risk: "Medium", message: "Renewal auto-renews unless cancelled 60 days before expiry." }
    ],
    evidence: [
      { source: "Section 12.2", snippet: "Total liability limited to 12 months’ fees.", relevance: 0.91 }
    ]
  },
  {
    id: "C2",
    name: "Network Services Agreement",
    parties: "TelNet & ABC Corp",
    start: "2023-02-01",
    expiry: "2025-10-10",
    status: "Renewal Due",
    risk: "High",
    clauses: [],
    insights: [],
    evidence: []
  },
  {
    id: "C3",
    name: "Cloud Hosting Agreement",
    parties: "AWS & XYZ Ltd",
    start: "2023-03-01",
    expiry: "2025-11-15",
    status: "Active",
    risk: "Low",
    clauses: [],
    insights: [],
    evidence: []
  },
  {
    id: "C4",
    name: "SaaS Subscription",
    parties: "Salesforce & ABC Corp",
    start: "2023-01-10",
    expiry: "2025-09-30",
    status: "Expired",
    risk: "Medium",
    clauses: [],
    insights: [],
    evidence: []
  },
  {
    id: "C5",
    name: "Support Contract",
    parties: "Zendesk & XYZ Ltd",
    start: "2023-04-01",
    expiry: "2025-12-31",
    status: "Active",
    risk: "High",
    clauses: [],
    insights: [],
    evidence: []
  },
  {
    id: "C6",
    name: "Maintenance Agreement",
    parties: "IBM & ABC Corp",
    start: "2023-05-01",
    expiry: "2025-06-30",
    status: "Renewal Due",
    risk: "Medium",
    clauses: [],
    insights: [],
    evidence: []
  },
  {
    id: "C7",
    name: "Data Processing Agreement",
    parties: "Google & XYZ Ltd",
    start: "2023-02-15",
    expiry: "2025-08-31",
    status: "Active",
    risk: "Low",
    clauses: [],
    insights: [],
    evidence: []
  },
  {
    id: "C8",
    name: "Consulting Agreement",
    parties: "Accenture & ABC Corp",
    start: "2023-03-20",
    expiry: "2025-10-31",
    status: "Expired",
    risk: "High",
    clauses: [],
    insights: [],
    evidence: []
  },
  {
    id: "C9",
    name: "License Agreement",
    parties: "Oracle & XYZ Ltd",
    start: "2023-06-01",
    expiry: "2025-12-15",
    status: "Active",
    risk: "Medium",
    clauses: [],
    insights: [],
    evidence: []
  },
  {
    id: "C10",
    name: "Partnership Agreement",
    parties: "PartnerCo & ABC Corp",
    start: "2023-07-01",
    expiry: "2025-11-30",
    status: "Active",
    risk: "Low",
    clauses: [],
    insights: [],
    evidence: []
  },
  {
    id: "C11",
    name: "Outsourcing Agreement",
    parties: "Outsource Inc & XYZ Ltd",
    start: "2023-08-01",
    expiry: "2025-09-30",
    status: "Renewal Due",
    risk: "Medium",
    clauses: [],
    insights: [],
    evidence: []
  },
  {
    id: "C12",
    name: "Vendor Agreement",
    parties: "VendorX & ABC Corp",
    start: "2023-09-01",
    expiry: "2025-12-31",
    status: "Active",
    risk: "High",
    clauses: [],
    insights: [],
    evidence: []
  }
];

export default function ContractDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showEvidence, setShowEvidence] = useState(false);

  const contract = contracts.find((c) => c.id === id);

  if (!contract) return <div className="p-4 text-red-500">Contract not found</div>;

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <button onClick={() => navigate(-1)} className="mb-4 px-4 py-2 bg-blue-500 text-white rounded">
        ← Back
      </button>

      
      <div className="bg-white shadow rounded-lg p-4 mb-6">
        <h2 className="text-xl font-bold mb-2">{contract.name} ({contract.id})</h2>
        <p><strong>Parties:</strong> {contract.parties}</p>
        <p><strong>Start Date:</strong> {contract.start}</p>
        <p><strong>Expiry Date:</strong> {contract.expiry}</p>
        <p><strong>Status:</strong> {contract.status}</p>
        <p><strong>Risk Score:</strong> {contract.risk}</p>
      </div>

      
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Clauses</h3>
        {contract.clauses.length === 0 ? (
          <p className="text-gray-500">No clauses available.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {contract.clauses.map((cl, idx) => (
              <ClauseCard key={idx} title={cl.title} summary={cl.summary} confidence={cl.confidence} />
            ))}
          </div>
        )}
      </div>

      
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">AI Insights</h3>
        {contract.insights.length === 0 ? (
          <p className="text-gray-500">No insights available.</p>
        ) : (
          <div className="space-y-2">
            {contract.insights.map((ins, idx) => (
              <InsightItem key={idx} risk={ins.risk} message={ins.message} />
            ))}
          </div>
        )}
      </div>

      
      <div>
        <button
          onClick={() => setShowEvidence(true)}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Show Evidence
        </button>
        <EvidenceDrawer
          open={showEvidence}
          onClose={() => setShowEvidence(false)}
          evidence={contract.evidence}
        />
      </div>
    </div>
  );
}
