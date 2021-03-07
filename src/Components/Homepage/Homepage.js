import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AboutImg from '../../assets/images/hero.png'
import testimonial1 from '../../assets/images/user-1.jpeg'
import testimonial2 from '../../assets/images/user-2.jpeg'
const Homepage = ({ products }) => {
    return (
        <motion.div initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <div

                id="carouselExampleControls" class="carousel slide" data-ride="carousel" data-interval="3000">
                <div class="carousel-inner">
                    <div class="carousel-item active pro_one">
                        <div className="container">
                            <div className="row h-100 align-items-center justify-content-center">
                                <motion.div initial={{ y: -150, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: 150, opacity: 0 }}
                                    transition={{ duration: 0.8 }}
                                    className="col-md-10 text-center">
                                    <h1>Dream In Heels</h1>
                                    <p><i>Life</i> is short your <i>Heels</i> shouldn't be</p>
                                    <motion.div style={{ width: "200px", margin: "auto" }} whileHover={{
                                        scale: 1.05,
                                    }}
                                        whileTap={{ scale: 0.95 }}>
                                        <Link to="/products" className="btn btn-primary button rounded">Shop Now
                                        <span className="ml-2">
                                                <i class="fas fa-long-arrow-alt-right"></i>
                                            </span>
                                        </Link>
                                    </motion.div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item pro_two">
                        <div className="container">
                            <div className="row h-100 align-items-center justify-content-center">
                                <div className="col-md-10 text-center">
                                    <h1>Dream In Heels</h1>
                                    <p><i>Life</i> is short your <i>Heels</i> shouldn't be</p>
                                    <motion.div style={{ width: "200px", margin: "auto" }} whileHover={{
                                        scale: 1.05,
                                    }}
                                        whileTap={{ scale: 0.95 }}>
                                        <Link to="/products" className="btn btn-primary button rounded">Shop Now
                                        <span className="ml-2">
                                                <i class="fas fa-long-arrow-alt-right"></i>
                                            </span>
                                        </Link>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pro_three">
                <div><img className="img-fluid" src={AboutImg} alt="" /></div>
                <div className="px-5">
                    <p>
                        For each one of those shoe sweethearts out there, <i>Dream in heels</i> offer the one-stop goal to pick the correct match of footwear. To satisfy the affection for shoes, we offer heaps of alternatives from driving footwear marks, all under one rooftop. Gone are the days when you needed to go from store to store to locate the correct style and size for yourself. At <i>Dream in heels</i> , you can locate a vast accumulation of dashing footwear in all sizes and styles, all inside a couple of snaps.
                    </p>
                    <p>
                        <i>Dream in heels</i> is your place for athletic and easygoing shoes for the entire family from many name brands. You’ll discover styles for ladies, men and children from brands like Nike, Converse, Vans, Sperry, Madden Girl, Skechers, ASICS and then some! With stores in the U.S. furthermore, Canada and much more choice online at Famous.com and FamousFootwear.ca, <i>Dream in heels</i> is a main family footwear goal for the popular brands you know and love.
                    </p>
                    <p>
                        We're new stores bolstered by a scope of better quality items are gone for offering a better shopping knowledge than its clients.
                    </p>
                </div>
            </div>

            <div className="pro_four">
                <div className="container">
                    <h1 className="text-center">Our Top Rated Products</h1>
                    <div className="row">
                        {
                            products.slice(0, 3).map(product =>
                                <div className="col-md-4">
                                    <div className="card my-5">
                                        <div className="card-body border-0 rounded">
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
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>

            <div className="pro_five">
                <div className="testimonials-clean">
                    <div className="container">
                        <div className="intro">
                            <h1 className="text-center">Testimonials </h1>
                            <p className="text-center">Our customers love us! Read what they have to say below. </p>
                        </div>
                        <div className="row people">
                            <div className="col-md-6 col-lg-4 item">
                                <div className="box">
                                    <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est.</p>
                                </div>
                                <div className="author"><img className="rounded-circle" src={testimonial2} alt="" />
                                    <h5 className="name">Betty Johnson</h5>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 item">
                                <div className="box">
                                    <p className="description">Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, et interdum justo suscipit id.</p>
                                </div>
                                <div className="author"><img className="rounded-circle" src={testimonial1} alt="" />
                                    <h5 className="name">Carl Kent</h5>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 item">
                                <div className="box">
                                    <p className="description">Aliquam varius finibus est, et interdum justo suscipit. Vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu.</p>
                                </div>
                                <div className="author"><img className="rounded-circle" src={testimonial2} alt="" />
                                    <h5 className="name">Emily Clark</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div >
    )
}

export default Homepage
