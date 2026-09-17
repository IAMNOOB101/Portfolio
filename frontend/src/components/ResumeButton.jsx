import { useState } from "react";
import { Download, FileText, ExternalLink, Check } from "lucide-react";
import confetti from "canvas-confetti";
import styles from "./ResumeButton.module.css";

const RESUME_DRIVE_URL =
  "https://drive.google.com/file/d/1EtpBVfBzlT5Sen-6rjvMvsdm9JRqEOA4/view?usp=sharing";
const RESUME_PDF_PATH = "/Aadarsh_Agrawal_Resume.pdf";

export default function ResumeButton({ variant = "hero", onNotify }) {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = (e) => {
    e.preventDefault();

    // Confetti celebration animation!
    try {
      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#ffd700", "#f59e0b", "#38bdf8", "#ffffff"]
      });
    } catch (err) {
      console.error(err);
    }

    // Trigger PDF download
    const link = document.createElement("a");
    link.href = RESUME_PDF_PATH;
    link.download = "Aadarsh_Agrawal_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 4000);

    if (onNotify) {
      onNotify({
        message: "Aadarsh Agrawal's Resume downloaded successfully! 📄",
        actionText: "View on Drive",
        actionUrl: RESUME_DRIVE_URL
      });
    }
  };

  if (variant === "nav") {
    return (
      <div className={styles.navResumeGroup}>
        <button
          onClick={handleDownload}
          className={styles.navBtn}
          title="Download Resume (PDF)"
        >
          {downloaded ? <Check size={16} /> : <Download size={16} />}
          <span>Resume</span>
        </button>
        <a
          href={RESUME_DRIVE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.navDriveIcon}
          title="View on Google Drive"
        >
          <ExternalLink size={14} />
        </a>
      </div>
    );
  }

  if (variant === "hero") {
    return (
      <div className={styles.heroResumeGroup}>
        <button
          onClick={handleDownload}
          className={`${styles.heroBtn} ${downloaded ? styles.success : ""}`}
        >
          <div className={styles.iconBox}>
            {downloaded ? (
              <Check size={18} className={styles.pulseIcon} />
            ) : (
              <Download size={18} className={styles.pulseIcon} />
            )}
          </div>
          <span>{downloaded ? "Downloaded!" : "Download Resume"}</span>
        </button>

        <a
          href={RESUME_DRIVE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.heroDriveBtn}
          title="View resume directly on Google Drive"
        >
          <FileText size={16} />
          <span>View CV</span>
          <ExternalLink size={14} />
        </a>
      </div>
    );
  }

  if (variant === "footer") {
    return (
      <div className={styles.footerResumeGroup}>
        <button onClick={handleDownload} className={styles.footerBtn}>
          {downloaded ? <Check size={18} /> : <Download size={18} />}
          <span>Download Resume</span>
        </button>
        <a
          href={RESUME_DRIVE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.footerDriveLink}
        >
          View on Drive <ExternalLink size={14} />
        </a>
      </div>
    );
  }

  if (variant === "fab") {
    return (
      <div className={styles.fabContainer}>
        <button
          onClick={handleDownload}
          className={styles.fabBtn}
          title="Download Resume (PDF)"
        >
          <div className={styles.fabGlow} />
          {downloaded ? <Check size={18} /> : <Download size={18} />}
          <span className={styles.fabText}>Resume</span>
        </button>
      </div>
    );
  }

  return null;
}
