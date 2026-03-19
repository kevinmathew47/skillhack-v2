"use client";

import { useEffect, useState } from "react";

const GOAL = 5000000; // ₹50,00,000
const CACHE_KEY = "milaap_raised";
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

function fmt(n) {
  return "₹" + Number(n).toLocaleString("en-IN");
}

export default function useMilaapFetch() {
  const [raised, setRaised] = useState(8500);
  const [supporters, setSupporters] = useState(11);
  const [loading, setLoading] = useState(true);

  const ADDED_AMOUNT = 143225;
  const displayRaised = raised + ADDED_AMOUNT;
  const pct = Math.min((displayRaised / GOAL) * 100, 100).toFixed(2);

  useEffect(() => {
    let cancelled = false;

    async function fetchData() {
      // Check localStorage cache first for instant UI
      try {
        const cached = JSON.parse(localStorage.getItem(CACHE_KEY) || "null");
        if (cached && Date.now() - cached.ts < CACHE_TTL) {
          if (!cancelled) {
            setRaised(cached.amount || 8500);
            setSupporters(cached.supporters || 11);
            setLoading(false);
          }
          return;
        }
      } catch (_) { }

      // Call our internal API route (handles CORS on server)
      try {
        const res = await fetch("/api/milaap", { cache: "no-store" });
        if (!res.ok) throw new Error("API failed");

        const data = await res.json();

        if (data.amount && !cancelled) {
          setRaised(data.amount);
          if (data.supporters) setSupporters(data.supporters);
          setLoading(false);

          localStorage.setItem(
            CACHE_KEY,
            JSON.stringify({
              amount: data.amount,
              supporters: data.supporters,
              ts: Date.now()
            })
          );
        }
      } catch (err) {
        console.error("[Milaap] Fetch error:", err.message);
        if (!cancelled) setLoading(false);
      }
    }

    fetchData();

    return () => {
      cancelled = true;
    };
  }, []);

  return {
    raised: displayRaised,
    goal: GOAL,
    pct,
    raisedText: fmt(displayRaised),
    goalText: fmt(GOAL),
    fillWidth: pct + "%",
    supportersCount: supporters,
    loading,
  };
}
