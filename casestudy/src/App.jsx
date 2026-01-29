import { motion } from "framer-motion"

export default function App() {
  return (
    <div style={styles.page}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={styles.card}
      >
        <h1 style={styles.title}>Case Study Website</h1>
        <p style={styles.text}>
          This is a simple React + Framer Motion app without Tailwind or extra
          libraries.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={styles.button}
        >
          Explore Features
        </motion.button>
      </motion.div>
    </div>
  )
}

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#0f172a",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "system-ui, sans-serif",
  },
  card: {
    backgroundColor: "#020617",
    padding: "32px",
    borderRadius: "16px",
    width: "380px",
    textAlign: "center",
    color: "#e5e7eb",
    boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
  },
  title: {
    fontSize: "26px",
    marginBottom: "12px",
  },
  text: {
    fontSize: "15px",
    lineHeight: 1.6,
    marginBottom: "24px",
    color: "#cbd5f5",
  },
  button: {
    padding: "12px 20px",
    borderRadius: "10px",
    border: "none",
    backgroundColor: "#6366f1",
    color: "white",
    fontSize: "15px",
    cursor: "pointer",
  },
}
