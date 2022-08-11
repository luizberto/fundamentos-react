import React, { useState } from "react";

export default () => {
    const [valor, setValor] = useState('Inicial')
    function quandoMudar(e) {
        setValor(e.target.value)
    }
    return (
        <div>
            <input value={valor} onChange={quandoMudar} />
            <input value={valor} readOnly />
            <input value={undefined}/>
        </div>
    )
} 