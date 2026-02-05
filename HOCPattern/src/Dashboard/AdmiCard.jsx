import React from "react";

const AdminCard = ({ name, role }) => {
  const isAdmin = role === "Admin";

  return (
    <div className="max-w-sm rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-800">
        Welcome, {name}
      </h2>

      <p className="mt-1 text-sm text-gray-500">
        Role: <span className="font-medium">{role}</span>
      </p>

      {/* Conditional UI */}
      {isAdmin && (
        <div className="mt-4 rounded-lg bg-green-50 p-4">
          <h3 className="text-sm font-semibold text-green-700">
            Admin Panel
          </h3>
          <ul className="mt-2 space-y-1 text-sm text-green-600">
            <li>• Manage Users</li>
            <li>• View Reports</li>
            <li>• System Settings</li>
          </ul>
        </div>
      ) }
    </div>
  );
};

export default AdminCard;
