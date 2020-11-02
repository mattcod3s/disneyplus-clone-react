import React from 'react';
import './CarouselItem.scss';

function CarouselItem({ imgSrc , nameOfClass , isCurrent}) {
    return (
        <div className={`carouselItem ${isCurrent && "currentSlide"}`} >
            <img src={imgSrc} />
        </div>
    )
}

export default CarouselItem;