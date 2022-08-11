import React, { useState } from "react";

export default (props) => {
    function gerarNumeroNaoContido(min, max, array) {
        const aleatorio = parseInt(Math.random * (max + 1 - min)) + min;

        return array.includes(aleatorio) ?
            gerarNumeroNaoContido(min, max, array) :
            aleatorio;
    }//logica para evitar que numeros ja sorteados sejam retirados novamente

    function gerarNumeros(qtde) {
        const numeros = Array(qtde).fill(0).reduce((nums) => {
            const novoNumero = gerarNumeroNaoContido(1, 60, nums)
            return [...nums, novoNumero]

        }, []).sort((n1, n2) => n1 - n2)

        return numeros
    }//logica para armazenar numeros sorteados

    const [qtde, setQtde] = useState(props.qtde || 5)
    const numerosIniciais = Array(qtde).fill(0)
    const [numeros, setNumeros] = useState(numerosIniciais)


    return (
        <div>
            <h2>mega Sena</h2>
            <h3>{numeros.join(' ')}</h3>
            <button onClick={_=> setNumeros(gerarNumeros(qtde))}>
                Gerar numero
            </button>
        </div>

    )
}