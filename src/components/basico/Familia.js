import React from "react";
import FamiliaMembro from "./FamiliaMembro";

export default (props) => {
    return (
        <div>
            <FamiliaMembro nome = "Lucio" sobrenome= {props.sobrenome} />
            <FamiliaMembro nome = "Paulo" {...props}/>
        </div>
       
    )
}