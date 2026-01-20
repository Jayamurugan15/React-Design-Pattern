import { useState } from 'react'
import './App.css'
import Contact from './Components/ControlledContactForm'
import UncontrolledWithRef from './Components/UncontrolledWithRef'
import UncontrolledWithoutRef from './Components/UncontrolledWithoutRef'

function App() {
  const [activeTab, setActiveTab] = useState('uncontrolled-no-ref')

  const tabs = [
    { id: 'controlled', label: 'Controlled Form', component: <Contact /> },
    { id: 'uncontrolled-ref', label: 'Uncontrolled + useRef', component: <UncontrolledWithRef /> },
    { id: 'uncontrolled-no-ref', label: 'Uncontrolled (No Ref)', component: <UncontrolledWithoutRef /> },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Form Handling Comparison
        </h1>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                px-5 py-3 font-medium rounded-t-lg transition-all duration-200
                ${
                  activeTab === tab.id
                    ? 'bg-white text-blue-600 border border-b-0 border-gray-200 shadow-sm -mb-px'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/60'
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div >
          {tabs.find((tab) => tab.id === activeTab)?.component}
        </div>
      </div>
    </div>
  )
}

export default App