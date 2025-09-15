import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 text-white flex flex-col p-6">
      <h2 className="text-2xl font-bold mb-6">SaaS Dashboard</h2>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `mb-3 px-4 py-2 rounded hover:bg-gray-700 transition ${isActive ? "bg-gray-700" : ""}`
        }
      >
        Contracts
      </NavLink>
      <NavLink
        to="#"
        className="mb-3 px-4 py-2 rounded hover:bg-gray-700 transition"
      >
        Insights
      </NavLink>
      <NavLink
        to="#"
        className="mb-3 px-4 py-2 rounded hover:bg-gray-700 transition"
      >
        Reports
      </NavLink>
      <NavLink
        to="#"
        className="mb-3 px-4 py-2 rounded hover:bg-gray-700 transition"
      >
        Settings
      </NavLink>
    </div>
  );
}

