import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion'
const ProductDetail = ({ addToCart, cart, updateCart }) => {
    const location = useLocation()
    const product = location.state.product

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
        <div>
            <div style={{ display: "grid", gridTemplateColumns: "40% 1fr", gridGap: "30px" }}>
                <motion.div initial={{ x: -300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 300, opacity: 0 }}
                    transition={{ duration: 0.75 }}>
                    <img style={{ display: "flex", width: "100%", height: "100vh", margin: "auto" }} className="img-fluid" src={product.media.source} alt={product.name} />
                </motion.div>

                <motion.div initial={{ x: 500, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 500, opacity: 0 }}
                    transition={{ duration: 0.75 }}
                    className="mt-5 px-5 pt-5 mr-5">
                    <h2>{product.name}</h2>
                    <p className="my-3">{product.description.replace(/<\/?("[^"]*"|'[^']*'|[^>])*(>|$)/g, "")}</p>
                    <h4 className="my-4">{product.price.formatted_with_symbol}</h4>
                    <div className="mt-3 d-flex">
                        <p className="my-3">Select Size :</p>
                        <select onChange={handleSelectVariant} className="border-0 text-dark text-white mr-3 px-3 py-2" >
                            {product.variants[0].options.map(size =>
                                <option id={size.id} value={size.id}>
                                    {size.name}
                                </option>)}
                        </select>
                    </div>
                    <motion.button whileTap={{ scale: 0.95 }} style={{ fontSize: "14px" }} className="my-4 px-5 py-3 rounded btn btn-dark" onClick={handleAddToCartClick}> Add to cart</motion.button>
                </motion.div>
            </div>

        </div>
    )
}

export default ProductDetail
