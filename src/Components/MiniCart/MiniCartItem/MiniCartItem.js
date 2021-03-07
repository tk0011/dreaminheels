import React from 'react';
import { motion } from 'framer-motion'
const MiniCartItem = ({ cartItem, deleteItem, updateCart }) => {

    const handleClick = () => {
        deleteItem(cartItem.id, 1);
    }

    return (

        <div
            className="px-4 my-5 d-flex align-items-center cart_item_list">
            <div className="img-box mx-2" style={{ height: "90px", width: "110px" }}>
                <img className="img-fluid" style={{ objectFit: "cover", height: "90px", width: "100px" }} src={cartItem.media.source} alt="" />
            </div>
            <div className="mx-3 cart_item_info">
                <h5 className="mb-2">{cartItem.product_name}</h5>
                <h6 className="my-2">
                    Price :  {cartItem.line_total.formatted_with_symbol}
                </h6>
                <h6 className="my-2">
                    Size :  {cartItem.variants[0].option_name}
                </h6>
                {

                    <div className="d-flex align-items-center mt-2">
                        <motion.button whileTap={{ scale: 0.95 }} style={{ fontSize: "15px" }} className="btn btn-primary border-0" onClick={() => updateCart(cartItem.id, cartItem.quantity + 1)}> + </motion.button>
                        <h5 className="my-0 p-3" >Qty : {cartItem.quantity}</h5>
                        <motion.button whileTap={{ scale: 0.95 }} style={{ fontSize: "15px" }} className="btn btn-primary  border-0" onClick={() => updateCart(cartItem.id, cartItem.quantity - 1)}>
                            {
                                cartItem.quantity === 1
                                    ? <><i class="fas fa-trash fa-xs"></i></>
                                    : <> - </>
                            }
                        </motion.button>
                    </div>
                }
            </div>
        </div>
    )
}

export default MiniCartItem
