import { TechCard } from '../../Card/TechCard/index.jsx'
import {technologies} from '../../../data/technologies.js' 
import styles from '../TechSection/styles.module.css'

export function TechSection(){
    return(
        <section className={styles.section}>
            <h2 className={`${styles.h2} title-3`}>Tecnologias</h2>
            <ul className={styles.ul}>
                <TechCard tecName={technologies[0].name} tecIcon={technologies[0].img}></TechCard>
                <TechCard tecName={technologies[1].name} tecIcon={technologies[1].img}></TechCard>
                <TechCard tecName={technologies[2].name} tecIcon={technologies[2].img}></TechCard>
                <TechCard tecName={technologies[3].name} tecIcon={technologies[3].img}></TechCard>
            </ul>
        </section>
    )
}
