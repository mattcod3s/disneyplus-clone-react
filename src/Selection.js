import React from 'react';
import './Selection.scss';

function Selection({ imgSource, layerSource }) {

    return(
        <div className="select-box">
            <div className="select__layer"
            style={{
            
                backgroundSize: "cover",
                backgroundImage: `url(${layerSource})`,
                backgroundPosition: 'center center'
            }}
            ></div>
            <div className="select__logo">
                <img src={imgSource} alt=""/>
            </div>
        </div>
    )
}

export default Selection;