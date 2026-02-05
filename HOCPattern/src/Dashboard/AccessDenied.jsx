import React from 'react'

const AccessDenied = () => {
  return (
        <div className="mt-4 rounded-lg bg-red-50 p-4">
          <h3 className="text-sm font-semibold text-red-700">
            User Dashboard
          </h3>
          <p className="mt-2 text-sm text-red-600">
            You have limited access. Contact admin for more permissions.
          </p>
        </div>
      )
}

export default AccessDenied