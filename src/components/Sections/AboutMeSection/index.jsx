import styles from "../AboutMeSection/styles.module.css"

export function AboutMeSection(){
    return(
        <section className={styles.section}>
            <h2 className={`${styles.h2} title-3`}>Sobre mim</h2>
            <p className={`${styles.p} text-3`}>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ex magna, imperdiet sodales sem 
               quis, sollicitudin lobortis purus. Etiam a ipsum finibus, dictum leo non, ultrices dui. Nunc id 
               felis pharetra, vehicula enim in, suscipit nisi. Mauris eget sapien a velit facilisis ullamcorper 
               feugiat nec orci. Duis ac iaculis turpis, at feugiat orci.
            </p>
        </section>
    )
}