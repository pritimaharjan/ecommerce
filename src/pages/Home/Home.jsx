import React from 'react';
import Slider from 'react-slick';
import './Home.css'; 
import image1 from '../assests/image1.jpg'
import image2 from '../assests/image2.jpg'
import image3 from '../assests/image3.jpg'
import image4 from '../assests/image4.jpg'
import image5 from '../assests/image5.jpg'

export const Home = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

    const images = [image1, image2, image3, image4, image5];

    return (
        <div className='image'>
            <Slider {...settings} className='slider'>
                {images.map((img, index) => (
                    <div key={index}>
                        <img src={img} alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};
