import { useState } from 'react'
import { useTheme } from './hook/usetheme';


function App() {

  const {theme,toggleTheme} = useTheme();


  return (
    <div className={`w-full h-screen flex flex-col items-center justify-center ${theme ? "bg-white text-black" : "bg-black text-white"} `}>
      
      <h1 className='text-red-500 text-2xl'>Provider Pattern</h1>

      <button onClick={toggleTheme}>Change theme</button>

      <div>

      </div>
    </div>
  )
}

export default App
