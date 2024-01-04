import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from "./components/home/Home"
import Product from "./components/product/Product"
import Sepatu from "./components/sepatu/Sepatu"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="w-full overflow-x-hidden">
      <Home />
      <Product />
      <Sepatu />
    </div>
    </>
  )
}

export default App
