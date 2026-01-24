import { motion } from "framer-motion";
import useProjects from "../hooks/useProjects";
import { container, item } from "../animations/projectVariants";
import SkeletonProjects from "./SkeletonProjects";
import styles from "./Projects.module.css";

export default function Projects() {
  const { projects, loading, error } = useProjects();

  if (loading) return <SkeletonProjects />;
  if (error) return <p className={styles.error}>{error}</p>;

  return (
    <motion.section
      className={styles.projects}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.h2 variants={item} className={styles.heading}>
        Projects
      </motion.h2>

      <div className={styles.grid}>
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={item}
            whileHover={{ y: -6 }}
            className={styles.card}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <span>{project.techStack}</span>

            <div className={styles.links}>
              <a href={project.liveUrl} target="_blank">Live</a>
              <a href={project.repoUrl} target="_blank">Code</a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
