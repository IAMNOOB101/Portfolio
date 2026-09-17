import { motion } from "framer-motion";
import styles from "./BackgroundEffects.module.css";

export default function BackgroundEffects() {
  return (
    <div className={styles.bgContainer}>
      {/* Scenic Mountain & Starry Aurora Backdrop */}
      <motion.div
        className={styles.scenicImage}
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.45 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />

      {/* Dark Vignette & Glass Gradient Overlay */}
      <div className={styles.vignetteOverlay} />

      {/* Floating Gold & Amber Aurora Orbs */}
      <motion.div
        className={`${styles.orb} ${styles.orbGold}`}
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -40, 30, 0],
          scale: [1, 1.15, 0.95, 1]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className={`${styles.orb} ${styles.orbCyan}`}
        animate={{
          x: [0, -40, 40, 0],
          y: [0, 30, -30, 0],
          scale: [1.1, 0.9, 1.1, 1.1]
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Starry Dust Overlay */}
      <div className={styles.starsOverlay} />
    </div>
  );
}
