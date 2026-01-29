import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import NeonCard from "./NeonCard";
import StressChart from "./charts";
import CalmBackground from "./CalmBackground";

export default function StressDashboard() {
  const [goal, setGoal] = useState("My Goal");
  const [deadline, setDeadline] = useState("2026-02-12");
  const [totalWork, setTotalWork] = useState(100);
  const [capacity, setCapacity] = useState(4);
  const [delay, setDelay] = useState(0);

  const [locked, setLocked] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const today = new Date();
  const end = new Date(deadline);

  const totalDays = Math.max(
    Math.ceil((end - today) / (1000 * 60 * 60 * 24)) - delay,
    1
  );

  const dailyLoad = (totalWork / totalDays).toFixed(2);
  const freeTime = (capacity - dailyLoad).toFixed(2);

  const stressLevel = useMemo(() => {
    if (dailyLoad <= capacity * 0.7) return "CALM";
    if (dailyLoad <= capacity) return "WARNING";
    return "OVERLOAD";
  }, [dailyLoad, capacity]);

  const inputFix = {
    pointerEvents: "auto",
    position: "relative",
    zIndex: 5
  };

  const wheelAdjust = (setter, min, max) => (e) => {
    e.preventDefault();
    setter((v) =>
      Math.min(max, Math.max(min, v + (e.deltaY < 0 ? 1 : -1)))
    );
  };

  return (
    <>
      {/* 🌊 LIVE CALM BACKGROUND */}
      <CalmBackground />

      {/* 🧠 MAIN UI */}
      <motion.div
        className={`container ${darkMode ? "mono" : ""}`}
        style={{ position: "relative", zIndex: 1 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <button className="mode-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "🕶 MONO" : "🌈 COLOR"}
        </button>

        {/* ===================== */}
        {/* 🔥 MISSION STATUS HERO */}
        {/* ===================== */}
        <motion.div
          style={{
            minHeight: "40vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: "12px",
            textAlign: "center",
            pointerEvents: "none"
          }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ repeat: Infinity, duration: 2 }}
            style={{
              letterSpacing: "0.2em",
              fontSize: "0.85rem",
              color:
                stressLevel === "OVERLOAD"
                  ? "#ff3333"
                  : stressLevel === "WARNING"
                  ? "#ffaa00"
                  : "#00ff9d"
            }}
          >
            SYSTEM STATUS
          </motion.div>

          <motion.div style={{ fontSize: "1.2rem", fontWeight: 600 }}>
            {stressLevel === "OVERLOAD"
              ? "CRITICAL — LIMITS EXCEEDED"
              : stressLevel === "WARNING"
              ? "ELEVATED LOAD DETECTED"
              : "SYSTEM STABLE"}
          </motion.div>

          <div style={{ opacity: 0.75, fontSize: "0.9rem" }}>
            ⏳ {totalDays} DAYS • ⚡ {dailyLoad} HRS/DAY
          </div>
        </motion.div>

        {/* ⬇⬇ EVERYTHING BELOW REMAINS 100% UNCHANGED ⬇⬇ */}

        <motion.h1 className="title">DAY ZERO</motion.h1>

        <NeonCard title="Mission Configuration" disableTilt>
          <div className={`mission-panel ${locked ? "locked" : ""}`}>
            <div className="mission-header">
              <span className="status-dot" />
              <div>
                <h2>Objective Parameters</h2>
                <p>{locked ? "MISSION LOCKED" : "Configure before execution"}</p>
              </div>
            </div>

            <div className="mission-grid">
              {/* OBJECTIVE */}
              <div className="hud-field">
                <label>Objective Name</label>
                <input
                  type="text"
                  value={goal}
                  disabled={locked}
                  style={inputFix}
                  onChange={(e) => setGoal(e.target.value)}
                />
              </div>

              {/* DEADLINE */}
              <div className="hud-field">
                <label>Deadline</label>
                <input
                  type="date"
                  value={deadline}
                  disabled={locked}
                  style={inputFix}
                  onChange={(e) => setDeadline(e.target.value)}
                />
              </div>

              {/* TOTAL WORK */}
              <div className="hud-field">
                <label>Total Work (hrs)</label>
                <div className="hud-control">
                  <button disabled={locked} onClick={() => setTotalWork(v => Math.max(1, v - 1))}>−</button>
                  <input
                    type="number"
                    value={totalWork}
                    disabled={locked}
                    style={inputFix}
                    onWheel={wheelAdjust(setTotalWork, 1, 500)}
                    onChange={(e) => setTotalWork(+e.target.value || 1)}
                  />
                  <button disabled={locked} onClick={() => setTotalWork(v => Math.min(500, v + 1))}>+</button>
                </div>
                <input
                  type="range"
                  min="1"
                  max="500"
                  value={totalWork}
                  disabled={locked}
                  onChange={(e) => setTotalWork(+e.target.value)}
                />
              </div>

              {/* CAPACITY */}
              <div className="hud-field">
                <label>Daily Capacity</label>
                <div className="hud-control">
                  <button disabled={locked} onClick={() => setCapacity(v => Math.max(1, v - 1))}>−</button>
                  <input
                    type="number"
                    value={capacity}
                    disabled={locked}
                    style={inputFix}
                    onWheel={wheelAdjust(setCapacity, 1, 12)}
                    onChange={(e) => setCapacity(+e.target.value || 1)}
                  />
                  <button disabled={locked} onClick={() => setCapacity(v => Math.min(12, v + 1))}>+</button>
                </div>
                <input
                  type="range"
                  min="1"
                  max="12"
                  value={capacity}
                  disabled={locked}
                  onChange={(e) => setCapacity(+e.target.value)}
                />
              </div>

              {/* DELAY */}
              <div className="hud-field">
                <label>Delay Start (days)</label>
                <div className="hud-control">
                  <button disabled={locked} onClick={() => setDelay(v => Math.max(0, v - 1))}>−</button>
                  <input
                    type="number"
                    value={delay}
                    disabled={locked}
                    style={inputFix}
                    onWheel={wheelAdjust(setDelay, 0, 30)}
                    onChange={(e) => setDelay(+e.target.value || 0)}
                  />
                  <button disabled={locked} onClick={() => setDelay(v => Math.min(30, v + 1))}>+</button>
                </div>
                <input
                  type="range"
                  min="0"
                  max="30"
                  value={delay}
                  disabled={locked}
                  onChange={(e) => setDelay(+e.target.value)}
                />
              </div>
            </div>

            <div className="mission-analysis">
              <span className="analysis-title">Stress Projection</span>
              <div className="stress-bar">
                <div
                  className={`stress-fill ${stressLevel}`}
                  style={{
                    width: `${Math.min(
                      100,
                      (dailyLoad / Math.max(1, capacity)) * 100
                    )}%`
                  }}
                />
              </div>
              <span className="analysis-text">
                {stressLevel === "OVERLOAD"
                  ? "⚠ AI: This configuration will break you."
                  : stressLevel === "WARNING"
                  ? "⚡ AI: High pressure detected."
                  : "✅ AI: Plan is stable."}
              </span>
            </div>

            <button
              className={`lock-btn ${locked ? "locked" : ""}`}
              onClick={() => setLocked(!locked)}
            >
              {locked ? "🔒 MISSION LOCKED" : "⚠ LOCK PLAN"}
            </button>
          </div>
        </NeonCard>

        <div className="grid">
          <NeonCard title="Stress Meter">
            <motion.div
              className={`stress ${stressLevel}`}
              animate={{
                scale: [1, 1.15, 1],
                textShadow:
                  stressLevel === "CALM"
                    ? "0 0 25px #00ff9d"
                    : stressLevel === "WARNING"
                    ? "0 0 25px #ffaa00"
                    : "0 0 30px #ff3333",
              }}
              transition={{ repeat: Infinity, duration: 1.4 }}
            >
              {stressLevel}
            </motion.div>
          </NeonCard>

          <NeonCard title="Daily Workload">
            <h2>{dailyLoad} hrs/day</h2>
          </NeonCard>

          <NeonCard title="Free Time">
            <h2>{freeTime} hrs/day</h2>
          </NeonCard>

          <NeonCard title="Days Left">
            <h2>{totalDays} days</h2>
          </NeonCard>
        </div>

        <NeonCard title="Stress Forecast">
          <StressChart
            load={Number(dailyLoad)}
            capacity={capacity}
            days={totalDays}
          />
        </NeonCard>
      </motion.div>
    </>
  );
}
