import styles from "./Navbar.module.css";
import { motion, useScroll, useSpring } from "framer-motion";
import ResumeButton from "./ResumeButton";

export default function Navbar({ onNotify }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <motion.div className={styles.progressBar} style={{ scaleX }} />
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={styles.nav}
      >
        <div className={styles.container}>
          <a href="#" className={styles.logoGroup}>
            <span className={styles.logo}>AADI</span>
            <span className={styles.logoTag}>DEV</span>
          </a>

          <div className={styles.rightGroup}>
            <div className={styles.links}>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </div>

            <ResumeButton variant="nav" onNotify={onNotify} />
          </div>
        </div>
      </motion.nav>
    </>
  );
}
