import styles from "./index.module.css";
import { Image, Tooltip } from "antd";
import { ReactComponent as React } from "../../assets/tech/react.svg";
import { ReactComponent as TypeScript } from "../../assets/tech/ts.svg";
import { ReactComponent as Node } from "../../assets/tech/node.svg";
import { ReactComponent as MySQL } from "../../assets/tech/mysql.svg";
import { ReactComponent as Firebase } from "../../assets/tech/firebase.svg";
import { ReactComponent as PHP } from "../../assets/tech/php.svg";
import { ReactComponent as GitHub } from "../../assets/contact/github.svg";
import { ReactComponent as Internet } from "../../assets/contact/internet.svg";
import { ReactComponent as Java } from "../../assets/tech/java.svg";
import { ReactComponent as SQL } from "../../assets/tech/sql.svg";
//import { ReactComponent as AndroidStudio } from "../../assets/tech/android.svg";

const Projects = () => {
  const projects = [
    {
      img: "p1",
      name: "Mi Portafolio",
      github: "https://github.com/fechoritas/portafolio",
      deploy: "https://fechoritas.github.io/portafolio/",
      description:
        "Mi portafolio personal, donde te presento mis proyectos de manera más rápida y accesible",
      techs: [
        {
          name: "React",
          icon: <React className={styles.svg} />,
        },
        {
          name: "TypeScript",
          icon: <TypeScript className={styles.svg} />,
        },
        {
          name: "Firebase",
          icon: <Firebase className={styles.svg} />,
        },
      ],
      type: "deployed",
    },
    {
      img: "p2",
      name: "AUTOMATIZACION DE SISTEMA",
      github: "https://github.com/fechoritas/",
      deploy: "https://fechoritas.github.io/sistemaregistro/",
      description:
        "Automatizacion del sistema interno de la empresa Gruvitec",
      techs: [
        {
          name: "PHP",
          icon: <PHP className={styles.svg} />,
        },
        {
          name: "JavaScript",
          icon: <Java className={styles.svg} />,
        },
        {
          name: "Node.js",
          icon: <Node className={styles.svg} />,
        },
        {
          name: "MySQL",
          icon: <MySQL className={styles.svg} />,
        },
      ],
      type: "demo",
    },
    {
      img: "next",
      name: "Gestion de Procesos - GSP",
      github: "https://github.com/fechoritas/",
      description:
        "Creacion de sistema para la gestion de procesos en un almacen ",
      techs: [
        {
          name: "PHP",
          icon: <PHP className={styles.svg} />,
        },
        {
          name: "JavaScript",
          icon: <Java className={styles.svg} />,
        },
        {
          name: "Node.js",
          icon: <Node className={styles.svg} />,
        },
        {
          name: "SQL",
          icon: <SQL className={styles.svg} />,
        },
      ],
      type: "demo",
    },
  ];

  return (
    <>
      <section className={styles.projects} id="projects">
        <h1>Proyectos</h1>
        <div className={styles.cards}>
          {projects.map((project, index) => {
            return (
              <div key={index} className={styles.card}>
                <Image
                  className={styles.imgProject}
                  src={`./images/projects/${project.img}.webp`}
                  alt={project.name}
                  fallback="./images/placeholder.webp"
                  width="100%"
                />
                <div className={styles.text}>
                  <h2>{project.name}</h2>
                  <p className={styles.description}>{project.description}</p>
                  <div className={styles.techs}>
                    {project.techs.map((tech, index) => {
                      return (
                        <div key={index} className={styles.tech}>
                          <Tooltip title={tech.name}>{tech.icon}</Tooltip>
                        </div>
                      );
                    })}
                  </div>
                  <div className={styles.footer}>
                    <a
                      className={styles.linkFooter}
                      href={project.github}
                      target="_blank"
                    >
                      <GitHub className={styles.svg} /> <p>Ver en GitGub</p>
                    </a>
                    <a
                      className={styles.linkFooter}
                      href={project.deploy}
                      target="_blank"
                    >
                      <Internet className={styles.svg} />{" "}
                      <p>
                        {project.type == "deployed"
                          ? "Ir al sitio"
                          : project.type == "demo"
                          ? "Demo Frontend"
                          : "Descargar APK"}
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Projects;
