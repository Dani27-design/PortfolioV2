import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function Project() {
    return (
        <div id="project">
            <div className="container-project">
                <div
                    className="container-header"
                    data-aos="fade-down"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out-cubic">
                    <p className="header-project">Latest Project</p>
                    <p className="teks-about">Overview of my project you can see or download </p>
                </div>
                <div className="container-isi-project">
                    <div
                        className="box-image"
                        data-aos="fade-right"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out-cubic">
                        <div className="container-image kalo">
                            <img className="image-project" src={`${process.env.PUBLIC_URL}/Kalo.png`} alt="" />
                        </div>
                    </div>
                    <div
                        className="container-deskripsi-project"
                        data-aos="fade-left"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out-cubic">
                        <p className="header-project">KALo</p>
                        <p className="teks-about">This application to control your weight and get healthy food recommendations and recipes to cook healthy meals. This app build with React Native and Firebase.</p>
                        <a href="https://drive.google.com/file/d/1OQQvxWDQkBGSb8wIxyVtj_AzQHbZAO7G/view?usp=sharing" className="button-download">Download App</a>
                    </div>
                </div>
                <div className="container-isi-project reverse">
                    <div
                        className="box-image"
                        data-aos="fade-left"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out-cubic">
                        <div className="container-image mousy">
                            <img className="image-project" src={`${process.env.PUBLIC_URL}/Mousy.png`} alt="" />
                        </div>
                    </div>
                    <div
                        className="container-deskripsi-project right"
                        data-aos="fade-right"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out-cubic">
                        <p className="header-project">Mousy Get Ready</p>
                        <p className="teks-about right-text">This game is inspired by the game "hill climb racing" which was popular in its time. This game uses the main character of a mouse who is looking for cheese and coins. This game already on dekstop and mobile, build with Godot Game Engine.</p>
                        <div className="container-button-mousy">
                            <a href="https://drive.google.com/file/d/1AmY26wtEaGT3Tl0pJTZ6kBHxD-usd0EJ/view?usp=sharing" className="button-download">Download App</a>
                            <a href="https://drive.google.com/file/d/1NOqscDpXEm7JTK4Ci9dJc7tD4HeFi5Gl/view?usp=sharing" className="button-download">Download Exe</a>
                        </div>
                    </div>
                </div>
                <div className="container-isi-project">
                    <div
                        className="box-image"
                        data-aos="fade-right"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out-cubic">
                        <div className="container-image himti">
                            <img className="image-project" src={`${process.env.PUBLIC_URL}/Himti.png`} alt="" />
                        </div>
                    </div>
                    <div
                        className="container-deskripsi-project"
                        data-aos="fade-left"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out-cubic">
                        <p className="header-project">Himti Creative</p>
                        <p className="teks-about">This design is the work of a competition project that I participated in. This design found a finalist candidate. This is a website design for an organization profile. Ui/Ux build with Figma.</p>
                        <a href="https://www.figma.com/file/gnvVXUSTxfwHf9GBtNRiTo/Code-002?node-id=0%3A1" className="button-download">View Design</a>
                    </div>
                </div>
                <div className="container-isi-project reverse">
                    <div
                        className="box-image"
                        data-aos="fade-left"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out-cubic">
                        <div className="container-image portfolio">
                            <img className="image-project" src={`${process.env.PUBLIC_URL}/Portfolio.png`} alt="" />
                        </div>
                    </div>
                    <div
                        className="container-deskripsi-project right"
                        data-aos="fade-right"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out-cubic">
                        <p className="header-project">Portfolio V.1</p>
                        <p className="teks-about right-text">This is the first website that I created to describe myself and my programming skills in the web field. I created this website one year ago since the second version was made. This website build with Javascript and Materialize CSS.</p>
                        <a href="https://dani27-design.github.io/" className="button-download">Go To Site</a>
                    </div>
                </div>
                <div className="container-isi-project">
                    <div
                        className="box-image"
                        data-aos="fade-right"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out-cubic">
                        <div className="container-image desaindoang">
                            <img className="image-project" src={`${process.env.PUBLIC_URL}/DesainDoang.png`} alt="" />
                        </div>
                    </div>
                    <div
                        className="container-deskripsi-project"
                        data-aos="fade-left"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out-cubic">
                        <p className="header-project">Desain Doang</p>
                        <p className="teks-about">Desain doang is a business services website that offers a variety of services and easy access to order designs and view design catalogs and projects that have been done. This website build with React.js</p>
                        <a href="https://dani27-design.github.io/DesainDoang/" className="button-download">Go To Site</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project
