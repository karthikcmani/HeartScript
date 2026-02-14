"use client";

import { useState } from "react";
import { generateMDate } from "@/algorithms/marriageEstimator";

export default function DestinedMarryPage() {
  const [date1, setDate1] = useState("");
  const [date2, setDate2] = useState("");
  const [date3, setDate3] = useState("");
  const [date4, setDate4] = useState("");
  const [result, setResult] = useState("");

  function handleEstimate() {
    const estDate = generateMDate(date1, date2, date3, date4);
    setResult(estDate || "Invalid Input");
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-md w-full space-y-6 bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10">

        <h1 className="text-2xl font-bold text-center">
          Find your{" "}
          <span className="text-red-500 font-normal italic font-serif">
            Destined
          </span>{" "}
          Marriage Date
        </h1>

        <div className="grid grid-cols-2 gap-4">
          {/* Date 1 */}
          <div>
            <p className="text-sm mb-1">Your Birthday</p>
            <input
              type="date"
              value={date1}
              onChange={(e) => setDate1(e.target.value)}
              className="w-full p-3 rounded-lg bg-black/30 border border-white/10 outline-none"
            />
          </div>

          {/* Date 2 */}
          <div>
            <p className="text-sm mb-1">Partner's Birthday</p>
            <input
              type="date"
              value={date2}
              onChange={(e) => setDate2(e.target.value)}
              className="w-full p-3 rounded-lg bg-black/30 border border-white/10 outline-none"
            />
          </div>

          {/* Date 3 */}
          <div>
            <p className="text-sm mb-1">Day You Met</p>
            <input
              type="date"
              value={date3}
              onChange={(e) => setDate3(e.target.value)}
              className="w-full p-3 rounded-lg bg-black/30 border border-white/10 outline-none"
            />
          </div>

          {/* Date 4 */}
          <div>
            <p className="text-sm mb-1">First Fight</p>
            <input
              type="date"
              value={date4}
              onChange={(e) => setDate4(e.target.value)}
              className="w-full p-3 rounded-lg bg-black/30 border border-white/10 outline-none"
            />
          </div>
        </div>

        <button
          onClick={handleEstimate}
          className="w-full p-3 rounded-lg bg-pink-500 hover:bg-pink-600 transition"
        >
          Find Out
        </button>

        {result && (
          <div className="text-center mt-6 relative">
            <p className="text-sm opacity-70">
              This relationship grows naturally toward marriage...
            </p>

            <p className="text-xl font-bold text-pink-400 mt-2 animate-popHeart">
              {result}
            </p>

            -
          </div>
        )}
      </div>

      
    </div>
  );
}
