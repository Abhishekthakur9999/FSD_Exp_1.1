import { motion } from "framer-motion";

export default function CalmBackground() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        overflow: "hidden",
        pointerEvents: "none",
        background: "radial-gradient(circle at top, #05070c, #02030a)"
      }}
    >
      {/* drifting gradient */}
      <motion.div
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          position: "absolute",
          inset: "-20%",
          background:
            "linear-gradient(120deg, rgba(0,255,157,0.08), rgba(0,170,255,0.05), rgba(255,255,255,0.02))",
          filter: "blur(120px)"
        }}
      />

      {/* floating calm orbs */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: ["0%", "-120%"],
            opacity: [0, 0.6, 0],
            scale: [0.8, 1.1]
          }}
          transition={{
            duration: 30 + i * 6,
            repeat: Infinity,
            delay: i * 5,
            ease: "easeInOut"
          }}
          style={{
            position: "absolute",
            bottom: "-30%",
            left: `${i * 15 + 10}%`,
            width: 260,
            height: 260,
            borderRadius: "50%",
            background: "rgba(0,255,157,0.06)",
            filter: "blur(40px)"
          }}
        />
      ))}
    </div>
  );
}
