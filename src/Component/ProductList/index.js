import React from "react";
import { productsList1, productsList2 } from "../../Data/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import product5 from "../../Assets/product_5.jpg";
import Product from "../Product";
import "./ProductList.scss";

const ProductList = () => {
    const createDivs = (starRate) => {
        const divs = [];
        for (let i = 0; i < starRate; i++) {
            divs.push(<FontAwesomeIcon className="starRate" icon={faStar} />);
        }
        return divs;
    };

    return (
        <div className="productList-container">
            <div className="productList">
                {productsList1.map((product, index) => (
                    <Product key={index} product={product} />
                ))}
            </div>
            <div className="productList-offer">
                <div className="title-today">
                    <h2>Today’s Offer</h2>
                    <hr />
                </div>
                <div className="infomation-offer">
                    <div>
                        <div className="discountProductOffer">-20%</div>
                        <img src={product5} alt="product" />
                    </div>
                </div>
                <div className="infor-product">
                    <div className="info-name">Apple iPhone 13 Pro Max 128GB Gold Fully Unlocked</div>
                    <div>
                        {createDivs(5)}
                        <span className="info-review">29 reviews</span>
                    </div>
                    <div>
                        <span className="price">$128.00</span>
                        <span className="priceSale">$12.00</span>
                    </div>
                </div>
                <div className="time-sale">
                    <div>Hurry up! Offer ends in:</div>
                    <div className="time-date">
                        <div>826</div>:<div>29</div>:<div>20</div>:<div>08</div>
                    </div>
                    <div className="line-red"></div>
                    <div>
                        Sold: <span>620/896</span> products
                    </div>
                </div>
            </div>

            <div className="productList">
                {productsList2.map((product, index) => (
                    <Product key={index} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
