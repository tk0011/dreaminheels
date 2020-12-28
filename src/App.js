import React, {useState, useEffect} from 'react'
import {commerce} from './lib/commerce'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Products from './Components/Products/Products'

const App = () => {
 
  const [products,  setProducts] = useState([]);

  const fetchProducts = async () => {
      const {data} = await commerce.products.list() ;

      setProducts(data);
  }

  useEffect(() => {
      fetchProducts();
  }, [])


  return (
    <>
        <Header />
        <main>
              <Products products= {products} />
        </main>
        <Footer/>
    </>
  )
}

export default App

