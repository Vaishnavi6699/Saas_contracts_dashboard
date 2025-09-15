import React, { useState, useRef, useEffect } from "react";

export default function Topbar({ username, onUpload }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setDropdownOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("username");
    window.location.reload();
  };

  return (
    <div className="flex justify-between items-center bg-gradient-to-r from-white to-gray-100 shadow-md px-6 py-4">
      <h2 className="text-2xl font-bold text-gray-700">Dashboard</h2>
      <div className="flex items-center gap-4 relative" ref={ref}>
        <button
          onClick={onUpload}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition shadow"
        >
          Upload
        </button>
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-1 font-medium text-gray-700 px-3 py-2 rounded-lg hover:bg-gray-200 transition shadow-sm"
          >
            👤 user ▾
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg z-10">
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 hover:bg-gray-100 transition"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
