import React from "react";
import "./Slider.scss";
import Banner from "../Banner";

const Slider = () => {
    return (
        <div className="slider-container">
            <div className="slider-childent">
                <div className="slider-title">
                    <div>Gamepad console</div>
                    <h1>Today’s Offer </h1>
                    <h1>Skin <span>Gamepad</span> 2022</h1>
                    <button>Shop now</button>
                </div>
            </div>
            <Banner />
        </div>
    );
};

export default Slider;
