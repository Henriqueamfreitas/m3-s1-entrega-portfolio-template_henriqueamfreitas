import { projects } from "../../../data/projects.js"
import { ProjectCard } from "../../Card/ProjectCard/index.jsx"
import styles from "../ProjectsSection/styles.module.css"


export function ProjectSection(){
    return(
        <section className={styles.section}>
            <h2 className={`${styles.h2} title-2`}>Projetos</h2>
            <ul className={styles.ul}>
                <ProjectCard projectName={projects[0].name} projectDecription={projects[0].descricao}></ProjectCard>
                <ProjectCard projectName={projects[1].name} projectDecription={projects[1].descricao}></ProjectCard>
                <ProjectCard projectName={projects[2].name} projectDecription={projects[2].descricao}></ProjectCard>
                <ProjectCard projectName={projects[3].name} projectDecription={projects[3].descricao}></ProjectCard>
            </ul>
        </section>
    )
}