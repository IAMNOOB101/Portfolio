import styles from "./SkeletonProjects.module.css";

export default function SkeletonProjects() {
  return (
    <section className={styles.wrapper}>
      {[1, 2, 3].map((i) => (
        <div key={i} className={styles.card}>
          <div className={styles.title}></div>
          <div className={styles.text}></div>
          <div className={styles.text}></div>
        </div>
      ))}
    </section>
  );
}
