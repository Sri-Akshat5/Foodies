import React from "react"
import "../App.css"
import BG from "../Assets/about-background.png"
import BGImg from "../Assets/about-background-image.png"

const About = () => {
    return (
        <div className="about">

            <div className="about-image-heading">
                <img src={BG} alt="About Backgroung" className="about-background" />
                <div className="about-image-heading-top">
                    <div>
                        <img src={BGImg} alt="About Image" className="about-background-image" />
                    </div>
                    <div className="about-text-section">
                        <h5 className="page-name">About</h5>
                        <h1 className="about-heading-text">
                            Food Is An Important 
                            <br/>Part Of A Balanced Diet
                        </h1>
                        <p className="about-paragraph-text">
                        Food is essential for a balanced diet as it provides the nutrients needed for energy, growth, and overall health. A well-rounded diet supports physical and mental well-being, ensuring the body functions optimally.
                        <br/><br/>
                        Eating a variety of foods ensures the body receives essential vitamins, minerals, and macronutrients. A balanced diet helps maintain a healthy weight, boosts immunity, and reduces the risk of chronic diseases.
                        </p>
                        <div className="about-button-group">
                        <button className="about-button">
                            Learn More
                        </button>
                        <button className="about-button">
                            Watch More
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;