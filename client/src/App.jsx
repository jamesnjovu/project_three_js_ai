import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Canvas from './canvas'
import viteLogo from '/vite.svg'
import Customizer from './pages/Customizer'
import Home from './pages/Home'


function App() {
  return (
    <main className='app transition-all ease-in'>
      <Home />
      <Canvas />
      <Customizer />
    </main>
  )
}

export default App
