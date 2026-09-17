import { useState } from "react";
import { Linkedin, Instagram, Github, X } from "lucide-react";
import styles from "./ContactModal.module.css";

export default function ContactModal({ onClose }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    reason: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = `Portfolio Contact – ${form.reason}`;
    const body = `
Hi Aadarsh,

My name is ${form.name} from ${form.location}.
I am reaching out regarding: ${form.reason}.

Contact Details:
• Email: ${form.email}
• Mobile: ${form.phone}

Looking forward to connecting with you.

Best regards,
${form.name}
    `;

    const mailtoLink = `mailto:agrawalaadarsh387@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h2>Contact Aadarsh</h2>
          <button onClick={onClose} className={styles.closeIconBtn}>
            <X size={18} />
          </button>
        </div>

        <div className={styles.quickLinks}>
          <a
            href="https://www.linkedin.com/in/aadarshagrawal03/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.quickLinkBtn}
            title="LinkedIn Profile"
          >
            <Linkedin size={16} />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://www.instagram.com/agrawal_aadarsh_007/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.quickLinkBtn}
            title="Instagram Profile"
          >
            <Instagram size={16} />
            <span>Instagram</span>
          </a>
          <a
            href="https://github.com/IAMNOOB101"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.quickLinkBtn}
            title="GitHub Profile"
          >
            <Github size={16} />
            <span>GitHub</span>
          </a>
        </div>

        <div className={styles.dividerOr}>
          <span>OR SEND DIRECT MESSAGE</span>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Your Name"
            required
            onChange={handleChange}
          />

          <input
            name="phone"
            placeholder="Mobile Number"
            required
            onChange={handleChange}
          />

          <input
            name="email"
            type="email"
            placeholder="Email Address"
            required
            onChange={handleChange}
          />

          <input
            name="location"
            placeholder="Your Location"
            required
            onChange={handleChange}
          />

          <input
            name="reason"
            placeholder="Reason (Hiring / Collaboration / Freelance)"
            required
            onChange={handleChange}
          />

          <div className={styles.actions}>
            <button type="submit">Send Message</button>
            <button type="button" onClick={onClose} className={styles.cancel}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
