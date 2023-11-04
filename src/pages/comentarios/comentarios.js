import React from "react";
import Header from "../../components/header/header";
import './styles.css';
import { Link, useNavigate } from "react-router-dom";
import Logo from '../../assets/BatmanLogo.jpg';
import Footer from "../../components/footer/footer";

function Comentarios() {

    return(
        <>
        <Header />

        <h2 className="H2T">O que a crítica achou:</h2>

<div className="comentarios">
    <div className="comentarios-sessao">
        <div className="comentario1">Finalmente trazendo o Batman como um grande detetive, Matt Reeves mostra obsessão pela solidez e qualidade técnica de seu noir trágico e entrega um filme de origem às avessas.
            <div className="pessoa">- Cinema Rapadura</div>
        </div>
        <div class="comentario2">Gotham está incrível, um quadrinho animado! O Batman de Robert é um dos mais sombrios quando se comparado aos anteriores. A mais sombria versão do herói.
            <div class="pessoa">- IGN</div>
        </div>
        <div className="comentario3">O filme propõe um mistério intrigante em relação a tal corrupção de Gotham. Destaque totalmente para a trilha sonora e a interpretação de Robert Pattinson e Zoe Kravitz.
            <div className="pessoa">- Omelete</div>
        </div>
        <div className="comentario4">A trama consegue misturar com maestria as cenas de investigação e ação. A cidade de Gotham parece ter vida própria, como se fosse um personagem vivo na obra.
            <div className="pessoa">- Pipocando</div>
        </div>
    </div>
</div>

        <Footer />
        </>
    )
    
}

export default Comentarios;