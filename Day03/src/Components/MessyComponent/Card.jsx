import React from "react";

const Card = ({
  name,
  image,
  designation,
  experience,
  projects,
  ctc,
  about,
  location,
  role,
  LinkedIn,
  skills = [],
  openToWork,
}) => {
  return (
    <div className="p-5">
      <div className="w-[90%] max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
        {/* Header / Cover */}
        <div className="h-48 bg-gradient-to-r from-blue-100 to-blue-600 relative">
          <div className="absolute -bottom-12 left-6 md:left-8">
            <div className="w-32 h-32 md:w-36 md:h-36 rounded-full border-4 border-white overflow-hidden bg-white shadow-2xl">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="pt-16 pb-10 px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:gap-10">
            {/* Left column - Main info */}
            <div className="flex-1">
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
                  <div className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-1 rounded-full text-sm font-medium border border-green-200 self-start sm:self-center">
                    <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
                    Open to Work
                  </div>
                )}
              </div>

              {/* Quick stats */}
              <div className="mt-7 grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-gray-900">
                    {experience}+
                  </div>
                  <div className="text-xs text-gray-500 mt-1">Years Exp</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">
                    {projects}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">Projects</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">
                    ₹{ctc}L+
                  </div>
                  <div className="text-xs text-gray-500 mt-1">Highest CTC</div>
                </div>
              </div>

              {/* About */}
              <div className="mt-9">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  About
                </h3>
                <p className="text-gray-600 leading-relaxed line-clamp-4 md:line-clamp-none">
                  {about}
                </p>
              </div>
            </div>

            {/* Right column - Metadata + Skills */}
            <div className="mt-8  md:mt-20 md:w-80 lg:w-96 flex flex-col gap-8">
              {/* Key details - cleaner layout */}
              <div
      className={`grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm `}
    >
      <div>
        <p className="text-xs text-gray-500 uppercase tracking-wide">
          Location
        </p>
        <p className="font-medium text-gray-900 mt-0.5">{location}</p>
      </div>
      <div>
        <p className="text-xs text-gray-500 uppercase tracking-wide">
          Current Role
        </p>
        <p className="font-medium text-gray-900 mt-0.5">{role}</p>
      </div>
      <div>
        <p className="text-xs text-gray-500 uppercase tracking-wide">
          LinkedIn
        </p>
        <a
          href={LinkedIn?.startsWith("http") ? LinkedIn : `https://${LinkedIn}`}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-indigo-600 hover:underline mt-0.5 block truncate"
        >
          {LinkedIn ? LinkedIn.replace(/^https?:\/\//, "") : "—"}
        </a>
      </div>
    </div>

              {/* Skills */}
              {skills.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Top Skills
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-50 text-gray-700 rounded-full text-sm border border-gray-200 hover:bg-gray-100 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="px-6 md:px-10 py-6 bg-gray-50 border-t border-gray-200 flex flex-col sm:flex-row gap-4">
          <button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-xl transition-colors shadow-sm">
            View Full Profile
          </button>
          <button className="flex-1 border border-gray-300 hover:bg-gray-100 hover:border-gray-400 font-medium py-3 px-6 rounded-xl transition-colors">
            Save Candidate
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;