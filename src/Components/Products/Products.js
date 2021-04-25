import React, {useState} from 'react';
import { motion } from 'framer-motion'
import Product from './Product/Product'

const Products = ({ products, addToCart}) => {

    const [checked, setChecked] = useState(false)

    const [filteredProducts, setFilteredProducts] = useState(products)

   const handleToggle = (e) => {
       (setChecked(e.target.checked))
            const filter = products.filter(product => product.price.raw > e.target.value)
            setFilteredProducts(filter);  
    }
    
    return (
        <motion.div initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="container my-5 pt-4">
                <div className="row">
                    <div className="col-3">
                            <form>
                                <div className=" d-flex align-items-center">
                                <input className="mr-2" checked={checked} type="checkbox" value={3000} onChange={handleToggle}/>
                                <label style={{fontSize:"12px", marginBottom : "0px"}}> Less than 3000</label>
                                </div>
                            </form>
                    </div>
                    <div className="col-9">
                        <section id="product_list">
                            <div className="container">
                                <div className="row">
                                    {
                                        filteredProducts.map(product =>
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
