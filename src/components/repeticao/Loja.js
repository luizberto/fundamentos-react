import React from "react";
import produtos from "../../data/produtos";

export default () => {

    const produto = produtos.map((produto) => {
        return (
            <h4 key={produto.id}>
                nome - {produto.nome},  
                preço - {produto.preço}
            </h4>
        )

    })

    return (
        <div>
            <ul>
                {produto}
            </ul>
        </div>
    )
}