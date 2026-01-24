import { motion } from "framer-motion";
import styles from "./Hero.module.css";
import useMagnetic from "../hooks/useMagnetic";
import { fadeUp, stagger } from "../animations/motionVariants";

export default function Hero() {
  const primaryMagnetic = useMagnetic();
  const secondaryMagnetic = useMagnetic();

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={styles.hero}>
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className={styles.content}
      >
        <motion.span variants={fadeUp} className={styles.badge}>
          FULL STACK DEVELOPER
        </motion.span>

        <motion.h1 variants={fadeUp} className={styles.title}>
          <span>AADARSH AGRAWAL</span>
        </motion.h1>

        <motion.p variants={fadeUp} className={styles.subtitle}>
          Full-Stack Developer building modern, scalable web applications
          <br />
          focused on performance, clean architecture, and exceptional user experience
        </motion.p>

        <motion.div variants={fadeUp} className={styles.actions}>
          <button
            ref={primaryMagnetic.ref}
            onMouseMove={primaryMagnetic.onMouseMove}
            onMouseLeave={primaryMagnetic.onMouseLeave}
            onClick={() => scrollTo("projects")}
            className={styles.primary}
          >
            View Work
          </button>

          <button
            ref={secondaryMagnetic.ref}
            onMouseMove={secondaryMagnetic.onMouseMove}
            onMouseLeave={secondaryMagnetic.onMouseLeave}
            onClick={() => scrollTo("contact")}
            className={styles.secondary}
          >
            Contact
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
