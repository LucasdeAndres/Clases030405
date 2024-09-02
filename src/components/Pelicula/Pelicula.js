import React from "react";
import "./Pelicula.css"

function Pelicula(props){
    return(
        <li>{props.nombrePelicula}</li>
    )
}

export default Pelicula;