import React from "react";

export default ({min, max}) => {

    const sorteio = Math.random() * (max - min) + min;
    const arredondado = Math.ceil(sorteio);

    return(
        <>
            <h1>Seja bem vindo ao sorteio</h1>
            
            <h2>valor maximo: {max}</h2>
            <h2>valor minimo: {min}</h2>

            <h1>sorteio: {arredondado}</h1>
        </>
    )
}