import { useCallback, useRef } from "react";
import { motion } from "framer-motion";
import styles from "./Hero.module.css";
import { fadeUp, stagger } from "../animations/motionVariants";

// Magnetic button effect — uses callback ref to avoid react-hooks/refs lint errors
function useMagneticRef() {
  const elRef = useRef(null);

  const ref = useCallback((node) => {
    elRef.current = node;
  }, []);

  const onMouseMove = useCallback((e) => {
    const el = elRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  }, []);

  const onMouseLeave = useCallback(() => {
    if (elRef.current) {
      elRef.current.style.transform = "translate(0,0)";
    }
  }, []);

  return { ref, onMouseMove, onMouseLeave };
}

export default function Hero() {
  const primaryMagnetic = useMagneticRef();
  const secondaryMagnetic = useMagneticRef();

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
          focused on performance, clean architecture, and exceptional user
          experience
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
