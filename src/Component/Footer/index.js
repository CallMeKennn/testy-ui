import React from "react";
import { payments } from "../../Data/data";
import "./Footer.scss";

import "../../Assets/masterCard.png";

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="about-us">
                <div className="flex2">
                    <h4>About The Store</h4>
                    <div>Got Question? Call us 24/7</div>
                    <div className="phoneNumber">+222-1800-2628</div>
                    <div>268 St, South New York/NY 98944, United States</div>
                    <div>Customersupport@example.com</div>
                    <div>Info@example.com</div>
                </div>
                <div className="flex1">
                    <h4>Infomation</h4>
                    <div>Blog Us</div>
                    <div>
                        <a href="#">About Us</a>
                    </div>
                    <div>Delivery Information</div>
                    <div>Privacy Policy</div>
                    <div>FeedBack</div>
                </div>
                <div className="flex1">
                    <h4>Quick Links</h4>
                    <div>Store Location</div>
                    <div>Orders Tracking</div>
                    <div>FAQs</div>
                </div>
                <div className="flex3">
                    <h4>Sign up to Newsletter</h4>
                    <div>
                        Join 20.000+ subscribers and get a new discount coupon on every Saturday. Updates information on
                        Sales and Offers.
                    </div>
                    <di className="sendEmail">
                        <input placeholder="Your email address..." />
                        <button>Subscribe</button>
                    </di>
                    <div>Subscribe for Uminex and get 20% off your first purchase.</div>
                </div>
            </div>
            <div className="address-and-payment">
                <div>
                    Copyright © <span>Uminex</span> all rights reserved. Powered by <span>Blueskytechco</span>.
                </div>
                <div className="payment">
                    Payment Method:
                    {payments.map((payment, index) => (
                        <img key={index} src={payment} alt={payment} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Footer;
