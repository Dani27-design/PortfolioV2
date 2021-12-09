import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Certification() {
    return (
        <div id="certification">
            <div className="container-certification">
                <Carousel dynamicHeight={true} showStatus={false}>
                    <div>
                        <img className="img" src={`${process.env.PUBLIC_URL}/sertif1.png`} alt="" />
                        <p className="legend">Legend 1</p>
                    </div>
                    <div>
                        <img className="img" src={`${process.env.PUBLIC_URL}/sertif2.png`} alt="" />
                        <p className="legend">Legend 2</p>
                    </div>
                    <div>
                        <img className="img" src={`${process.env.PUBLIC_URL}/sertif3.png`} alt="" />
                        <p className="legend">Legend 3</p>
                    </div>
                </Carousel>
            </div>
        </div>
    )
}

export default Certification
