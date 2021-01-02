import React, { useState, useEffect } from 'react';
import Product from './Product/Product'

const Products = ({ products, addToCart }) => {


    const state = products.map(product => product.price.raw)

    console.log(state)

    const [product, setProduct] = useState();

    // useEffect(() => {
    //     setProduct(products.map(product => product))
    // }, [products])


    const handleClick = () => {
        const filteredProducts = products.filter(product => product.price.raw > 2500)
        setProduct(filteredProducts)
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <form>
                            <input type="checkbox" onClick={handleClick} />
                        </form>
                    </div>
                    <div className="col-9">
                        <section id="product_list">
                            <div className="container">
                                <div className="row">
                                    <Product product={product} key={product.id} addToCart={addToCart} />
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products
