import React from 'react';
import './Selection.scss';

function Selection({ imgSource }) {

    return(
        <div className="select-box">
            <div className="select__logo">
                <img src={imgSource} alt=""/>
            </div>
        </div>
    )
}

export default Selection;