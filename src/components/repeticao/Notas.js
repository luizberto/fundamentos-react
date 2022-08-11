import React from "react";
import aluno from "../../data/alluno";

export default () => {
    const alunos = aluno.map ((aluno) => {
        return(
            <li key={aluno.id}>
                nome: {aluno.nome}, nota: {aluno.nota}
            </li>
        )
    })
    return(
        <ul>
            {alunos}
        </ul>
    )
}