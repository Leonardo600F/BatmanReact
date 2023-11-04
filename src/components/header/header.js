import React from 'react';
import './styles.css';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/BatmanLogo.jpg';
import Footer from '../footer/footer';
<script src="https://kit.fontawesome.com/a747b09475.js" crossorigin="anonymous"></script>

function Header() {
    const navigate = useNavigate();

    return (
        <>
        <header>
            <img id='logo' src={Logo} />
            <nav>
                <ul>
                    <Link style={{textDecoration: 'none'}} to='/'>
                        <li>Home</li>
                        </Link>

                    <Link style={{textDecoration: 'none'}} to= '/contato'>
                        <li>Contato</li>
                        </Link>
                        
                    <Link style={{textDecoration: 'none'}} to='/fotos'>
                        <li>Fotos</li>
                        </Link>

                    <Link style={{textDecoration: 'none'}} to='/comentarios'>
                        <li>Comentários</li>
                    </Link>
                </ul>
            </nav>

            <div className='social-media'>
            <a href="https://www.instagram.com/leo_mz.2002/" target="_blank">
                <i className="fa-brands fa-instagram"></i></a>

                <a href="https://www.facebook.com/leonardo.marinzem/?locale=pt_BR" target="_blank">
                    <i className="fa-brands fa-facebook-f"></i></a>

                    <a href="https://github.com" target="_blank">
                        <i className="fa-brands fa-github"></i></a>
            
                        <a href="https://br.linkedin.com" target="_blank">
                            <i className="fa-brands fa-linkedin-in"></i></a>
            </div>

        </header>
        </>
    )
}

export default Header;