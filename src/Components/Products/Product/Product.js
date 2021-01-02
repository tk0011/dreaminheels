import React from 'react'
const Product = ({ product, addToCart }) => {

    return (
        <>
            <div className="col-md-6">
                <div className="card mb-5">
                    <div className="card-body border-0">
                        <div style={{ height: "325px" }}> <img style={{ objectFit: "cover", height: "300px", width: "100%" }} className="img-fluid mt-1 mb-4" src={product.media.source} alt={product.name} /></div>
                        <div className="d-flex justify-content-between align-items-center">
                            <h5 className="card-title mb-1 mr-1">{product.name}</h5>
                            <button className="btn btn-dark rounded" onClick={() => addToCart(product.id, 1)} >Add to cart</button>
                        </div>
                        <p className="price mb-1 text-danger font-weight-bold">₹{product.price.formatted}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product
