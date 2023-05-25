import { Button } from "../Button"

export function Header(){
    return(
        <header>
            <h2>Portfólio</h2>
            <div>
                <p>Sobre</p>
                <p>Stack</p>
                <p>Projetos</p>
            </div>
            <Button text={'Contato'}></Button>
        </header>
    )
}