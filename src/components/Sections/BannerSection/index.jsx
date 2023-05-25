import { username } from "../../../data/user";
import banner  from "../../../assets/banner-img.png"

export function BannerSection(){
    return(
        <section>
            <p>{username}</p>
            <h1>Bem vindo ao meu portfólio</h1>
            <p>Uma frase interessante sobre mim</p>
            <button>Saiba mais</button>
            <img 
                src={banner}
                alt="Banner" 
            />
        </section>
    )
}