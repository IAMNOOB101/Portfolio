import { useState } from "react";
import styles from "./Footer.module.css";
import ContactModal from "./ContactModal";

export default function Footer() {
  const [open, setOpen] = useState(false);

  return (
    <footer id="contact" className={styles.footer}>
      <h2>Let’s Build Something Legendary.</h2>

      <button onClick={() => setOpen(true)} className={styles.sayHello}>
        Say Hello
      </button>

      <p>© 2026 Aadarsh's Portfolio</p>

      {open && <ContactModal onClose={() => setOpen(false)} />}
    </footer>
  );
}