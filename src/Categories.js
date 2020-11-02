import React from 'react';
import './Categories.scss';
import Selection from './Selection';
import disney from './img/disney.png';
import pixar from './img/pixar.png';
import marvel from './img/marvel.png';
import starwars from './img/starwars.png';
import nationalgeo from './img/nationalgeo.png';
function Categories() {

    return (
        <div className="categories">
            <Selection imgSource={disney}/>
            <Selection imgSource={pixar}/>
            <Selection imgSource={marvel}/>
            <Selection imgSource={starwars}/>
            <Selection imgSource={nationalgeo}/>
        </div>
    )
}

export default Categories;