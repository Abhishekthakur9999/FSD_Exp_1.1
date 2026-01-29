import { motion, useMotionValue, useTransform } from "framer-motion";

export default function NeonCard({
  title,
  children,
  disableTilt = false,
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-50, 50], [8, -8]);
  const rotateY = useTransform(x, [-50, 50], [-8, 8]);

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      className="card"
      onMouseMove={!disableTilt ? handleMouseMove : undefined}
      onMouseLeave={!disableTilt ? handleMouseLeave : undefined}
      style={
        disableTilt
          ? {}
          : {
              rotateX,
              rotateY,
              boxShadow: "0 0 40px rgba(255,0,140,0.35)",
            }
      }
      whileHover={
        disableTilt
          ? { scale: 1.01 }
          : { scale: 1.04 }
      }
      transition={{ type: "spring", stiffness: 180, damping: 15 }}
    >
      <h3>{title}</h3>
      {children}
    </motion.div>
  );
}
