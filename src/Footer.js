import React from 'react';
import './Footer.scss';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import EmailIcon from '@material-ui/icons/Email';

function Footer() {

    return(
        <div className="footer">
            <div className="footer__wrapper">
                <div className="footer__socials">
                    < FacebookIcon className="footer__icon"/>
                    < InstagramIcon className="footer__icon"/>
                    < TwitterIcon className="footer__icon"/>
                    < YouTubeIcon className="footer__icon"/>
                </div>
                <div className="footer__options">
                    <div className="footer__row">
                        <div className="footer__item">Audio & Subtitles</div>
                        <div className="footer__item">Audio Description</div>
                        <div className="footer__item">Help Centre</div>
                        <div className="footer__item">Gift Cards</div>
                    </div>
                    <div className="footer__row">
                        <div className="footer__item">Media Centre</div>
                        <div className="footer__item">Investor Relations</div>
                        <div className="footer__item">Jobs</div>
                        <div className="footer__item">Terms of Use</div>
                    </div>
                    <div className="footer__row">
                        <div className="footer__item">Privacy</div>
                        <div className="footer__item">Legal Notices</div>
                        <div className="footer__item">Cookie Preferences</div>
                        <div className="footer__item">Corporation Information</div>
                    </div>
                    <div className="footer__rows">
                        <div className="footer__item contact">Contact Us</div>
                    </div>
                </div>
                <div className="footer__cr">
                    <div className="footer__button">
                        <button>Service Code</button>
                    </div>
                    <div className="footer__copywright">
                        <p>&#169; Matthew Kostka @2020</p>
                    </div>
                </div> 
            </div>
        </div>
        )
    }

export default Footer;