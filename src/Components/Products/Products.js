import React from 'react';
import { motion } from 'framer-motion'
import Product from './Product/Product'

const Products = ({ products, addToCart, filteredProducts }) => {

    return (
        <motion.div initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="container my-5 pt-4">
                <div className="row">
                    <div className="col-3">

                    </div>
                    <div className="col-9">
                        <section id="product_list">
                            <div className="container">
                                <div className="row">
                                    {
                                        products.map(product =>
                                            <Product product={product} key={product.id} addToCart={addToCart} />)
                                    }
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </motion.div >
    )
}

export default Products
