import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faCartShopping, faBars } from "@fortawesome/free-solid-svg-icons";
import { faUser, faHeart } from "@fortawesome/free-regular-svg-icons";
import { categories, pages } from "../../Data/data";
import { useState } from "react";
import discount from "../../Assets/discount.png";
import "./Header.scss";

const Header = () => {
    const [number, setNumber] = useState(2);

    return (
        <div className="header-container">
            <div className="header-firstElement">
                <div>
                    You are a student and students get 20% discount. <a href="#">Learn More</a>
                </div>
                <div className="header-firstElement-flex">
                    <ul className="header-firstElement-element">
                        <li>Store Locator</li>
                        <li>Order Tracking</li>
                        <li>FAQs</li>
                    </ul>
                    <div className="line"></div>
                    <ul className="language">
                        <li>
                            English <FontAwesomeIcon icon={faChevronDown} />
                        </li>
                        <li>
                            USD <FontAwesomeIcon icon={faChevronDown} />
                        </li>
                    </ul>
                </div>
            </div>

            <div className="header-secondElement flex">
                <div className="logo flex">
                    <h3>umi</h3>
                    <h3>nex</h3>
                </div>

                <div className="search">
                    <div className="border flex">
                        <select>
                            {[{ category: "All Categories", isList: true }, ...categories].map((category, index) => (
                                <option key={index}>{category.category}</option>
                            ))}
                        </select>
                        <span className="line"></span>
                        <input placeholder="Search in 200+ products..."></input>
                    </div>
                    <button>Search</button>
                </div>

                <div className="account-and-cart flex">
                    <div className="flex width">
                        <FontAwesomeIcon className="iconUser" icon={faUser} />
                        <div>
                            <div className="login">Login</div>
                            <div className="account">Account</div>
                        </div>
                    </div>

                    <div className="width iconHeart-container">
                        <FontAwesomeIcon className="iconHeart" icon={faHeart} />
                        <div className="number">{number}</div>
                    </div>

                    <div className="flex width">
                        <div className="iconCart-container">
                            <FontAwesomeIcon className="iconCart" icon={faCartShopping} />
                            <div className="number">{number}</div>
                        </div>

                        <div>
                            <div>Your Cart</div>
                            <div className="bold">$280.00</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="header-thirdElement flex">
                <div className="header-secondElement-allCategoried">
                    <FontAwesomeIcon icon={faBars} /> Browse All Categories
                </div>

                <ul className="header-secondElement-listCategoried">
                    {pages.map((page, index) => (
                        <li key={index}>
                            {page}
                            {page === "Contact Us" || page === "Buy Uminex" ? (
                                ""
                            ) : (
                                <FontAwesomeIcon icon={faChevronDown} />
                            )}
                        </li>
                    ))}
                </ul>

                <div className="sale">
                    <img src={discount} alt="Sale Icon" />
                    <div>Sale $20 Off Your First Order.</div>
                </div>
            </div>
        </div>
    );
};

export default Header;
