import { username } from "../../../data/user";
import banner  from "../../../assets/banner-img.png"
import { Button } from "../../Button";

export function BannerSection(){
    return(
        <section>
            <p>{username}</p>
            <h1>Bem vindo ao meu portfólio</h1>
            <p>Uma frase interessante sobre mim</p>
            <Button text={'Saiba mais'}></Button>
            <img 
                src={banner}
                alt="Banner" 
            />
        </section>
    )
}