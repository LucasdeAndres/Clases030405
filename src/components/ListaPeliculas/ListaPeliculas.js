import React from "react";
import Pelicula from "../Pelicula/Pelicula";
import "./ListaPeliculas.css"

function ListaPeliculas(props){
    console.log(props)
    return(
        <ul>
            {
                props.datos.map((peli, idx) => {
                    return <Pelicula key={peli + idx} nombrePelicula={peli}/>
                })
            }
        </ul>
    )
}

export default ListaPeliculas;