import React from 'react';
import News from './News';
import Login from "./backoffice/Login";
import{
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
export default function P1(){
    return(
        <>
        <header>
            <div className="header_wrapper">
                <img className="logo"
                     src={"Home - Institut d'Estudis Espacials de Catalunya_files/Descriptor+Regular@3x.png"}
                     alt="Logo for The Institute of Spacial Studies"/>

                <div className="wrapper_montsec_navlinks">

                    <nav className="navlinks">
                        <form action="main.html" className="search-container">
                            <label>
                                <input type="text" placeholder="Search" name="search"/>
                            </label>
                        </form>
                        <a href="#cat">CAT</a>
                        <a href="#en">EN</a>
                        <a href="#es">ES</a>
                        <Link to={'/backoffice/Login'} Route={"/backoffice/Login"}>INTRANET</Link>


                    </nav>
                    <div className="montsec_container">
                        <img src={"Home - Institut d'Estudis Espacials de Catalunya_files/montsec.png"}
                             alt="Logo for The Montsec Observatory"/>
                        <p className="montsec-text">
                            Montsec Observatory
                        </p>
                    </div>
                    <button className="menu_button">
                        Menu <img className="menu_img"
                                  src={"Home - Institut d'Estudis Espacials de Catalunya_files/menu_icon.png"}
                                  alt="icon"/>
                    </button>
                </div>
            </div>

            <nav className="topnav">
                <a className="active" href="#ieec">IEEC</a>
                <a href="#research">RESEARCH</a>
                <a href="#innovation">INNOVATION</a>
                <a href="#training">TRAINING</a>
                <a href="#outreach">OUTREACH</a>
                <a href="#media">MEDIA</a>
            </nav>

        </header>
            <div>
                test
            </div>

    <div className="first_screen">
        <div className="first-screen-img">
            <img src={"Home - Institut d'Estudis Espacials de Catalunya_files/image5.webp"}
                 alt="Background first screen"/>
        </div>

        <div className="rectangle">
            <h5>Research From Space and Into Space</h5>
            <p>Read more</p>
        </div>

    </div>

   <News />

    <footer>
        <div className="footer_wrapper">
            <div className="contact_info">
                <div className="all_contact">
                    <h3>Get in Touch</h3>
                    <ul className="contact">
                        <li>Institut d'Estudis Espacials de Catalunya</li>
                        <li>Gran Capità, 2-4</li>
                        <li>Edifici Nexus, Desp. 201</li>
                        <li>08034 Barcelona</li>
                        <li>E-mail: ieec@ieec.cat</li>
                        <li>Tel.: +34 93 280 2088</li>
                        <li>Fax:&nbsp;+34 93 280 6395</li>
                    </ul>
                </div>
                <div className="socials">
                    <div className="follow_us">
                        <h3>Follow Us</h3>
                    </div>

                    <div className="social_logos">
                        <p className="media_links">
                            <a href="https://twitter.com/IEEC_space"><img
                                src={"Home - Institut d'Estudis Espacials de Catalunya_files/logo8.png"} alt="Twitter"
                                title="Twitter"/></a>
                            <a href="https://www.facebook.com/IEECspace/"><img
                                src={"Home%20-%20Institut%20d'Estudis%20Espacials%20de%20Catalunya_files/logo9.png"}
                                alt="Facebook"
                                title="Facebook"/></a>
                            <a href="https://www.linkedin.com/company/institut-d'estudis-espacials-de-catalunya---ieec/"><img
                                src={"Home - Institut d'Estudis Espacials de Catalunya_files/logo10.png"}
                                alt="LinkedIn" title="LinkedIn"/></a>
                            <a href="#"><img
                                src={"Home - Institut d'Estudis Espacials de Catalunya_files/logo11.png"} alt="RSS"
                                title="RSS"/></a>
                            <a href="https://www.flickr.com/photos/ieec_space/"><img
                                src={"Home - Institut d'Estudis Espacials de Catalunya_files/logo12.png"} alt="Flickr"
                                title="Flickr"/></a>
                        </p>
                    </div>
                </div>
            </div>

            <div className="legal">
                <div className="footer_logo">
                    <img
                        src={"Home - Institut d'Estudis Espacials de Catalunya_files/Screenshot+at+2018-12-03+16-04-09.png"}
                        alt="" title=""/>
                </div>
                <div className="privacy">
                    <p>Privacy Policy</p>
                </div>
                <div className="copyright">
                    <p>Science Wave for IEEC (C) 2018 SW/IEEC All rights reserved</p>
                </div>
            </div>
        </div>
    </footer>
</>
    );
}