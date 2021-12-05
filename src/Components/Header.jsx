import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Gambar from '../../public/Images/header-image.png'
import { Link, useLocation } from "react-router-dom";
import { WindowView, SmoothScroll } from "./Viewport";

function Header() {
    const { y_top } = WindowView();
    const { pathname } = useLocation();
    let timer = 0;

    useEffect(() => {
        const links = document.querySelectorAll(".container .teks-button-gts");

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
            <div id='main'>
                <Navbar />
                <div className='hero'>
                    <div className='kiri'>
                        <p className='dark-teks'>Unlimited <span className='ungu-teks'>Creativity</span></p>
                        <p className='dark-teks'>With The <span className='ungu-teks'>Best Quality</span></p>
                        <p className='teks-definisi'>Create a design to make it easier to promote your product</p>
                        <div className="container">
                            <Link to="/" className="teks-button-gts" name="gimmick">
                                Get Started
                            </Link>
                        </div>
                    </div>
                    <div className='gambar-header'>
                        <img src={Gambar} alt="" className='gambar-header' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
