import React, {useEffect, useState} from 'react';
import './nav.scss';
import displus from './img/displus.png';
import homeIcon from '@material-ui/icons/HomeRounded';

function NavBar() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else {
                handleShow(false);
            }
        });
        return () => {
            window.removeEventListener('scroll');
        }
    }, []);

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img className="nav__logo" src={displus} alt="disney plus logo"/>
            <img className="netflix__avatar" src="https://i.imgur.com/owhNAKK.jpg" alt="netflix logo"/>
        </div>

    )
}

export default NavBar;