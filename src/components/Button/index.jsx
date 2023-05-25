import styles from "../Header/styles.module.css"


export function Button( {text} ){
    return(
        <button className={styles.button}>{text}</button>
    )
}