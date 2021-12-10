import React from 'react'
import Tilt from 'react-parallax-tilt';

function Contact() {
    return (
        <div id="contact">
            <div className='hero-contact'>
                <Tilt reset={true}>
                    <div className='gambar-contact'>
                        <img src={`${process.env.PUBLIC_URL}/contact-image.png`} alt="" className='gambar-header' />
                    </div>
                </Tilt>
                <div className='kanan'>
                    <div className="container-teks-contact">
                        <p className='teks-contact'>Lets connect with me</p>
                    </div>
                    <div className="container-sosmed">
                        <a href="https://wa.me/6285790428078" rel="noopener noreferrer" target="_blank">
                            <img src={`${process.env.PUBLIC_URL}/WhatsApp.svg`} alt="" className='icon-sosmed' />
                        </a>
                        <a href="https://wa.me/6285790428078" rel="noopener noreferrer" target="_blank">
                            <img src={`${process.env.PUBLIC_URL}/Instagram.svg`} alt="" className='icon-sosmed' />
                        </a>
                        <a href="https://wa.me/6285790428078" rel="noopener noreferrer" target="_blank">
                            <img src={`${process.env.PUBLIC_URL}/GitHub.svg`} alt="" className='icon-sosmed' />
                        </a>
                        <a href="https://wa.me/6285790428078" rel="noopener noreferrer" target="_blank">
                            <img src={`${process.env.PUBLIC_URL}/Gmail.svg`} alt="" className='icon-sosmed' />
                        </a>
                        <a href="https://wa.me/6285790428078" rel="noopener noreferrer" target="_blank">
                            <img src={`${process.env.PUBLIC_URL}/LinkedIn.svg`} alt="" className='icon-sosmed' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
