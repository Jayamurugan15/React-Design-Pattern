import React from "react";

const UserProfile = ({ name, role, permissions = [] }) => {
  return (
    <div className="max-w-sm rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      {/* Name */}
      <h2 className="text-xl font-semibold text-gray-800">
        {name}
      </h2>

      {/* Role */}
      <p className="mt-1 text-sm text-gray-500">
        Role: <span className="font-medium text-gray-700">{role}</span>
      </p>

      {/* Permissions */}
      <div className="mt-2">
        <p className="mb-2 text-sm font-medium text-gray-600">
          Permissions
        </p>
        <div className="flex flex-wrap gap-2">
          {permissions.map((permission) => (
            <span
              key={permission}
              className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700"
            >
              {permission}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
