import React from "react";
import './css/card.css'

export default (props) => {
    return (
        <>
            <div className="card">
                <h4 className="titulo">{props.titulo}</h4>
                {props.children}
            </div>
        </>
    )
}