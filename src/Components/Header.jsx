import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
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
                        <p className='teks-hello'>Hello</p>
                        <p className='teks-gerak'>Im Daniansyah</p>
                        <p className='teks-definisi'>Are u know me so well? Let me introduce myself :)</p>
                        <div className="container">
                            <Link to="/" className="teks-button-gts" name="gimmick">
                                Get Started
                            </Link>
                        </div>
                    </div>
                    <div className='gambar-header'>
                        <img src={`${process.env.PUBLIC_URL}/header-image.png`} alt="" className='gambar-header' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
