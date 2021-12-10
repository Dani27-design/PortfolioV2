import React, { useState, useEffect } from 'react'
import { Link, useLocation } from "react-router-dom";
import { WindowView, SmoothScroll } from "./Viewport";
import { bubble as Menu } from 'react-burger-menu'
import { Helmet } from 'react-helmet';

function Navbar() {
    const [nav, setnav] = useState(false);
    const [seo, setSeo] = useState('Daniansyah');
    const [isOpen, setOpen] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setnav(true);
            setOpen(false);
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
            link.addEventListener("click", (event) => {
                event.preventDefault();
                //SMOOTH SCROLL
                const targetId = link.getAttribute("name");
                if (targetId === "home") {
                    setSeo("Daniansyah")
                }
                if (targetId === "project") {
                    setSeo("Daniansyah | Project")
                }
                if (targetId === "certification") {
                    setSeo("Daniansyah | Certification")
                }
                if (targetId === "contact") {
                    setSeo("Daniansyah | Contact")
                }
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

    const handleIsOpen = () => {
        setOpen(!isOpen)
    }

    const closeSideBar = () => {
        setOpen(false)
    }

    return (
        <>
            <Helmet title={seo} defer={false} />
            <nav className={nav ? 'nav active' : 'nav'}>
                <div className="link-con logo-gambar">
                    <a href="home" name="home" className="navi-link logo-navbar">DC<img className="dot-navbar" src={`${process.env.PUBLIC_URL}/dot-navbar.png`} alt="" /></a>
                </div>

                <div className="link-con menu">
                    <a href="project" name="project" className="navi-link">Project</a>
                    <a href="certification" name="certification" className="navi-link">Certification</a>
                    <a href="contact" name="contact" className="navi-link">Contact</a>
                </div>
            </nav>

            <Menu
                customBurgerIcon={<img className="menu-icon" src={`${process.env.PUBLIC_URL}/Menu.svg`} alt="" />}
                customCrossIcon={<img className="close-icon" src={`${process.env.PUBLIC_URL}/Close.svg`} alt="" />}
                width={'80%'}
                isOpen={isOpen}
                onOpen={handleIsOpen}
                disableAutoFocus>
                <nav className='navi'>
                    <div className="link-con menu">
                        <a href="home" name="home" className="navi-link logo-navbar">DC<img className="dot-navbar" src={`${process.env.PUBLIC_URL}/dot-navbar.png`} alt="" /></a>
                        <a href="project" name="project" className="navi-link">Project</a>
                        <a href="certification" name="certification" className="navi-link">Certification</a>
                        <a href="contact" name="contact" className="navi-link">Contact</a>
                    </div>
                </nav>
            </Menu>
        </>
    )
}

export default Navbar
