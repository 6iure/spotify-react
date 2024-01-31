import React from "react";
import './sidebar.css';
import logoSpotify from '../assets/icons/logo-spotify.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const sidebar = () => {

    return (
        <div className="sidebar">
        <nav className="sidebar__navigation">
            <div className="logo">
                <a href="/">
                    <img src={logoSpotify} alt="Logo Spotify" />
                </a>
            </div>
            <ul>
                <li>
                    <a href="/">
                        <FontAwesomeIcon className="house-icon" icon={"house"}></FontAwesomeIcon>
                        <span>Início</span>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <FontAwesomeIcon className="search-icon" icon={"magnifying-glass"}></FontAwesomeIcon>
                        <span>Buscar</span>
                    </a>
                </li>
            </ul>
        </nav>

        <div className="library">
            <div className="library__content">
                <button className="library__button">
                    <FontAwesomeIcon className="book-icon" icon={"book"}></FontAwesomeIcon>
                    <span className="library-name">Sua Biblioteca</span>
                </button>
                <FontAwesomeIcon className="plus-icon" icon={"plus"}></FontAwesomeIcon>
            </div>

            <section className="section-playlist">
                <div className="section-playlist__content">
                    <span className="text title">Crie sua primeira playlist</span>
                    <span className="text subtitle">É fácil, vamos te ajudar.</span>
                    <button className="section-playlist__button">
                        <span>Criar playlist</span>
                    </button>
                </div>
            </section>

            <section className="podcast-section">
                <div className="podcast-section__content">
                    <span className="text title">Que tal seguir um podcast novo?</span>
                    <span className="text subtitle">Avisaremos você sobre novos episódios.</span>

                    <button className="podcast-section__button">
                        <span>Explorar</span>
                    </button>

                </div>

            </section>

            <div className="cookies">
                <a href="/">Cookies</a>
            </div>

            <div className="languages">
                <button className="languages__button">
                    <FontAwesomeIcon className="globe-icon" icon={"globe"}></FontAwesomeIcon>
                    <span>Português do Brasil</span>
                </button>
            </div>
            
        </div>
    </div>
    )
};

export default sidebar;