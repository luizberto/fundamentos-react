import React from "react";

export default (props) => {

    const prova = props.nota > 7 ? 'aprovado' : 'reprovado'
    return (

        <>
            <h2>{props.nome}</h2>
            <h6>{props.nota}</h6>
            <h1>{prova}</h1>
        </>
    );
}