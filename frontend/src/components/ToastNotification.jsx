import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ExternalLink, X } from "lucide-react";
import styles from "./ToastNotification.module.css";

export default function ToastNotification({ toast, onClose }) {
  if (!toast) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -20, scale: 0.9 }}
        className={styles.toastContainer}
      >
        <div className={styles.toastContent}>
          <CheckCircle2 className={styles.icon} size={22} />
          <div className={styles.textGroup}>
            <p className={styles.message}>{toast.message}</p>
            {toast.actionUrl && (
              <a
                href={toast.actionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.actionLink}
              >
                {toast.actionText || "Open link"} <ExternalLink size={12} />
              </a>
            )}
          </div>
          <button onClick={onClose} className={styles.closeBtn}>
            <X size={16} />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
