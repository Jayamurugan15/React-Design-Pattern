import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Contact from './Components/ControlledContactForm'
import UncontrolledWithRef from './Components/UncontrolledWithRef'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Contact/> */}
      <UncontrolledWithRef/>
    </>
  )
}

export default App
