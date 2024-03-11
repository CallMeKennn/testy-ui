import React from "react";
import "./Banner.scss";
import { banners } from "../../Data/data";

const Banner = () => {
    return (
        <div className="banners-container">
            {banners.map((banner, index) => (
                <div className="banner" style={{ backgroundImage: `url(${banner.src})` }} key={index}>
                    <div className="banner-content">
                        <div className="banner-title">{banner.title}</div>
                        <div className="banner-name">{banner.name}</div>
                        <div className="banner-discription">{banner.discription}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Banner;
