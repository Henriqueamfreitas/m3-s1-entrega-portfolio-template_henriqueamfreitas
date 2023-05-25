import { username } from "../../../data/user";
import banner  from "../../../assets/banner-img.png"
import { Button } from "../../Button";
import styles from "../BannerSection/styles.module.css"

export function BannerSection(){
    return(
        <section className={styles.section}>
            <div className={styles.container}>
                <p className={styles.username}>{username}</p>
                <h1 className={styles.h1}>Bem vindo ao meu portfólio</h1>
                <p className={styles.p}> Uma frase interessante sobre mim</p>
                <Button text={'Saiba mais'}></Button>
            </div>
            <img 
                className={styles.img} 
                src={banner}
                alt="Banner" 
            />
        </section>
    )
}