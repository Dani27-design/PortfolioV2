import React from 'react'
import Tilt from 'react-parallax-tilt';
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function Contact() {
    return (
        <div id="contact">
            <div className='hero-contact'>
                <Tilt reset={true}>
                    <div
                        className='gambar-contact'
                        data-aos="fade-right"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out-cubic">
                        <img src={`${process.env.PUBLIC_URL}/contact-image.png`} alt="" className='gambar-header' />
                    </div>
                </Tilt>
                <div
                    className='kanan'
                    data-aos="fade-left"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out-cubic">
                    <div className="container-teks-contact">
                        <p className='teks-contact'>Lets connect with me</p>
                    </div>
                    <div className="container-sosmed">
                        <a href="https://wa.me/6285790428078" rel="noopener noreferrer" target="_blank">
                            <img src={`${process.env.PUBLIC_URL}/WhatsApp.svg`} alt="" className='icon-sosmed' />
                        </a>
                        <a href="https://instagram.com/danichusyaidin" rel="noopener noreferrer" target="_blank">
                            <img src={`${process.env.PUBLIC_URL}/Instagram.svg`} alt="" className='icon-sosmed' />
                        </a>
                        <a href="https://github.com/Dani27-design" rel="noopener noreferrer" target="_blank">
                            <img src={`${process.env.PUBLIC_URL}/GitHub.svg`} alt="" className='icon-sosmed' />
                        </a>
                        <a href="mailto:muhammad.19043@mhs.unesa.ac.id" rel="noopener noreferrer" target="_blank">
                            <img src={`${process.env.PUBLIC_URL}/Gmail.svg`} alt="" className='icon-sosmed' />
                        </a>
                        <a href="https://www.linkedin.com/in/daniansyahchusyaidin" rel="noopener noreferrer" target="_blank">
                            <img src={`${process.env.PUBLIC_URL}/LinkedIn.svg`} alt="" className='icon-sosmed' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
