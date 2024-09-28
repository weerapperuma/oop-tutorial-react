import { useState } from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import HeaderComponent from './components/headerComponent'
import { FooterComponent } from './components/FooterComponent'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <HeaderComponent/>
        <FooterComponent/>
      </BrowserRouter>
    </>
  )
}

export default App
