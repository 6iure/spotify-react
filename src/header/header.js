import React from "react";
import './header.css';
import Main from "../main/main"; // Children relation
import smallLeft from '../assets/icons/small-left.png';
import smallRight from '../assets/icons/small-right.png';
import searchIcon from '../assets/icons/search.png';

const header = () => {
    return (
        <main>

            <div className="main-container">

                <nav className="header__navigation">

                    <div className="navigation">

                        <button className="arrow-left">
                            <img src={smallLeft} alt="Seta esquerda" />
                        </button>
                        <button className="arrow-right">
                            <img src={smallRight} alt="Seta direita" />
                        </button>

                        <div className="header__search">
                            <img src={searchIcon} alt="" />
                            <input id="search-input" type="text" maxLength="800" placeholder="O que você quer ouvir?" />
                        </div>  

                        <div className="header__login">
                            <button className="subscribe">Inscrever-se</button>
                            <button className="login">Entrar</button>
                        </div>

                    </div>

                </nav>

                <Main/>

            </div>

        </main>
    )
};

export default header;