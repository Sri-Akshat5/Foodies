import React from "react";
import pickMealsImage from "../Assets/pick-meals-image.png";
import chooseImage from '../Assets/choose-image.png'
import deliveryImage from '../Assets/delivery-image.png'

const Work = () => {
    const workItems = [
        {
            image: pickMealsImage,
            title: "Pick Meals",
            text: "Select your favorite dishes from a variety of delicious options."
        },
        {
            image: chooseImage,
            title: "Choose How Often",
            text: "Customize your delivery schedule to fit your lifestyle."
        },
        {
            image: deliveryImage,
            title: "Fast Deliveries",
            text: "Enjoy fresh, ready-to-eat meals delivered quickly to your doorstep."
        }
    ]
    return(
        <div className="work">
            <div className="work-body">
                <div className="work-top-section">
                    <h5 className="work-page-name">Work</h5>
                    <h1 className="work-page-heading">
                        How it Works
                    </h1>
                    <p className="work-page-paragraph">
                    It works by following a systematic process to achieve a specific goal or outcome. Each step is designed to ensure efficiency, accuracy, and desired results.
                    It operates through a series of connected actions or mechanisms. Each part plays a role in completing the overall function smoothly and effectively.
                    </p>
                </div>
                <div className="work-items">
                    {
                        workItems.map((data)=> (
                            <div className="work-items-image">
                                <img src={data.image} alt="item image" className="work-items-image-data"/>
                                <h3 className="work-items-title">{data.title}</h3>
                                <p className="work-items-text">{data.text}</p>
                            </div>
                        ))
                    }
                </div>

            </div>
            
        </div>
    );
}

export default Work;

