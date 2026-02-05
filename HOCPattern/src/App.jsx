import { useState } from 'react'
import MovieWithHOC from './Movies/MovieWithHoc'
import UserProfile from './Dashboard/UserProfile'
import AdminCard from './Dashboard/AdmiCard'
import ReportCard from './Dashboard/ReportCard'
import { usersData } from './Dashboard/constant/UserData'
function App() {
  const [currentUser, setCurrentUser] = useState(usersData[0]);
  
  return (
    <div className="flex h-screen">
      {/* LEFT SIDE */}
      <div className="w-1/4 border-r bg-gray-50 p-4 space-y-2">
        <h3 className="mb-2 font-semibold text-gray-700">
          Users
        </h3>

        {usersData?.map((user) => (
          <button
            key={user.id}
            onClick={() => setCurrentUser(user)}
            className="w-full rounded-md bg-white px-3 py-2 text-left text-sm shadow-sm hover:bg-gray-100"
          >
            {user.name}
          </button>
        ))}
      </div>

      {/* RIGHT SIDE */}
      {/* <div className="flex-1 p-6 space-y-4">
        <UserProfile
          name={currentUser.name}
          role={currentUser.role}
          permissions={currentUser.permissions}
        />

        <AdminCard
          name={currentUser.name}
          role={currentUser.role}
        />

       
        <ProtectedReportCard
          permissions={currentUser.permissions}
        />
      </div> */}
    </div>

  )
}

export default App
