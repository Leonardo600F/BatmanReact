import React from "react";
import './styles.css';
import Logo from '../../assets/BatmanLogo.jpg';

function Footer() {
    return(
        <>
        <footer className="footer">
        <img id='logo' src={Logo} />
        <span>Todos os direitos reservados &copy;</span>
        <span>Desenvolvido por: Leonardo Marin Zem</span>
    </footer>

    </>
    )
}

export default Footer;