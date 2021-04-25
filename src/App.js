import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce';
import { trackPromise, usePromiseTracker } from 'react-promise-tracker';
import { Switch, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion'
import Loader from 'react-promise-loader';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Products from './Components/Products/Products';
import ProductDetail from './Components/ProductDetail/ProductDetail'
import Homepage from './Components/Homepage/Homepage';
import Cart from './Components/Cart/Cart';
import ProtectedRoute from './Components/ProtectedRoutes/ProtectedRoute';
import Notfound from './Components/Notfound/Notfound';

const App = () => {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState()

  const fetchProducts = async () => {
    const { data } = await trackPromise(commerce.products.list());
    setProducts(data);
  }

  const fetchCart = async () => {
    setCart(await trackPromise(commerce.cart.retrieve()));
  }

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, [])

  const addItemToCart = (productId, variantInfo) => {
    if (variantInfo) {
      commerce.cart.add(productId, 1, variantInfo)
        .then(res => {
          setCart(res.cart)
        })
    } else {
      window.alert('Please Select a Size')
    }
  }


  const deleteItemFromCart = async (productId, quantity) => {
    const item = await commerce.cart.remove(productId, quantity)
    setCart(item.cart)
  }

  const updateItemCart = async (lineItemId, quantity) => {
    const item = await commerce.cart.update(lineItemId, { quantity })
    setCart(item.cart)
  }


  return (
    <>
      <Header cart={cart} deleteItem={deleteItemFromCart} updateCart={updateItemCart} />
      <main>
        <AnimatePresence exitBeforeEnter>
          <Switch>
            <Route exact path="/">
              <Homepage products={products} />
            </Route>
            <Route exact path="/products">
              <Loader promiseTracker={usePromiseTracker} color={'#333'} background={"#fff"} />
              <Products products={products} addToCart={addItemToCart} />
            </Route>
            <Route exact path="/product/:_id">
              <ProductDetail addToCart={addItemToCart} deleteItem={deleteItemFromCart} updateCart={updateItemCart} cart={cart} />
            </Route>
            <ProtectedRoute exact path="/cart" render={() => <Cart cart={cart} deleteItem={deleteItemFromCart} updateCart={updateItemCart} />} />
            <Route>
              <Notfound />
            </Route>
          </Switch>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  )
}

export default App

