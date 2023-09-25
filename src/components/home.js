import React from "react";
import '../styles/home.css';


function Home() {
    let centros = ["Buenos Aires", "Cordoba", "Rosario"];
    let clinica = "Nick Rivera Medical Center";
    return (
        <div className="home_main_container">
            <h1>Nuevos centros de atención!!!</h1>
            <h2>Welcome to {clinica}</h2>
            <p>Consulte por su especialista aquí:</p>
        </div>
    )
}

export default Home;