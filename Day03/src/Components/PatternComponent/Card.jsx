import React from 'react'

const Card = ({children}) => {
  return (
    <div className='bg-white shadow'>{children}</div>
  )
}

function CardHeader({name,designation,openToWork}) {
    return (
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="space-y-2">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                    {name}
                  </h2>
                  <p className="text-indigo-600 font-semibold text-lg">
                    {designation}
                  </p>
                </div>

                {openToWork && (
                  <div className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-1.5 rounded-full text-sm font-medium border border-green-200 self-start sm:self-center">
                    <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
                    Open to Work
                  </div>
                )}
              </div>
    )
}

export default Card