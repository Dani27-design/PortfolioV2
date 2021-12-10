import React, { useState, useCallback } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sertif1 from '../Assets/sertif1.png'
import Sertif2 from '../Assets/sertif2.png'
import Sertif3 from '../Assets/sertif3.png'
import Sertif4 from '../Assets/sertif4.png'
import Sertif5 from '../Assets/sertif5.png'
import Sertif6 from '../Assets/sertif6.png'
import Sertif7 from '../Assets/sertif7.png'
import Sertif8 from '../Assets/sertif8.png'
import Sertif9 from '../Assets/sertif9.png'
import Sertif10 from '../Assets/sertif10.png'
import Sertif11 from '../Assets/sertif11.png'
import Sertif12 from '../Assets/sertif12.png'
import Sertif13 from '../Assets/sertif13.png'
import Sertif14 from '../Assets/sertif14.png'
import Sertif15 from '../Assets/sertif15.png'
import Sertif16 from '../Assets/sertif16.png'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const images = [
    Sertif1,
    Sertif2,
    Sertif3,
    Sertif4,
    Sertif5,
    Sertif6,
    Sertif7,
    Sertif8,
    Sertif9,
    Sertif10,
    Sertif11,
    Sertif12,
    Sertif13,
    Sertif14,
    Sertif15,
    Sertif16,
]

function Certification() {
    const [imageIndex, setImageIndex] = useState(0)

    const NextArrow = ({ onClick }) => {
        return (
            <div className='next' onClick={onClick}></div>
        )
    };

    const PrevArrow = ({ onClick }) => {
        return (
            <div className='prev' onClick={onClick}></div>
        )
    };

    const settings = {
        dots: true,
        infinite: true,
        lazyLoad: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: 0,
        variableWidth: true,
        variableHeight: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setImageIndex(next),
        customPaging: function (i) {
            return (
                <a>
                    <div className={i === imageIndex ? "dots-slider-active" : "dots-slider"}></div>
                </a>
            );
        },
    };

    return (
        <div id="certification">
            <div className="container-certification">
                <div className="container-header-certification">
                    <p className="header-certification">Certification</p>
                    <p className="teks-certification">This is my achievement</p>
                </div>
                <Slider {...settings}>
                    {images.map((img, idx) => (
                        <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
                            <Zoom zoomMargin={40}>
                                <img src={img} alt={img} width={300} />
                            </Zoom>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default Certification