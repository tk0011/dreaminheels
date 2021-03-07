import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Product = ({ product, addToCart }) => {

    const intialState = product.variants[0].options.map(size => size);
    const currentOption = intialState[0].id;

    const [variant, setVariant] = useState({ [product.variants[0].id]: currentOption });

    const handleSelectVariant = (e) => {
        const selectedVariant = e.target.value;
        setVariant({ [product.variants[0].id]: selectedVariant })
    }

    const handleAddToCartClick = () => {
        addToCart(product.id, variant);
    }

    return (
        <>
            <motion.div initial={{ y: 300, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -300, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="col-md-6">
                <div className="card mb-5">
                    <div className="card-body border-0">
                        <Link to={{
                            pathname: `product/${product.id}`,
                            state: { product }
                        }}>
                            <div style={{ height: "325px" }}> <img style={{ objectFit: "cover", height: "300px", width: "100%" }} className="img-fluid mt-1 mb-4" src={product.media.source} alt={product.name} /></div></Link>
                        <div className="d-flex justify-content-between align-items-center">
                            <Link to={{
                                pathname: `product/${product.id}`,
                                state: { product }
                            }}>
                                <h4 className="card-title mb-1 mr-1 text-capitalize">{product.name}</h4></Link>

                            <p className="price mb-1 text-danger font-weight-normal">₹{product.price.formatted}</p>
                        </div>
                        <div className="d-flex align-items-center justify-content-between my-3">
                            <div className="d-flex align-items-center border-dark border rounded pl-2 py-1 pr-1">
                                <h6 className="mr-3 mt-2"> Size</h6>
                                <select onChange={handleSelectVariant} className="border-0 text-dark" style={{ fontSize: "11px" }} >
                                    {product.variants[0].options.map(size =>
                                        <option id={size.id} value={size.id}>
                                            {size.name}
                                        </option>)}
                                </select>
                            </div>
                            <div>
                                <motion.button whileTap={{ scale: 0.95 }} trigger className="btn mr-2 btn-dark rounded" onClick={handleAddToCartClick}> add to cart</motion.button>
                                <motion.button whileTap={{ scale: 0.95 }} trigger className="btn mr-2 btn-dark rounded" onClick={handleAddToCartClick}> Buy Now</motion.button>
                            </div>
                        </div>
                    </div>
                </div>

            </motion.div >
        </>
    )
}

export default Product
