import React from "react";
import ListaPeliculas from "../../components/ListaPeliculas/ListaPeliculas";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

function Personajes(){
    let arrayPeliculas = ["Thor", "Iron Man", "Hulk","Capitan America", "Spider man"]
    return(
        <React.Fragment>
            <Header/>
            <ListaPeliculas datos={arrayPeliculas}/>
            <Footer/>
        </React.Fragment>
    )
}

export default Personajes;