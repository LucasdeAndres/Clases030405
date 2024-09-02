import React from "react";

function Personaje(props){
    console.log(props)
    return(
        <React.Fragment>
            <h1>Personaje</h1>
            <p>{props.match.params.id}</p>
        </React.Fragment>
    )
}

export default Personaje