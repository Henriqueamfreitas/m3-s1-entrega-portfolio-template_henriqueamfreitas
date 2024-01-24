import styles from '../TechCard/styles.module.css'

export function TechCard( {tecName, tecIcon } ){
    return(
        <li className={styles.li}>
            <img 
                className={styles.img}
                src={tecIcon} 
                alt='ícone da tecnologia em questão' 
            />
            <p className={`${styles.p} text-1`}>{tecName}</p>
        </li>
    )
}