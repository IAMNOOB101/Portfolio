import styles from "./TechTicker.module.css";

const tech = ["React", "Java", "Spring Boot", "MongoDB", "Node", "REST APIs", "Python", "Django", "JavaScript", "CSS", "HTML5"];

export default function TechTicker() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.track}>
        {[...tech, ...tech].map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
    </div>
  );
}
