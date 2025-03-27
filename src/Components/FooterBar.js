import React from "react";
import Logo from "../Assets/Logo.svg"

const FooterBar = () => {

    return(
        <div className="footer">
            <div className="footer-heading">
            <h1 className="footer-heading-text">
            Have Question In Mind? Let Us Help You
            </h1>
            <div className="footer-search">
                <input type="text" placeholder="Search Box" className="footer-search-box"/>
                <button className="search-button">Search</button>
            </div>
        
            <div className="footer-bottom">
                <div className="footer-bottom-logo">
                    <img src={Logo} alt="Logo" className="fottor-bottom-logo"/>
                    <h2 className="footer-developer"> Design and Developed by Akshat Srivastava</h2>
                </div>
                <div className="footer-bottom-list">    
                    <ul className="footer-list">
                        <li className="footer-list-item">Quality</li>
                        <li className="footer-list-item">Help</li>
                        <li className="footer-list-item">Share</li>
                        <li className="footer-list-item">Carrers</li>
                        <li className="footer-list-item">Work</li>
                        <li className="footer-list-item">Testimonials</li>
                    </ul>
                </div>
                <div className="footer-bottom-list">    
                    <ul className="footer-list">
                        <li className="footer-list-item">akshatsrivastava566@gmail.com</li>
                        <li className="footer-list-item"><a href="https://www.linkedin.com/in/sriakshat5/" className="footer-linkedin">Linkedin</a></li>
                       
                    </ul>
                </div>
                <div className="footer-bottom-list">    
                    <ul className="footer-list">
                        <li className="footer-list-item">Terms & Condition</li>
                        <li className="footer-list-item">Privacy Policy</li>
                       
                    </ul>
                </div>
               

            </div>
            <div className="footer-end">
                    <div>
                        <h5>© All Rights Reserved.<a href="https://akshat-srivastava-navy.vercel.app/" className="footer-portfolio">Akshat Srivastava</a> </h5>
                    </div>

                </div>
            </div>

        </div>
    )

}

export default FooterBar;