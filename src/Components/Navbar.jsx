import React, { useState, useEffect } from 'react'
import LogoNavbar from '../../public/Icon/LogoNavbar.svg'
import MenuIcon from '../../public/Icon/Menu.svg'
import CloseIcon from '../../public/Icon/Close.svg'
import { Link, useLocation } from "react-router-dom";
import { WindowView, SmoothScroll } from "./Viewport";
import { bubble as Menu } from 'react-burger-menu'

function Navbar() {
    
    const [nav, setnav] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setnav(true);
        } else {
            setnav(false);
        }
    }
    window.addEventListener('scroll', changeBackground);

    const { y_top } = WindowView();
    const { pathname } = useLocation();
    let timer = 0;

    //NAVI WITH WIDTH 800px
    useEffect(() => {
        const links = document.querySelectorAll(".link-con .navi-link");

        if (pathname !== "/") {
            timer = 100;
        }

        //TOGGLE LINK ACTIVE
        links.forEach((link, i) => {
            link.addEventListener("click", () => {
                //SMOOTH SCROLL
                const targetId = link.getAttribute("name");
                const duration = 1000;
                setTimeout(() => {
                    SmoothScroll({ targetId, duration });
                    timer = 0;
                }, timer);
            });
        });
    }, []);

    //TOGGLE NAV BACKGROUND COLOR
    useEffect(() => {
        const navigation = document.querySelector("nav");

        if (y_top > 0) {
            navigation.classList.add("active");
        } else {
            navigation.classList.remove("active");
        }
    }, [y_top]);

    return (
        <>
            <nav className={nav ? 'nav active' : 'nav'}>
                <div className="link-con logo-gambar">
                    <Link to="/" className="navi-link" name="main">
                        <img className="logo" src={LogoNavbar} alt="" />
                    </Link>
                </div>

                <div className="link-con menu">
                    <Link to="/" className="navi-link" name="aboutus">
                        Project
                    </Link>
                    <Link to="/" className="navi-link" name="service">
                        Certification
                    </Link>
                    <Link to="/" className="navi-link" name="porto">
                        Contact
                    </Link>
                </div>
            </nav>

            <Menu
                customBurgerIcon={<img className="menu-icon" src={MenuIcon} alt="" />}
                customCrossIcon={<img className="close-icon" src={CloseIcon} alt="" />}>
                <nav className='navi'>
                    <div className="link-con menu">
                        <Link to="/" className="navi-link" name="main">
                            <img className="logo" src={LogoNavbar} alt="" />
                        </Link>
                        <Link to="/" className="navi-link" name="aboutus">
                            Project
                        </Link>
                        <Link to="/" className="navi-link" name="service">
                            Certification
                        </Link>
                        <Link to="/" className="navi-link" name="porto">
                            Contact
                        </Link>
                    </div>
                </nav>
            </Menu>
        </>
    )
}

export default Navbar
