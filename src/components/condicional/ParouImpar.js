import React from "react";

export default (props) => {
    const isPar = props.numero % 2 === 0;
    return (
        <div>
            {isPar ? <h5>Par</h5> : <h5>Impar</h5>}
        </div>
    )
}