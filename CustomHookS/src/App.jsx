import { useRef, useState } from 'react'
import useLocalStorage from './hooks/useLocalstorage'
import useClipboard from './hooks/useClipboard';
import useClickOutside from './hooks/useClickOutside';


function App() {
  const [ darkMode,setDarkMode ] = useLocalStorage("darkMode", false);

  const {copied,copyToClipboard,error,setError} = useClipboard();

  const [value,setValue] = useState("");
  const [open, setOpen] = useState(false)
  const modalRef = useRef();

  useClickOutside(modalRef,()=>setOpen(false))

  return (
     <div
      className={`min-h-screen p-6 transition-all duration-300  flex flex-col items-center justify-center ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <h1 className="text-2xl font-bold mb-10">Custom Hooks Demo</h1>

      <div className='flex flex-col items-center'>
        {/* Dark Mode */}
      <div className={` ${darkMode ? "bg-gray-600" : "bg-white"}  shadow-md rounded-xl p-4 mb-4 w-125`}>
        <h2 className="font-semibold mb-2">useLocalStorage</h2>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      {/* Clipboard */}
      <div className={`${darkMode ? "bg-gray-600" : "bg-white"} shadow-md rounded-xl p-4 mb-4 w-125`}>
        <h2 className="font-semibold mb-2">useClipboard</h2>

        <div className="flex flex-col gap-2">
          <div className='flex gap-4'>
            <input
            type="text"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              setError("")
            }}
            placeholder="Type something..."
            className="border border-gray-300 rounded-lg px-3 py-2 flex-1 text-black"
          />

          <button
            onClick={() => copyToClipboard(value)}
            className="bg-green-500 text-white px-4 py-2 rounded-lg cursor-pointer"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
          </div>
          <p className='text-red-500'>{error}</p>
        </div>
      </div>

      {/* Click Outside */}
      <div className={`${darkMode ? "bg-gray-600" : "bg-white"} shadow-md rounded-xl p-4 w-125`}>
        <h2 className="font-semibold mb-2">useClickOutside</h2>

        <button
          onClick={() => setOpen(true)}
          className="bg-purple-500 text-white px-4 py-2 rounded-lg"
        >
          Open Modal
        </button>

        {open && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/30">
            <div
              ref={modalRef}
              className={`${darkMode ? "bg-gray-600  text-white"  : "bg-white text-black"} p-6 rounded-xl shadow-lg w-64`}
            >
              <p className="mb-4">Click outside to close</p>
              <button
                onClick={() => setOpen(false)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
      </div>
    </div>
  )
}

export default App
