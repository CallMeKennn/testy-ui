import product1 from "../Assets/product_1.jpg";
import product2 from "../Assets/product_2.jpg";
import product3 from "../Assets/product_3.jpg";
import product4 from "../Assets/product_4.jpg";
import product6 from "../Assets/product_6.jpg";
import product7 from "../Assets/product_7.jpg";
import product8 from "../Assets/product_8.jpg";
import product9 from "../Assets/product_9.jpg";
import slider3 from "../Assets/slider3.png";
import slider2 from "../Assets/slider2.png";
import slider1 from "../Assets/slider1.png";
import visa from "../Assets/visa.png"
import masterCard from "../Assets/masterCard.png"
import discover from "../Assets/discover.png"
import westernUnion from "../Assets/westernUnion.png"
import amex from "../Assets/amex.png"
import cirrus from "../Assets/cirrus.png"
import paypal from "../Assets/paypal.png"   

const pages = ["Home", "Shop", "Product", "Page", "Blog", "Contact Us", "Buy Uminex"];

const payments = [visa, masterCard, discover, westernUnion, amex, cirrus, paypal];

const categories = [
    { category: "Computer & Desktop", isList: true },
    { category: "Laptop & Ipad", isList: true },
    { category: "Cameras & Photos", isList: true },
    { category: "Smart Phones & Tables", isList: true },
    { category: "Home & Kitchen", isList: false },
    { category: "TV & Audios", isList: true },
    { category: "Health & Beauty", isList: false },
    { category: "Watches & Eyewear", isList: true },
    { category: "Top Deals", isList: false },
    { category: "Top Selling Products", isList: false },
    { category: "Top Featured Products", isList: false },
];

const productsList1 = [
    {
        name: "Apple iPhone 12 Pro Max 128GB - Unlocked",
        src: product9,
        starRate: 5,
        review: 68,
        price: 128.0,
        priceSale: 12.0,
        stock: 82,
        discount: 20,
        newProduct: false,
    },
    {
        name: "Apple Watch Aluminum Case Pride Edition",
        src: product8,
        starRate: 5,
        review: 68,
        price: 1028.0,
        priceSale: 0,
        stock: 2,
        discount: 0,
        newProduct: false,
    },
    {
        name: "Apple iPhone 12 Pro Max 128GB - Unlocked",
        src: product7,
        starRate: 5,
        review: 68,
        price: 128.0,
        priceSale: 12.0,
        stock: 82,
        discount: 20,
        newProduct: false,
    },
    {
        name: "Apple Watch Aluminum Case Pride Edition",
        src: product6,
        starRate: 5,
        review: 68,
        price: 1028.0,
        priceSale: 0,
        stock: 2,
        discount: 0,
        newProduct: true,
    },
];

const productsList2 = [
    {
        name: "Apple iPhone 12 Pro Max 128GB - Unlocked",
        src: product4,
        starRate: 5,
        review: 68,
        price: 289.0,
        priceSale: 12.0,
        stock: 82,
        discount: 20,
        newProduct: false,
    },
    {
        name: "Apple Watch Aluminum Case Pride Edition",
        src: product3,
        starRate: 5,
        review: 68,
        price: 128.0,
        priceSale: 12.0,
        stock: 2,
        discount: 20,
        newProduct: false,
    },
    {
        name: "Apple iPhone 12 Pro Max 128GB - Unlocked",
        src: product2,
        starRate: 5,
        review: 68,
        price: 128.0,
        priceSale: 12.0,
        stock: 82,
        discount: 20,
        newProduct: false,
    },
    {
        name: "Apple Watch Aluminum Case Pride Edition",
        src: product1,
        starRate: 5,
        review: 68,
        price: 1028.0,
        priceSale: 12.0,
        stock: 82,
        discount: 20,
        newProduct: false,
    },
];



const banners = [
    { title: "Trending", name: "newProduct Phone Pro", discription: "Save 20% On Products", src: slider3 },
    { title: "Top Product", name: "MateBook Pro 2022", discription: "Top Quality Products", src: slider2 },
    { title: "iPad Pro", name: "Up To 20% Off", discription: "20 Days Return Products", src: slider1 },
];

export { payments, productsList1, productsList2, categories, pages, banners };
