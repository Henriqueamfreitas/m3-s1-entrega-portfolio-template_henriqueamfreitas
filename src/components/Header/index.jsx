import styles from '../Header/styles.module.css'
import { Button } from '../Button'

export function Header(){
    return(
        <header className={styles.header} >
            <h2 className={`${styles.h2} text-1`}>Portfólio</h2>
            <div className={styles.container}>
                <p className={`${styles.container__p} text-5`}>Sobre</p>
                <p className={`${styles.container__p} text-5`}>Stack</p>
                <p className={`${styles.container__p} text-5`}>Projetos</p>
            </div>
            <Button text={'Contato'}></Button>
        </header>
    )
}