import { useCallback, useRef } from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowDown } from "lucide-react";
import styles from "./Hero.module.css";
import { fadeUp, stagger } from "../animations/motionVariants";
import ResumeButton from "./ResumeButton";

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

export default function Hero({ onNotify }) {
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
        <motion.div variants={fadeUp} className={styles.badgeWrapper}>
          <span className={styles.statusDot} />
          <span className={styles.badge}>
            <Sparkles size={13} className={styles.sparkleIcon} /> FULL STACK DEVELOPER
          </span>
        </motion.div>

        <motion.h1 variants={fadeUp} className={styles.title}>
          <span className={styles.nameGradient}>AADARSH AGRAWAL</span>
        </motion.h1>

        <motion.p variants={fadeUp} className={styles.subtitle}>
          Building high-performance, scalable web applications with clean architecture,
          <br />
          seamless full-stack APIs, and exceptional user experiences.
        </motion.p>

        {/* Tech tags preview */}
        <motion.div variants={fadeUp} className={styles.techPills}>
          {["Spring Boot", "React.js", "Java", "Node.js", "MongoDB", "Python"].map((tech) => (
            <span key={tech} className={styles.techPill}>
              {tech}
            </span>
          ))}
        </motion.div>

        {/* Primary CTAs including Download Resume */}
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

          <ResumeButton variant="hero" onNotify={onNotify} />

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

        {/* Scroll indicator */}
        <motion.div
          variants={fadeUp}
          className={styles.scrollIndicator}
          onClick={() => scrollTo("skills")}
        >
          <ArrowDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
