import { motion } from "framer-motion";
import styles from "./Projects.module.css";
import { container, item } from "../animations/projectVariants";
import SkeletonProjects from "./SkeletonProjects";
import useProjects from "../hooks/useProjects";

// Static fallback data used when API returns empty or fails
const FALLBACK_PROJECTS = [
  {
    id: 1,
    title: "Wanderlust",
    image: "/projects/wanderlust.png",
    description:
      "Full-stack Destination Review platform built with React and Node.js backend. Features session-based authentication for secure user sessions.",
    techStack: "React, JavaScript, Node.js, MongoDB, JWT",
    liveUrl: null,
    repoUrl: "https://github.com/IAMNOOB101/Wanderlust.git"
  },
  {
    id: 2,
    title: "Interview AI",
    image: "/projects/interview-ai.png",
    description:
      "AI-powered interview preparation platform with real-time NLP feedback. Features JWT-based authentication, role-based authorization, and secure data handling.",
    techStack: "React, Python, Django, NLP, Machine Learning",
    liveUrl: null,
    repoUrl: "https://github.com/IAMNOOB101/Mini-Project.git"
  },
  {
    id: 3,
    title: "Stock Trading Platform",
    image: "/projects/stock.png",
    description:
      "Trading platform with real-time market data and analytics. A functional clone of Zerodha Kite with secure authentication and robust backend services.",
    techStack: "React, JavaScript, Node.js, WebSockets",
    liveUrl: null,
    repoUrl: null
  },
  {
    id: 4,
    title: "Monopoly",
    image: "/projects/monopoly.png",
    description:
      "Full-stack digital Monopoly game with real-time multiplayer. Features user authentication, game state management, and live multiplayer via WebSockets.",
    techStack: "React, Python, Flask, Tkinter",
    liveUrl: null,
    repoUrl: null
  }
];

function ProjectLink({ href, children }) {
  if (!href || href === "#") {
    return (
      <span className={styles.linkDisabled} title="Coming soon">
        {children}
      </span>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.link}
    >
      {children}
    </a>
  );
}

export default function Projects() {
  const { projects: apiProjects, loading, error } = useProjects();

  if (loading) return <SkeletonProjects />;

  // Use API data if populated, otherwise fall back to static list
  const projects =
    apiProjects && apiProjects.length > 0 ? apiProjects : FALLBACK_PROJECTS;

  return (
    <motion.section
      id="projects"
      className={styles.projects}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.h2 variants={item} className={styles.heading}>
        Projects
      </motion.h2>

      {error && (
        <p className={styles.notice}>
          Showing cached projects — live API unavailable.
        </p>
      )}

      <div className={styles.grid}>
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={item}
            whileHover={{ y: -8 }}
            className={`glow ${styles.card}`}
          >
            {/* Project image */}
            {project.image && (
              <div className={styles.imageWrapper}>
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  loading="lazy"
                />
              </div>
            )}

            <h3>{project.title}</h3>
            <p>{project.description}</p>

            {/* Tech tags */}
            <div className={styles.tags}>
              {(project.techStack || "")
                .split(",")
                .map((tag) => tag.trim())
                .filter(Boolean)
                .map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
            </div>

            <div className={styles.links}>
              <ProjectLink href={project.liveUrl}>Live</ProjectLink>
              <ProjectLink href={project.repoUrl}>Code</ProjectLink>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
