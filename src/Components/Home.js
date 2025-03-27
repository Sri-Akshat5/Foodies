import React from "react";

import BG from "../Assets/home-banner-background.png";
import BGimg from "../Assets/home-banner-image.png"




function Home() {
    return (
    <div className="home-containor">
       
        <div className="home-banner-containor">
            <div className="home-background-containor">
                <img src={BG} alt="background banner"/>
            </div>
            <div className="home-heading-image">
            <div>
                <img src={BGimg} alt="Home banner Image" className="home-background-image"/>
            </div>
            <div className="primary-heading">
                <h1 className="home-heading-text">
                Your Favourite Food Delivered Hot & Fresh
                </h1>
                <p className="home-heading-paragraph">
                Healthy switcher chefs do all the prep work, like peeding, chopping & marinating, so you can cook a fresh food.
                </p>
                <button className="home-heading-button">
                    Order Now 
                </button>
            </div>
            </div>
        </div>
       
        

    </div>
    )
    
};
export default Home;