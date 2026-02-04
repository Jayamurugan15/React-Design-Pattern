import Toggle from "./components/Toggle";

function App() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100">
      <div className="flex flex-col items-center gap-4 shadow-md w-100 p-5 rounded-lg bg-white">
        <h2 className="text-xl font-semibold text-blue-400">
          Render Props Pattern
        </h2>
        <Toggle>
          {({ isOpen, toggle }) => (
            <label className="flex flex-col items-center gap-4 cursor-pointer">
              <input
                type="checkbox"
                checked={isOpen}
                onChange={toggle}
                className="sr-only"
              />

              <div
                className={`relative w-11 h-6 rounded-full transition-colors
                ${isOpen ? "bg-green-500" : "bg-gray-300"}`}
              >
                <span
                  className={`absolute top-0.5 left-0.5 h-5 w-5 bg-white rounded-full
                  transition-transform
                  ${isOpen ? "translate-x-5" : ""}`}
                />
              </div>

              <span className="ml-3 text-sm font-medium">
                {isOpen && (
                  <div className="text-base border border-gray-400 rounded-lg p-3">
                    <p>Hello I'm Visible</p>
                  </div>
                )}
              </span>
            </label>
          )}
        </Toggle>
      </div>
    </div>
  );
}

export default App;
