import React, { useEffect, useState } from "react";
import ItemImage from "../Assets/john-doe-image.png"

import { FaStar, FaRegStar } from "react-icons/fa";
const Testimonial = () => {

    const testimonialData = [
        {
            image: ItemImage,
            text: "The meals are always fresh and full of flavor. It’s like having a restaurant-quality experience at home!",
            name: "Aarav S.",
            rating: 4
        },
        {
            image: ItemImage,
            text: "I love how fast the delivery is. The food arrives hot, and the taste is always amazing!",
            name: " Priya M.",
            rating: 5
        },
        {
            image: ItemImage,
            text: "Every dish is crafted with care. The ingredients are fresh, and the presentation is top-notch!",
            name: "Rohan K.",
            rating: 3
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    function carousel(){
        setCurrentIndex((index) =>
        index === testimonialData.length-1 ? 0 : index+1
        );
    }

   useEffect( () => {
    const timer = setTimeout(carousel, 3000);
    return ()=> clearTimeout(timer);
   }, [currentIndex]);

   function renderStar(raiting){
    const totalStar = 5;
    let starts = [];

    for(var i =0; i<totalStar; i++){
        if(i <= raiting){
            starts.push(<FaStar className="stars" />);
        }
        else{
            starts.push(<FaRegStar className="stars"/>);
        }
    }
    return(starts);
   }

return(
    <div className="testimonial">
        <div className="testimonial-top-section">
            <h5 className="testimonial-page-name">Testimonial</h5>
            <h1 className="testimonial-page-heading">What They Are Saying</h1>
            <p className="testimonial-page-paragraph"> The food is absolutely delicious – fresh, flavorful, and perfectly cooked! Every bite was a treat; the quality and presentation were outstanding. With amazing taste and fast delivery, it offers a perfect dining experience at home. </p>
        </div>
        <div className="testimonial-section">
            
                <div className="testimonial-section-image">
                    {/* {
                        testimonialData.map((data, currentIndex)=>(
                            <div key={currentIndex}>
                                <img src={data.image} alt="person image" className="testimonial-image"></img>
                                <h3>{data.name}</h3>
                                <p>{data.text}</p>
                            </div>
                        ))
                    } */}

                    <div key={currentIndex} className="testimonial-carousel">
                    <img className="testimonial-carousel-image" src={testimonialData[currentIndex].image} alt="person image"></img>
                    <p className="testimonial-carousel-text">{testimonialData[currentIndex].text}</p>
                    <h3 className="testimonial-carousel-name">{testimonialData[currentIndex].name}</h3>
                    <div className="testimonial-carousel-rating">
                        {renderStar(testimonialData[currentIndex].rating)}
                    </div>

                    </div>
                </div>
           
        </div>

    </div>
)
}

export default Testimonial;