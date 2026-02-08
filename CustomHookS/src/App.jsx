import { useState } from 'react'
import useLocalStorage from './hooks/useLocalstorage'
import useClipboard from './hooks/useClipboard';


function App() {
  const [ darkMode,setDarkMode ] = useLocalStorage("darkMode", false);

  const [clipboard,copyToClipboard] = useClipboard();


  return (
    <>
      <button onClick={()=> setDarkMode(!darkMode)}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <div className={`${darkMode ? "text-white bg-black" : "text-black bg-white"}`}>Custom Hook Pattern</div>

      <input type="text" value={"Hello Tapas"} className='border border-gray-300 rounded-lg px-4 py-1.5 text-center'/>
      <button onClick={()=>copyToClipboard(value)} className='bg-blue-400 p-2 text-white rounded-lg'>
        {clipboard ? "Copied" : "Copy"}
      </button>
    </>
  )
}

export default App
