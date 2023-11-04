import React from "react";
import Header from "../../components/header/header";
import './styles.css';
import { Link, useNavigate } from "react-router-dom";
import Logo from '../../assets/BatmanLogo.jpg';
import Footer from "../../components/footer/footer";

function Contatos() {

    return(
        <>
        <Header />

        <h2 className="H2T">Entre em contato conosco:</h2>

<div className="formas-contato">
    <div className="link-contato">
        <a href="https://www.instagram.com/wbpictures_br/" target="_blank">
            <div className="rede-social">Instagram: @wbpictures_br</div>
        </a>

        <a href="https://www.facebook.com/WarnerBrosPicturesBrasil?locale=pt_BR" target="_blank">
            <div className="rede-social">Facebook: Warner Bros. Pictures</div>
        </a>

        <a href="https://twitter.com/wbpictures_br?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank">
            <div className="rede-social">Twitter: @wbpictures_br</div>
        </a>

        <a href="https://www.youtube.com/@WarnerBrosPicturesBR" target="_blank">
            <div className="rede-social">Youtube: Warner Bros. Pictures Brasil</div>
        </a>

    </div>
</div>

            <Footer />
        </>
    )
}

export default Contatos;