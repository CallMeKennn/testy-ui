import React from "react";
import { categories } from "../../Data/data";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Menu.scss";

const Menu = () => {
    return (
        <ul className="menu-container">
            {categories.map((category, index) => (
                <li key={index}>
                    <div className="category-name">
                        {category.category}
                        {category.isList ? <FontAwesomeIcon className="faChevronRight" icon={faChevronRight} /> : ""}
                    </div>
                    <hr />
                </li>
            ))}
        </ul>
    );
};

export default Menu;
