import React from 'react'
import { productsList1, productsList2 } from '../../Data/data'
import product5 from "../../Assets/product_5.jpg"
import Product from '../Product'
import "./ProductList.scss"

const ProductList = () => {
  return (
    <div className='productList-container'>
        <div className='productList-1'>
            {productsList1.map((product, index) => (
                <Product key={index} product={product} />
            ))}
        </div>
        <div className='productList-offer'>
              
        </div>
        <div className='productList-2'>

        </div>
    </div>
  )
}

export default ProductList