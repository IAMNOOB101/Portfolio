import { useState } from "react";
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
        <h2>Contact Aadarsh</h2>

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
