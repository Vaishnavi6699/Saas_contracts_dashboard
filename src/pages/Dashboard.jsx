import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import ContractTable from "../components/ContractTable";
import UploadModal from "../components/UploadModal";
import StatsCards from "../components/StatsCards";

export default function Dashboard() {
  const [showUpload, setShowUpload] = useState(false);

  
  const stats = {
    active: 12,
    expired: 3,
    renewalDue: 5,
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar onUpload={() => setShowUpload(true)} />
        <main className="p-6 overflow-y-auto">
          <h1 className="text-2xl font-bold mb-6">Contracts Dashboard</h1>
          
          
          <StatsCards stats={stats} />

          
          <ContractTable />
        </main>
      </div>
      {showUpload && <UploadModal onClose={() => setShowUpload(false)} />}
    </div>
  );
}
