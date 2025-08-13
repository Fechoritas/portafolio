import React from "react";
import styles from "./index.module.css";

const EXPERIENCES = [
  {
    company: "Grupo Vicente Inversiones E.I.R.L",
    role: "Desarrollador Full-Stack",
    duration: "Octubre 2023 - Diciembre 2024",
    description: (
      <>
        <p>
          Durante mi colaboración con la empresa <strong>GRUVITEC</strong>,
          participé activamente en el desarrollo de un sistema web de gestión de
          procesos internos, orientado a la automatización, organización y
          optimización de las operaciones administrativas y técnicas.
        </p>
        <p>Responsabilidades principales:</p>
        <ul>
          <li>
            Diseño e implementación del sistema interno utilizando tecnologías web
            como <strong>PHP, HTML, CSS y JavaScript</strong>.
          </li>
          <li>
            Aplicación del patrón de diseño <strong>MVC</strong>, asegurando una
            estructura limpia, escalable y mantenible.
          </li>
          <li>
            Organización modular del sistema, dividiendo correctamente las
            responsabilidades en carpetas como <code>controllers</code>,{" "}
            <code>models</code>, <code>views</code> y <code>routes</code>.
          </li>
          <li>
            Desarrollo de interfaces web amigables y funcionales, centradas en la
            experiencia del usuario (UX).
          </li>
          <li>
            Implementación de módulos personalizados para la gestión de
            información, registro de actividades y control de procesos internos.
          </li>
          <li>
            Apoyo en la documentación técnica del sistema y propuesta de mejoras
            para futuros desarrollos.
          </li>
        </ul>
      </>
    ),
    tech: ["React", "Ant Design", "Node.js (Typescript)", "APIs", "MySQL"],
  },
];

const Experience: React.FC = () => {
  return (
    <section className={styles.exp} id="exp">
      <h1>Experiencia Laboral</h1>
      <div className={styles.experienceList}>
        {EXPERIENCES.map((exp, index) => (
          <div key={index} className={styles.card}>
            <h3 className={styles.role}>
              {exp.role} - {exp.company}
            </h3>
            <p className={styles.duration}>{exp.duration}</p>
            <p className={styles.description}>{exp.description}</p>
            <div className={styles.techList}>
              {exp.tech.map((tech, i) => (
                <span key={i} className={styles.techTag}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
