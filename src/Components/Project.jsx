import React from 'react'

function Project() {
    return (
        <div id="project">
            <div className="container-project">
                <div className="container-header">
                    <p className="header-project">Latest Project</p>
                    <p className="teks-about">Overview of my project you can see or download </p>
                </div>
                <div className="container-isi-project">
                    <div className="box-image">
                        <div className="container-image kalo">
                            <img className="image-project" src={`${process.env.PUBLIC_URL}/Kalo.png`} alt="" />
                        </div>
                    </div>
                    <div className="container-deskripsi-project">
                        <p className="header-project">KALo</p>
                        <p className="teks-about">This application to control your weight and get healthy food recommendations and recipes to cook healthy meals. This app build with React Native and Firebase.</p>
                        <a href="https://wa.me/6285790428078" className="button-download">Download App</a>
                    </div>
                </div>
                <div className="container-isi-project reverse">
                    <div className="box-image">
                        <div className="container-image mousy">
                            <img className="image-project" src={`${process.env.PUBLIC_URL}/Mousy.png`} alt="" />
                        </div>
                    </div>
                    <div className="container-deskripsi-project right">
                        <p className="header-project">Mousy Get Ready</p>
                        <p className="teks-about right-text">This game is inspired by the game "hill climb racing" which was popular in its time. This game uses the main character of a mouse who is looking for cheese and coins. This game build with Godot Game Engine.</p>
                        <a href="https://wa.me/6285790428078" className="button-download">Download App</a>
                    </div>
                </div>
                <div className="container-isi-project">
                    <div className="box-image">
                        <div className="container-image himti">
                            <img className="image-project" src={`${process.env.PUBLIC_URL}/Himti.png`} alt="" />
                        </div>
                    </div>
                    <div className="container-deskripsi-project">
                        <p className="header-project">Himti Creative</p>
                        <p className="teks-about">This design is the work of a competition project that I participated in. This design found a finalist candidate. This is a website design for an organization profile. Ui/Ux build with Figma.</p>
                        <a href="https://wa.me/6285790428078" className="button-download">View Design</a>
                    </div>
                </div>
                <div className="container-isi-project reverse">
                    <div className="box-image">
                        <div className="container-image portfolio">
                            <img className="image-project" src={`${process.env.PUBLIC_URL}/Portfolio.png`} alt="" />
                        </div>
                    </div>
                    <div className="container-deskripsi-project right">
                        <p className="header-project">Portfolio V.1</p>
                        <p className="teks-about right-text">This is the first website that I created to describe myself and my programming skills in the web field. I created this website one year ago since the second version was made. This website build with Javascript and Materialize CSS.</p>
                        <a href="https://wa.me/6285790428078" className="button-download">Go To Site</a>
                    </div>
                </div>
                <div className="container-isi-project">
                    <div className="box-image">
                        <div className="container-image desaindoang">
                            <img className="image-project" src={`${process.env.PUBLIC_URL}/DesainDoang.png`} alt="" />
                        </div>
                    </div>
                    <div className="container-deskripsi-project">
                        <p className="header-project">Desain Doang</p>
                        <p className="teks-about">Desain doang is a business services website that offers a variety of services and easy access to order designs and view design catalogs and projects that have been done. This website build with React.js</p>
                        <a href="https://wa.me/6285790428078" className="button-download">Go To Site</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project
