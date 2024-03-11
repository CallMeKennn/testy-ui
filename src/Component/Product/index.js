import React from "react";
import "./Product.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Product = ({ product }) => {
    const { name, src, starRate, review, price, priceSale, stock, discount, newProduct } = product;
    console.log(priceSale)
    const createDivs = (starRate) => {
        const divs = [];
        for (let i = 0; i < starRate; i++) {
            divs.push(<FontAwesomeIcon className="starRate" icon={faStar} />);
        }
        return divs;
    };

    return (
        <div className="product-container">
            <div className="product-main">
                {discount !== 0 ? <div className="discount">-{discount}%</div> : ""}
                {newProduct ? <div className="newProduct">new</div> : ""}
                <img src={src} alt={name} />
                <div className="infomation">
                    <div className="info-name">{name}</div>
                    <div>
                        {createDivs(starRate)}
                        <span className="info-review">({review})</span>
                    </div>
                    <div>
                        <span className="price">${price}.00</span>
                        {priceSale === 0 ? '' : <span className="priceSale">${priceSale}.00</span>}
                    </div>
                    <div className="stock">
                        {stock > 2 ? (
                            <div className="green">
                                <span><FontAwesomeIcon icon={faCheck} /> In stock {stock} </span>
                                <span>products</span>
                            </div>
                        ) : (
                            <div className="red">
                                <FontAwesomeIcon  icon={faCheck} /> Only {stock} left in stock
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
