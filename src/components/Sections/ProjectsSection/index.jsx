import { projects } from "../../../data/projects.js"
import { ProjectCard } from "../../Card/ProjectCard/index.jsx"

export function ProjectSection(){
    return(
        <section>
            <ProjectCard projectName={projects[0].name} projectDecription={projects[0].descricao}></ProjectCard>
            <ProjectCard projectName={projects[1].name} projectDecription={projects[1].descricao}></ProjectCard>
            <ProjectCard projectName={projects[2].name} projectDecription={projects[2].descricao}></ProjectCard>
            <ProjectCard projectName={projects[3].name} projectDecription={projects[3].descricao}></ProjectCard>
        </section>
    )
}