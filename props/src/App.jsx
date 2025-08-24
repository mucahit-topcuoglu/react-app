import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './product.jsx'
import Container from './Container.jsx'
function App() {

  return (
    <>
    
    <Product productName="Ayakkabı" productPrice="100 TL" />

    <Container>
      <Product productName="Pantolon" productPrice="400 TL" />
    </Container>
    </>
  )
}

export default App
