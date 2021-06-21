import React from 'react';
import './Footer.css';
import FooterCol from '../../../Component/Shared/Footer/FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const AboutSchool = [
        { name: "General Information", link: "/Information" },
        { name: "Who We are", link: "/Who" },
        { name: "Our Teacher", link: "/personal-treatment" },
        { name: "School History", link: "/History" },
        { name: "Language Training", link: "/Language " },
    ]
    const ourAddress = [
        { name: "3888  Chicago Avenue-California", link: "//google.com/map" },
        { name: "Yards", link: "//google.com/map" },

    ]
    const RecentPosts = [
        { name: "Lorem ipsum dolor sit amet.", link: "/" },
        { name: "Lorem ipsum dolor sit amet.", link: "/" },
        { name: "Lorem ipsum dolor sit amet.", link: "/" },
        { name: "Lorem ipsum dolor sit amet.", link: "/" },
        { name: "Lorem ipsum dolor sit amet.", link: "/" },
        { name: "Lorem ipsum dolor sit amet.", link: "/" },
        { name: "Lorem ipsum dolor sit amet.", link: "/" }
    ]
    const KeepInTouch = [

        { name: " Lorem ipsum dolor sit amet consectetur adipisicing.", link: "/" },
        { name: " Lorem ipsum dolor sit amet consectetur adipisicing.", link: "/" },
        { name: " Lorem ipsum dolor sit amet consectetur adipisicing.", link: "/" },
        { name: " Lorem ipsum dolor sit amet consectetur adipisicing.", link: "/" },
        { name: " Lorem ipsum dolor sit amet consectetur adipisicing.", link: "/" },
        { name: " Lorem ipsum dolor sit amet consectetur adipisicing.", link: "/" },
        { name: " Lorem ipsum dolor sit amet consectetur adipisicing.", link: "/" }
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={"About School"} menuItems={AboutSchool} />
                    <FooterCol key={2} menuTitle="Keep In Touch" menuItems={KeepInTouch} />
                    <FooterCol key={3} menuTitle="Recent Post" menuItems={RecentPosts} />
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}>
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button className="btn btn-brand">+1050850493</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;