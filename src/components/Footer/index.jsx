import wppIcon from "../../assets/whatsapp-icon.png"
import linkedinIcon from "../../assets/linkedin-icon.png"
import githubIcon from "../../assets/github-icon.png"

export function Footer(){
    return(
        <footer>
            <h2>Contato</h2>
            <div>
                <img 
                    src={wppIcon} 
                    alt="Ícone Whatsapp" 
                />
                <img 
                    src={linkedinIcon} 
                    alt="Ícone Linkedin" 
                />
                <img 
                    src={githubIcon} 
                    alt="Ícone Github" 
                />
            </div>
            <p>Todos os direitos reservados -</p>
            <p>José da Silva</p>
        </footer>
    )
}