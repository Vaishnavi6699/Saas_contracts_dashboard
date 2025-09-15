
import React, { useState } from "react";

export default function UploadModal({ onClose }) {
  const [files, setFiles] = useState([]);
  const [successMsg, setSuccessMsg] = useState("");

  const handleFiles = (e) => {
    const newFiles = Array.from(e.target.files).map(f => ({ name: f.name, status: "Uploading" }));
    setFiles(prev => [...prev, ...newFiles]);
    setSuccessMsg("");
    
    newFiles.forEach((file, idx) => {
      setTimeout(() => {
        setFiles(prev => prev.map((f, i) => i === prev.length - newFiles.length + idx ? { ...f, status: "Success" } : f));
        if (idx === newFiles.length -1) {
          setSuccessMsg("All files uploaded successfully ✅");
        }
      }, 1000 + idx * 500);
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white rounded p-6 w-96">
        <h2 className="text-xl font-bold mb-4">Upload Files</h2>
        <input type="file" multiple onChange={handleFiles} className="mb-4" />
        <ul className="mb-4">
          {files.map((f, idx) => (
            <li key={idx}>{f.name} - {f.status}</li>
          ))}
        </ul>
        {successMsg && <p className="text-green-600 font-semibold mb-4">{successMsg}</p>}
        <button onClick={onClose} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Close</button>
      </div>
    </div>
  );
}
