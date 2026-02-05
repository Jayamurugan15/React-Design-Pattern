import React from "react";

const ReportCard = ({ permissions = [] }) => {
  if (!permissions.includes("REPORT")) return null;

  return (
    <div className="max-w-sm rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      {permissions.includes("report") ? (
        <>
          <h2 className="text-lg font-semibold text-gray-800">Reports</h2>

          <p className="mt-1 text-sm text-gray-500">
            You have access to view reports
          </p>

          <div className="mt-4 rounded-lg bg-blue-50 p-3 text-sm text-blue-700">
            📊 View Monthly Report
          </div>
        </>
      ): (
        <div className="mt-4 rounded-lg bg-red-50 p-3 text-sm text-red-700">
            Access Denied
          </div>
      )}
    </div>
  );
};

export default ReportCard;
