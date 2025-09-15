
import React, { useState, useEffect } from "react";

export default function Login({ setIsLoggedIn }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [fadeIn, setFadeIn] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [error, setError] = useState("");

  const [particles] = useState(
    Array.from({ length: 35 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 15 + 5,
      speed: Math.random() * 20 + 10,
      delay: Math.random() * 10,
    }))
  );

  useEffect(() => setFadeIn(true), []);

  const handleMouseMove = (e) => {
    setMousePos({
      x: (e.clientX / window.innerWidth - 0.5) * 20,
      y: (e.clientY / window.innerHeight - 0.5) * 20,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === "test123") {
      setIsLoggedIn(true);
      setError("");
    } else {
      setError("Password incorrect");
    }
  };

  return (
    <div
      className="relative flex h-screen items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <div
        className="absolute inset-0 bg-gradient-to-tr from-purple-200 via-pink-200 to-indigo-200 bg-[length:300%_300%] animate-gradient-flow-fast transition-transform duration-500"
        style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }}
      ></div>

      
      <div className="absolute inset-0 z-0">
        {particles.map((p, i) => (
          <div
            key={i}
            className="absolute bg-white opacity-20 rounded-full blur-xl animate-particle-fast"
            style={{
              width: `${p.size}px`,
              height: `${p.size}px`,
              top: `calc(${p.y}% + ${mousePos.y * 0.3}px)`,
              left: `calc(${p.x}% + ${mousePos.x * 0.3}px)`,
              animationDuration: `${p.speed}s`,
              animationDelay: `${p.delay}s`,
            }}
          ></div>
        ))}
      </div>

      
      <form
        onSubmit={handleLogin}
        className={`relative z-10 bg-white p-10 rounded-3xl shadow-2xl w-96 transition-opacity duration-1000 ${
          fadeIn ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="absolute -inset-2 bg-gradient-to-tr from-purple-300 via-pink-300 to-indigo-300 rounded-3xl blur-3xl opacity-40 z-0"></div>

        <h2 className="relative z-10 text-3xl font-bold mb-8 text-center text-gray-900">
          SaaS Dashboard Login
        </h2>

        <input
          type="text"
          placeholder="Name"
          className="relative z-10 w-full px-4 py-3 mb-4 border rounded-lg focus:outline-none focus:ring-4 focus:ring-purple-300 transition"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="relative z-10 w-full px-4 py-3 mb-2 border rounded-lg focus:outline-none focus:ring-4 focus:ring-purple-300 transition"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && (
          <p className="relative z-10 text-red-600 text-sm mb-4">{error}</p>
        )}

        <button
          type="submit"
          className="relative z-10 w-full bg-yellow-300 text-black font-bold py-3 rounded-lg shadow-xl overflow-hidden group"
        >
          <span className="absolute -left-full top-0 h-full w-64 bg-white opacity-30 transform -skew-x-12 group-hover:animate-shimmer"></span>
          <span className="relative z-10">Login</span>
        </button>
      </form>

      <style>
        {`
        @keyframes gradient-flow-fast {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-flow-fast {
          animation: gradient-flow-fast 12s ease infinite;
        }

        @keyframes particle-fast {
          0% { transform: translateY(0); opacity: 0.2; }
          50% { transform: translateY(-50px); opacity: 0.3; }
          100% { transform: translateY(0); opacity: 0.2; }
        }
        .animate-particle-fast {
          animation: particle-fast linear infinite;
        }

        @keyframes shimmer {
          0% { left: -100%; }
          100% { left: 100%; }
        }
        .animate-shimmer {
          animation: shimmer 1.2s linear infinite;
        }
        `}
      </style>
    </div>
  );
}
