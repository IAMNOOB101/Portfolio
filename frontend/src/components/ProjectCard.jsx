import { motion } from "framer-motion";
import styles from "./ProjectCard.module.css";
import { reveal } from "../animations/motionVariants";

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const projects = [
  {
    title: "Wanderlust",
    image: "/projects/wanderlust.png",
    description:
      "Full-stack Destination Review platform built with React and Node.js backend. Features Session based authentication for secure user sessions.",
    tags: ["React", "Javascript", "Node.js", "JWT"],
    liveUrl: "#",
    repoUrl: "https://github.com/IAMNOOB101/Wanderlust.git"
  },
  {
    title: "Interview AI",
    image: "/projects/interview-ai.png",
    description:
      "AI-powered interview preparation platform with real-time feedback. Accompanies  JWT-based authentication, role-based authorisation and secure data handling.",
    tags: ["React", "Python", "Django", "NLP", "Machine Learning"],
    liveUrl: "#",
    repoUrl: "https://github.com/IAMNOOB101/Mini-Project.git"
  },
  {
    title: "Stock Trading Platform",
    image: "/projects/stock.png",
    description:
      "Trading platform with real-time market data and analytics. Implements a clone for Zerodha with secure authentication and robust backend services.",
    tags: ["React", "Javascript", "Node.js"],
    liveUrl: "#",
    repoUrl: "#"
  },
  {
    title: "Monopoly",
    image: "/projects/monopoly.png",
    description:
      "Full-stack digital Monopoly game with secure backend. Features user authentication, game state management, and real-time multiplayer functionality.",
    tags: ["React", "Python", "Tinkter", "Flask"],
    liveUrl: "#",
    repoUrl: "#"
  }
];

export default function ProjectCard() {
  return (
    <motion.section
      id="projects"
      className={styles.section}
      variants={reveal}
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
            key={project.title}
            variants={item}
            whileHover={{ y: -8 }}
            className={`glow ${styles.card}`}
          >
            <div className={styles.imageWrapper}>
              <img src={project.image} alt={project.title} />
            </div>

            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className={styles.tags}>
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            <div className={styles.links}>
              <a href={project.liveUrl}>Live</a>
              <a href={project.repoUrl}>Code</a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
