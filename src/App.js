import React, { useState, useEffect } from 'react'
import { commerce } from './lib/commerce'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Products from './Components/Products/Products'

const App = () => {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({})

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  }

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  }

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, [])

  const handleCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity)
    setCart(item.cart)
  }


  return (
    <>
      <Header totalItems={cart.total_items} />
      <main>
        <Products products={products} addToCart={handleCart} />
      </main>
      <Footer />
    </>
  )
}

export default App

