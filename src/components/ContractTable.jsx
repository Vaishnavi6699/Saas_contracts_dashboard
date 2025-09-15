import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const mockContracts = [
  { id: "C1", name: "MSA 2025", parties: "Microsoft & ABC Corp", expiry: "2025-12-31", status: "Active", risk: "Medium" },
  { id: "C2", name: "Network Services Agreement", parties: "TelNet & ABC Corp", expiry: "2025-10-10", status: "Renewal Due", risk: "High" },
  { id: "C3", name: "Cloud Hosting Agreement", parties: "AWS & XYZ Ltd", expiry: "2025-11-15", status: "Active", risk: "Low" },
  { id: "C4", name: "SaaS Subscription", parties: "Salesforce & ABC Corp", expiry: "2025-09-30", status: "Expired", risk: "Medium" },
  { id: "C5", name: "Support Contract", parties: "Zendesk & XYZ Ltd", expiry: "2025-12-31", status: "Active", risk: "High" },
  { id: "C6", name: "Maintenance Agreement", parties: "IBM & ABC Corp", expiry: "2025-06-30", status: "Renewal Due", risk: "Medium" },
  { id: "C7", name: "Data Processing Agreement", parties: "Google & XYZ Ltd", expiry: "2025-08-31", status: "Active", risk: "Low" },
  { id: "C8", name: "Consulting Agreement", parties: "Accenture & ABC Corp", expiry: "2025-10-31", status: "Expired", risk: "High" },
  { id: "C9", name: "License Agreement", parties: "Oracle & XYZ Ltd", expiry: "2025-12-15", status: "Active", risk: "Medium" },
  { id: "C10", name: "Partnership Agreement", parties: "PartnerCo & ABC Corp", expiry: "2025-11-30", status: "Active", risk: "Low" },
  { id: "C11", name: "Outsourcing Agreement", parties: "Outsource Inc & XYZ Ltd", expiry: "2025-09-30", status: "Renewal Due", risk: "Medium" },
  { id: "C12", name: "Vendor Agreement", parties: "VendorX & ABC Corp", expiry: "2025-12-31", status: "Active", risk: "High" }
];

export default function ContractTable() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [riskFilter, setRiskFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;
  const navigate = useNavigate();

  const filteredContracts = mockContracts.filter((c) => {
    const matchesSearch =
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.parties.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === "All" || c.status === statusFilter;
    const matchesRisk = riskFilter === "All" || c.risk === riskFilter;
    return matchesSearch && matchesStatus && matchesRisk;
  });

  const totalPages = Math.ceil(filteredContracts.length / rowsPerPage);
  const displayedContracts = filteredContracts.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const riskColor = (risk) => {
    if (risk === "High") return "text-red-600";
    if (risk === "Medium") return "text-yellow-600";
    return "text-green-600";
  };

  return (
    <div className="bg-white shadow rounded-lg p-4 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Contract Dashboard</h1>

      
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
        <input
          type="text"
          placeholder="Search by name or parties"
          className="border px-4 py-2 rounded w-full sm:w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="flex gap-2">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="All">All Status</option>
            <option value="Active">Active</option>
            <option value="Expired">Expired</option>
            <option value="Renewal Due">Renewal Due</option>
          </select>
          <select
            value={riskFilter}
            onChange={(e) => setRiskFilter(e.target.value)}
            className="border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="All">All Risks</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
      </div>

      
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3">ID</th> 
            <th className="p-3">Name</th>
            <th className="p-3">Parties</th>
            <th className="p-3">Expiry Date</th>
            <th className="p-3">Status</th>
            <th className="p-3">Risk Score</th>
          </tr>
        </thead>
        <tbody>
          {displayedContracts.length === 0 ? (
            <tr>
              <td colSpan="6" className="p-4 text-center text-gray-500">
                No contracts found.
              </td>
            </tr>
          ) : (
            displayedContracts.map((c) => (
              <tr
                key={c.id}
                className="border-t hover:bg-gray-50 cursor-pointer"
                onClick={() => navigate(`/contracts/${c.id}`)}
              >
                <td className="p-3 font-medium">{c.id}</td> {/* Show ID */}
                <td className="p-3 font-medium">{c.name}</td>
                <td className="p-3">{c.parties}</td>
                <td className="p-3">{c.expiry}</td>
                <td className="p-3">{c.status}</td>
                <td className={`p-3 font-semibold ${riskColor(c.risk)}`}>{c.risk}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      
      <div className="flex justify-end gap-2 mt-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="px-3 py-1">{currentPage} / {totalPages}</span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
