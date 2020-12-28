import React from 'react'

const Product = ({product}) => {

    return (
        <>
            <div className="col-lg-4 col-md-3">
                    <div className="card mb-5">
                            <div className="card-body border-0">
                               <div style={{height: "325px"}}> <img style={{objectFit:"cover", height:"300px", width:"100%"}} className="img-fluid mt-1 mb-4"  src={product.media.source} alt={product.name} /></div>
                             <div className="d-flex justify-content-between align-items-center">   
                                 <h5 className="card-title mb-1">{product.name}</h5>
                                 <p className="price mb-1 text-danger font-weight-bold">₹{product.price.formatted}</p>
                                </div>
                            </div>
                </div>   
                </div>
        </>
    )
}

export default Product
