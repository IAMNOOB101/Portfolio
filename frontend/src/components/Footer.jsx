import { useState } from "react";
import { Mail, Github, Linkedin, Instagram, MessageSquare } from "lucide-react";
import styles from "./Footer.module.css";
import ContactModal from "./ContactModal";
import ResumeButton from "./ResumeButton";

export default function Footer({ onNotify }) {
  const [open, setOpen] = useState(false);

  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.container}>
        <span className={styles.badge}>GET IN TOUCH</span>
        <h2 className={styles.heading}>Let’s Build Something Legendary.</h2>

        <div className={styles.actionGroup}>
          <button onClick={() => setOpen(true)} className={styles.sayHello}>
            <MessageSquare size={18} /> Say Hello
          </button>
        </div>

        <ResumeButton variant="footer" onNotify={onNotify} />

        <div className={styles.socials}>
          <a
            href="https://github.com/IAMNOOB101"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Profile"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/aadarshagrawal03/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn Profile"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://www.instagram.com/agrawal_aadarsh_007/"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram Profile"
          >
            <Instagram size={20} />
          </a>
          <a
            href="mailto:agrawalaadarsh387@gmail.com"
            title="Send Email"
          >
            <Mail size={20} />
          </a>
        </div>

        <p className={styles.copyright}>
          © 2026 Aadarsh Agrawal • Designed & Built with passion
        </p>
      </div>

      {open && <ContactModal onClose={() => setOpen(false)} />}
    </footer>
  );
}