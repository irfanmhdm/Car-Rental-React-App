import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddCars from './components/AddCars'
import View from './components/View'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AddCars/>
      <BrowserRouter>
      <Routes>
        <Route path = "/view" element={<View />}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
