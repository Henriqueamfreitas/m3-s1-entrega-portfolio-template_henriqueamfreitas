import wppIcon from "../../assets/whatsapp-icon.png"
import linkedinIcon from "../../assets/linkedin-icon.png"
import githubIcon from "../../assets/github-icon.png"
import styles from "../Footer/styles.module.css"

export function Footer(){
    return(
        <footer className={styles.footer}>
            <h2 className={styles.h2}>Contato</h2>
            <div className={styles.container}>
                <img
                    className={styles.img} 
                    src={wppIcon} 
                    alt="Ícone Whatsapp" 
                />
                <img 
                    className={styles.img} 
                    src={linkedinIcon} 
                    alt="Ícone Linkedin" 
                />
                <img 
                    className={styles.img} 
                    src={githubIcon} 
                    alt="Ícone Github" 
                />
            </div>
            <p className={styles.p}> Todos os direitos reservados - José da Silva</p>
        </footer>
    )
}