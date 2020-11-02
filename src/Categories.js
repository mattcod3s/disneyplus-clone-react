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
            <Selection imgSource={disney} layerSource={'https://i.pinimg.com/originals/f4/2c/27/f42c2702707388d65d8e6bc90f9612b0.gif'}/>
            <Selection imgSource={pixar} layerSource={'https://i.gifer.com/7i9t.gif'}/>
            <Selection imgSource={marvel} layerSource={'https://media.emmafrostfiles.com/images/tumblr_mbha9qWF401qcixnko1_500.gif'}/>
            <Selection imgSource={starwars} layerSource={'https://i.gifer.com/DoOj.gif'}/>
            <Selection imgSource={nationalgeo} layerSource={'https://podcastmovement.com/wp-content/uploads/2020/06/giphy1-19.gif'}/>
        </div>
    )
}

export default Categories;