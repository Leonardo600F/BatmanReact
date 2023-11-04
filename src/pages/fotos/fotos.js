import React from 'react';
import Header from '../../components/header/header';
import './styles.css';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/BatmanLogo.jpg';
import Cards from '../../components/cards';
import Footer from '../../components/footer/footer';

function Fotos() {
    
    return(
        <>
        <Header />

        <h2 className="H2T">Explore a nossa galeria:</h2>

<div className="fotos-filme">
    <div className="fotos-filme-conteudo">
        <div className="foto banner1">Batman</div>
        <div className="foto banner2">Detetive Gordon</div>
        <div className="foto banner3">Mulher-Gato</div>
        <div className="foto banner4">Pinguin</div>
        <div className="foto banner5">Charada</div>

    </div>

</div>

        <Footer />
        
        </>
    )
}

export default Fotos;