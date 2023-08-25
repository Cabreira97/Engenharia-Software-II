"use client";

import React, { useState } from 'react';

export function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [backgroundColor, setBackgroundColor] = useState(' bg-gray-500');


  const [buttonClicked, setButtonClicked] = useState(false); // Estado para controlar o clique no botão

  const handleLogin = () => {
    setBackgroundColor('bg-gray-900');

    setButtonClicked(true); // Define o estado como true quando o botão é clicado
  };

  return (
    <div className={`flex justify-center items-center h-screen border-5  border-black ${backgroundColor}`}>
      <div className="w-1/4 bg-slate-700 p-6 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <input
          type="text"
          placeholder="Username"
          className="w-full p-2 border rounded mb-2 text-pink-700"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded mb-4 text-pink-700"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className={`w-full bg-blue-500 text-white p-2 rounded  ${buttonClicked ? 'shadow-lg' : ''}`} // Adiciona a classe "shadow-lg" quando o botão é clicado
          onClick={handleLogin}
        >
          Log in
        </button>
      </div>
    </div>
  );
}
