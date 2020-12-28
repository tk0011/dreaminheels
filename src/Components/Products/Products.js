import React from 'react';
import Product from './Product/Product'

const Products = ({products}) => {
  
    return (
        <>
            <section id="product_list">
                        <div className="container">
                                    <div className="row">
                                            {products.map(product => 
                                                <Product product={product} key={product.id} />
                                            )}
                                    </div>
                        </div>
                </section>   
        </>
    )
}

export default Products
