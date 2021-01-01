import React from 'react';
import Product from './Product/Product'

const Products = ({ products, addToCart }) => {

    return (
        <>
            <section id="product_list">
                <div className="container">
                    <div className="row">
                        {products.map(product =>
                            <Product product={product} key={product.id} addToCart={addToCart} />
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Products
