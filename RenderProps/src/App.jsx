import Toggle from "./components/Toggle"


function App() {
  

  return (
    <>
      <Toggle>
        {({isOpen,toggle})=>(
            <>
            <button onClick={toggle} className="bg-blue-400 p-2.5 rounded-lg">
              {isOpen ? "close" : "Open"}
            </button>

                  {isOpen && (
                <div className="mt-2 p-3 border rounded">
                  Hello 👋 I am visible
                </div>
              )}

              </>

          )
        }
      </Toggle>
    </>
  )
}

export default App
