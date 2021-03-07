import React from 'react';
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';
import errorImg from '../../assets/images/errorpageImg.jpg';

const Notfound = () => {
    return (
        <motion.div className="errorpage"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div> <img className="img-fluid" src={errorImg} alt="" /></div>
            <div>
                <h1>404</h1>
                <p>Sorry!!</p>
                <p>We can't find the page you're looking.</p>
                <p>Don't worry though, everything else is still  AWESOME!!!</p>
                <br />
                <Link className="btn btn-primary rounded" to="/products"> Start Shopping </Link>
            </div>

        </motion.div>
    )
}

export default Notfound
