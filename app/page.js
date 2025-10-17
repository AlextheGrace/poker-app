"use client";

import { useState } from 'react';

export default function PokerTimerApp() {
  const [inputValue, setInputValue] = useState('');
  const [timer, setTimer] = useState('0');

  const handleSubmit = () => {
    console.log('Submitted:', { inputValue, timer });
    alert(`Submitted!\nInput: ${inputValue}\nTimer: ${timer} minutes`);
  };

  return (
    <div className="h-screen w-screen overflow-hidden bg-gradient-to-br from-green-800 via-green-700 to-green-900 flex items-center justify-center p-4">
      {/* Poker table pattern overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '20px 20px'
      }}></div>
      
      <div className="relative z-10 w-full max-w-md">
        {/* Main card container */}
        <div className="bg-green-900 rounded-3xl shadow-2xl p-8 border-8 border-yellow-600">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-yellow-400 mb-2">🃏 Poker Timer 🃏</h1>
            <div className="h-1 w-24 bg-yellow-500 mx-auto rounded"></div>
          </div>

          {/* Form Fields */}
          <div className="space-y-6">
            {/* Input Field */}
            <div>
              <label htmlFor="pokerInput" className="block text-yellow-200 font-semibold mb-2">
                Game Info
              </label>
              <input
                id="pokerInput"
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Player name or game details..."
                className="w-full px-4 py-3 bg-green-800 text-white rounded-lg border-2 border-yellow-600 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400 placeholder-green-300"
              />
            </div>

            {/* Timer Selection */}
            <div>
              <label htmlFor="timerSelect" className="block text-yellow-200 font-semibold mb-2">
                Select Timer Duration
              </label>
              <select
                id="timerSelect"
                value={timer}
                onChange={(e) => setTimer(e.target.value)}
                className="w-full px-4 py-3 bg-green-800 text-white rounded-lg border-2 border-yellow-600 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400 cursor-pointer"
              >
                <option value="0">No Timer (0 min)</option>
                <option value="15">15 Minutes</option>
                <option value="30">30 Minutes</option>
                <option value="45">45 Minutes</option>
                <option value="60">60 Minutes</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-green-900 font-bold py-4 px-6 rounded-lg shadow-lg transform transition hover:scale-105 active:scale-95 text-lg"
            >
              Start Game
            </button>
          </div>

          {/* Decorative poker chips */}
          <div className="flex justify-center mt-6 gap-2">
            <div className="w-8 h-8 rounded-full bg-red-600 border-4 border-white"></div>
            <div className="w-8 h-8 rounded-full bg-blue-600 border-4 border-white"></div>
            <div className="w-8 h-8 rounded-full bg-black border-4 border-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
}