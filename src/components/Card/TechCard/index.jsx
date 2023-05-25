export function TechCard( {tecName, tecIcon } ){
    return(
        <div>
            <img 
                src={tecIcon} 
                alt="ícone da tecnologia em questão" 
            />
            <p>{tecName}</p>
        </div>
    )
}