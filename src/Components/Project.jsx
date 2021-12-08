import React from 'react'

function Project() {
    return (
        <div id="project">
            <div className="container-project">
                <div className="container-header">
                    <p className="header-project">Latest Project</p>
                    <p className="teks-about">My latest project all u can see, hope u like it ;) </p>
                </div>
                <div className="container-isi-project">
                    <div className="box-image">
                        <div className="container-image">
                            <img className="image-project" src={`${process.env.PUBLIC_URL}/Kalo.png`} alt="" />
                        </div>
                    </div>
                    <div className="container-deskripsi-project">
                        <p className="header-project">KALo</p>
                        <p className="teks-about">This application to control your weight and get healthy food recommendations and recipes to cook healthy meals. This app build with React Native and Firebase.</p>
                        <a href="https://wa.me/6285790428078" className="button-download">Download App</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project
