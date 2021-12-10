import React, { useEffect, useState, useRef } from 'react'
import Navbar from './Navbar'
import { useLocation } from "react-router-dom";
import { WindowView, SmoothScroll } from "./Viewport";
import Typed from 'typed.js';
import Tilt from 'react-parallax-tilt';
import { Helmet } from 'react-helmet';
import ReactTooltip from 'react-tooltip';

function Header() {
    const [anime, setanime] = useState(false);
    const [theme, setTheme] = useState(false);
    const [seo, setSeo] = useState('Daniansyah');

    const setActive = () => {
        if (window.scrollY >= 50) {
            setanime(true);
        } else {
            setanime(false);
        }
    }
    window.addEventListener('scroll', setActive);

    if (theme) {
        document.body.classList.add("light-theme");
    } else {
        document.body.classList.remove("light-theme");
    }

    const { y_top } = WindowView();
    const { pathname } = useLocation();
    let timer = 0;

    useEffect(() => {
        const links = document.querySelectorAll(".container-button .button");

        if (pathname !== "/") {
            timer = 100;
        }

        //TOGGLE LINK ACTIVE
        links.forEach((link, i) => {
            link.addEventListener("click", (event) => {
                event.preventDefault();
                //SMOOTH SCROLL
                const targetId = link.getAttribute("name");
                if (targetId === "project") {
                    setSeo("Daniansyah | Project")
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

    const TeksGerak = () => {
        const typeTarget = useRef(null);

        useEffect(() => {
            const typed = new Typed(typeTarget.current, {
                strings: ["Daniansyah", "Frontend Developer", "Mobile Developer", "UI Designer"],
                typeSpeed: 40,
                loop: true
            });

            return () => {
                typed.destroy();
            };
        }, []);

        return <span ref={typeTarget} />;
    };

    return (
        <>
            <div id='home'>
                <Helmet title={seo} defer={true} />
                <Navbar />
                <div className='hero'>
                    <div className='kiri'>
                        <p className='teks-hello'>Hello</p>
                        <div className="container-teks-gerak">
                            <p className='teks-gerak'>Im <TeksGerak /></p>
                            <img src={`${process.env.PUBLIC_URL}/dot.svg`} alt="" className="dot-teks" />
                        </div>
                        <p className='teks-about'>Are u know me so well? Let me introduce myself :)</p>
                        <div className="container-button">
                            <a
                                href="-"
                                className="button"
                                onClick={() => {
                                    window.open("mailto:muhammad.19043@mhs.unesa.ac.id?subject=I%20Want%20To%20Hire%20You&body=I%20need%20", "_self");
                                }}>Hire Me</a>
                            <a
                                href="-"
                                className="button"
                                onClick={() => {
                                    window.open("https://drive.google.com/file/d/17CUOqM02Jq2S17qY6S64cfXwuquVF5nS/view?usp=sharing", "_self");
                                }}>Get CV</a>
                            <a href="project" name="project" className="button">Project</a>
                        </div>
                    </div>
                    <Tilt reset={true}>
                        <div className='gambar-header'>
                            <img src={`${process.env.PUBLIC_URL}/header-image.png`} alt="" className='gambar-header' />
                        </div>
                    </Tilt>
                </div>
                <img
                    data-for='bubble'
                    data-tip='Click me'
                    onClick={() => setTheme(!theme)}
                    src={`${process.env.PUBLIC_URL}/lolisister.gif`}
                    alt=""
                    className={anime ? 'anime-active' : 'anime'} />
                <ReactTooltip
                    id='bubble'
                    className='bubble'
                    textColor={theme ? '#fff' : '#252525'}
                    backgroundColor={theme ? '#252525' : '#fff'}
                    place='left' />
            </div>
        </>
    )
}

export default Header
