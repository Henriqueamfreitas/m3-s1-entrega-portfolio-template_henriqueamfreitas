import { projects } from "../../../data/projects.js"
import githubIcon  from "../../../assets/github-icon.png"
import { Button } from "../../Button/index.jsx"
import styles from "../ProjectCard/styles.module.css"

export function ProjectCard( {projectName, projectDecription } ){
    return(
        <li className={styles.li}>
            <div className={styles.container}>
                <h2 className={`${styles.h2} text-1`}>{projectName}</h2>
                <img 
                    className={styles.img}
                    src={githubIcon}
                    alt="Ícone github " 
                />
            </div>
            <p className={`${styles.p} text-3`}>{projectDecription}</p>
            <a className={`${styles.a} text-2`} href="">Saiba mais</a>
        </li>
    )
}