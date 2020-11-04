import React, {useEffect, useState} from 'react';
import './nav.scss';
import displus from './img/displus.png';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import StarIcon from '@material-ui/icons/Star';
import TheatersIcon from '@material-ui/icons/Theaters';
import LiveTvIcon from '@material-ui/icons/LiveTv';

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
            {/*
            <img className="nav__logo" src={displus} alt="disney plus logo"/>
            <img className="netflix__avatar" src="https://i.imgur.com/owhNAKK.jpg" alt="netflix logo"/>
            */}
            <div className="nav__left">
                <img className="nav__logo" src={displus} alt="disney plus logo"/>
            </div>
            <div className={`nav__center ${show && "nav_blue"}`}>
                <ul>
                    <li> <HomeIcon className="nav__icon"/> <h3 className="nav__text">HOME</h3></li>
                    <li> <SearchIcon className="nav__icon"/> <h3 className="nav__text">SEARCH</h3></li>
                    <li> <AddIcon className="nav__icon"/> <h3 className="nav__text">WATCHLIST</h3></li>
                    <li> <StarIcon className="nav__icon"/> <h3 className="nav__text">ORIGINALS</h3></li>
                    <li> <TheatersIcon className="nav__icon"/> <h3 className="nav__text">MOVIES</h3></li>
                    <li> <LiveTvIcon className="nav__icon"/> <h3 className="nav__text">SERIES</h3></li>
                </ul>
            </div>
            <div className="nav__right">
                
                <img className="netflix__avatar" src="https://i.imgur.com/owhNAKK.jpg" alt="netflix logo"/>
            </div>
        </div>

    )
}

export default NavBar;