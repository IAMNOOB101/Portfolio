import styles from "./Navbar.module.css";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={styles.nav}
    >
      <div className={styles.container}>
        <span className={styles.logo}>AADI</span>

        <div className={styles.links}>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </motion.nav>
  );
}
