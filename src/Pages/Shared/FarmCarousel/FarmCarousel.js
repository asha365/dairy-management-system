import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import farm1 from '../../../assets/farm/farm1.jpg';
import farm2 from '../../../assets/farm/farm2.jpg';


const BrandCarousel = () => {
    return (
            <Carousel>
            <Carousel.Item>
            <img
                className="d-block w-100"
                src={farm1}
                alt="First slide"
            />
            </Carousel.Item>

            <Carousel.Item>
            <img
                className="d-block w-100"
                src={farm2}
                alt="Second slide"
            />
            </Carousel.Item>
       
        </Carousel>
    );
};

export default BrandCarousel;