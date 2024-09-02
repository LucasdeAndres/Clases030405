import React, { Component } from "react";

class Contador extends Component{
    constructor(){
        super();
        this.state = {
            peliculas: 0
        }
    }
    sumar(){
        this.setState({
            peliculas: this.state.peliculas + 1
        })
    }
    restar(){
        this.setState({
            peliculas: this.state.peliculas - 1
        })
    }
    render(){
        return(
            <React.Fragment>
                <h1>Contador</h1>
                <p>{this.state.peliculas}</p>
                <button onClick={() => this.sumar()}>+</button>
                <button onClick={() =>  this.restar()}>-</button>
            </React.Fragment>
        )
    }
}

export default Contador;