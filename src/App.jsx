// import React, { useState } from "react";
// import { Routes, Route, Navigate } from "react-router-dom";
// import Login from "./pages/Login";
// import Dashboard from "./pages/Dashboard";
// import ContractTable from "./components/ContractTable";
// import ContractDetail from "./pages/ContractDetail";

// export default function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   return (
//     <Routes>
//       <Route path="/" element={isLoggedIn ? <Navigate to="/dashboard" /> : <Login setIsLoggedIn={setIsLoggedIn} />} />
//       <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/" />} />
// <Route path="/" element={<ContractTable />} />
//         <Route path="/contracts/:id" element={<ContractDetail />} />
//    </Routes>
//   );
// }

import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ContractTable from "./components/ContractTable";
import ContractDetail from "./pages/ContractDetail";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Routes>
      {/* Login */}
      <Route
        path="/"
        element={
          isLoggedIn ? <Navigate to="/dashboard" /> : <Login setIsLoggedIn={setIsLoggedIn} />
        }
      />

      {/* Dashboard */}
      <Route
        path="/dashboard"
        element={isLoggedIn ? <Dashboard /> : <Navigate to="/" />}
      />

      {/* Contract Table */}
      <Route
        path="/contracts"
        element={isLoggedIn ? <ContractTable /> : <Navigate to="/" />}
      />

      {/* Contract Detail */}
      <Route
        path="/contracts/:id"
        element={isLoggedIn ? <ContractDetail /> : <Navigate to="/" />}
      />

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
