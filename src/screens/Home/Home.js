import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Contador from "../../components/Contador/Contador";

function Home(){
    return(
        <React.Fragment>
            <Header/>
            <h1>Home</h1>
            <Contador/>
            <Footer/>
        </React.Fragment>
    )
}

export default Home;