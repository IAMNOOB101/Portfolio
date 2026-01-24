import { motion } from "framer-motion";
import {
  Code,
  Braces,
  Database,
  Server,
  Cloud,
  Cpu,
  GitBranch,
  Box,
  Globe
} from "lucide-react";
import styles from "./Skills.module.css";

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const skills = {
  programming: [
    { name: "Java", icon: Code, link: "https://docs.oracle.com/en/java/" },
    { name: "Python", icon: Code, link: "https://docs.python.org/3/" },
    { name: "JavaScript", icon: Braces, link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "SQL", icon: Database, link: "https://www.w3schools.com/sql/" }
  ],
  frontend: [
    { name: "HTML", icon: Globe, link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { name: "CSS", icon: Globe, link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { name: "React.js", icon: Cpu, link: "https://react.dev/" },
    { name: "Bootstrap", icon: Box, link: "https://getbootstrap.com/docs/" }
  ],
  backend: [
    { name: "Node.js", icon: Server, link: "https://nodejs.org/en/docs" },
    { name: "REST APIs", icon: Server, link: "https://restfulapi.net/" },
    { name: "MVC Architecture", icon: Cpu, link: "https://developer.mozilla.org/en-US/docs/Glossary/MVC" }
  ],
  databases: [
    { name: "MongoDB", icon: Database, link: "https://www.mongodb.com/docs/" },
    { name: "MySQL", icon: Database, link: "https://dev.mysql.com/doc/" }
  ],
  tools: [
    { name: "GitHub", icon: GitBranch, link: "https://docs.github.com/" },
    { name: "Docker", icon: Box, link: "https://docs.docker.com/" },
    { name: "CDN", icon: Cloud, link: "https://www.cloudflare.com/learning/cdn/what-is-a-cdn/" }
  ],
  core: [
    { name: "Data Structures & Algorithms", icon: Cpu, link: "https://www.geeksforgeeks.org/data-structures/" },
    { name: "Operating Systems", icon: Cpu, link: "https://www.geeksforgeeks.org/operating-systems/" },
    { name: "DBMS", icon: Database, link: "https://www.geeksforgeeks.org/dbms/" },
    { name: "Artificial Intelligence", icon: Cpu, link: "https://www.ibm.com/topics/artificial-intelligence" }
  ]
};

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className={styles.skills}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.h2 variants={item} className={styles.heading}>
        Skills & Expertise
      </motion.h2>

      {Object.entries({
        "Programming Languages": skills.programming,
        "Frontend Development": skills.frontend,
        "Backend & APIs": skills.backend,
        Databases: skills.databases,
        "Cloud & Tools": skills.tools,
        "Core Computer Science": skills.core
      }).map(([title, list]) => (
        <motion.div key={title} variants={item} className={styles.block}>
          <h3>{title}</h3>
          <div className={styles.grid}>
            {list.map(({ name, icon: Icon, link }) => (
              <a
                key={name}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.skill}
              >
                <Icon size={16} />
                <span>{name}</span>
              </a>
            ))}
          </div>
        </motion.div>
      ))}

      <motion.div variants={item} className={styles.block}>
        <h3>Soft Skills</h3>
        <div className={styles.grid}>
          {[
            "Problem Solving",
            "Leadership & Initiative",
            "Communication",
            "Time Management"
          ].map((skill) => (
            <span key={skill} className={styles.soft}>
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
