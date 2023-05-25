import { projects } from "../../../data/projects.js"
import githubIcon  from "../../../assets/github-icon.png"
import { Button } from "../../Button/index.jsx"


export function ProjectCard( {projectName, projectDecription } ){
    return(
        <div>
            <div>
                <h2>{projectName}</h2>
                <img 
                    src={githubIcon}
                    alt="Ícone github " 
                />
            </div>
                <p>{projectDecription}</p>
                <Button text={'Saiba mais'}></Button>
        </div>
    )
}