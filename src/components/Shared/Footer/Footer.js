import React from 'react';
import FooterColumn from './FooterColumn';
import './Footer.css'
import { FaFacebookF,FaGooglePlusG, FaInstagramSquare} from 'react-icons/fa';

const Footer = () => {
    const quickLinks = [
        {name: "Our Services" , link: "/home"},
        {name: "Testimonial" , link: "/home"},
        {name: "Blog" , link: "/home"},
    ]
    const ourAddress = [
        {name: "Bangladesh ChakBazar Dhaka -1202" , link: "//google.com/map"},
       
    ]
    const newsLetters = [
        {name: "newsletters" , link: "/home"},
        
    ]
    const contact = [
    ]
    return (
        <footer className="footer-area clear-both">
        <div className="container pt-2">
            <div className="row py-5">
                <FooterColumn key={1} menuTitle="Quick Links" menuItems={quickLinks}/>
                <FooterColumn key={2} menuTitle="Address" menuItems={ourAddress}/>
                <FooterColumn key={3} menuTitle="News Letters" menuItems={newsLetters}/>
                <FooterColumn key={4} menuTitle="Contact" menuItems={contact}> 
                  <div>
                  <ul className="social-media list-inline">
                        <li className="list-inline-item"><a href="https://www.facebook.com/athqiya.akila/"><FaFacebookF/></a></li>
                        <li className="list-inline-item"><a href="//google.com"><FaGooglePlusG/></a></li>
                        <li className="list-inline-item"><a href="//www.instagram.com/akilaniasa/"><FaInstagramSquare/></a></li>
                    </ul>
                  </div>
                    <div >
                        <button className="address-btn">+8801867705676</button>
                    </div>
                </FooterColumn>
            </div>
          </div>
        <div className="copyRight text-center bg-danger py-1">
                <p className="text-white">Copyright <span>&#169;</span> {(new Date()).getFullYear()} All Rights Reserved Akila</p>
            </div>
    </footer>
    );
};

export default Footer;