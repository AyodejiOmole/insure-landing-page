import '../main.css';
import React, {useEffect} from 'react';
import introDesktop from '../images/image-intro-desktop.jpg';
import introMobile from '../images/image-intro-mobile.jpg';
import iconClose from "../images/icon-close.svg";
import iconHamburger from "../images/icon-hamburger.svg";

const Header = (props) => {
    useEffect(() => {
        const img = document.getElementById("image");
        window.addEventListener('resize', function() {
            if (document.documentElement.clientWidth >= 767) {
                img.src = introDesktop;
            } else {
                img.src = introMobile;
            };
        })
        
        if (document.documentElement.clientWidth >= 767) {
            img.src = introDesktop;
        } else {
            img.src = introDesktop;
        };
    });

    const changeDisplay = () => {
        const menu = document.getElementById("menu");
        const ham = document.getElementById("hamburger");

        if(menu.style.display == 'none') {
            menu.style.display = 'block';
            menu.style.height = '80vh';
            ham.src = iconClose;
        } else {
            menu.style.display = 'none'
            ham.src = iconHamburger;
        }
    }

    return (
        <>
        <header id='header'>
            <span>
                <img src={props.Logo} alt="Logo"/>
                <img src={props.Hamburger} alt="Hamburger" id="hamburger" onClick={changeDisplay}/>
            </span>

            <ul id="menu">
                <li><a href="#">How we work</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Account</a></li>
                <li>
                    <a href="#" style={{display: 'inline'}}>
                        <button>View plans</button>
                    </a>
                </li>
            </ul>
        </header>
        <div id='floating-action-button'></div>
        </>
    );
};

export default Header;