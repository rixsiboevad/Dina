import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Section from './components/Section'
import Product from './components/Product'


const App = () => {
  return (
    <>
    <div className='align-content p-8 bg-[url(/font.png)] bg-cover'>
    <Header/>
    <Hero/>
    <Section/>
    <Product/>
    </div>
    
       </>
   
  )
}

export default App
