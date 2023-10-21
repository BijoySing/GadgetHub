import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ThemeToggle from './components/ThemeToggle'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
         <ThemeToggle></ThemeToggle>

    <h1 className='text-8xl text-center'>
      gadgets Store
    </h1>
     
    </>
  )
}

export default App
