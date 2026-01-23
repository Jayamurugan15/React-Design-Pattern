import React from "react";

const Card = ({ children }) => {
  return <div className="bg-white shadow">{children}</div>;
};

function CardHeader({ name, designation, openToWork, image }) {
  return (
    <>
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

      <div className="pt-16 pb-3 px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:gap-10">
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
        </div>
      </div>
    </>
  );
}

function CardBody({ children, className = "" }) {
  return <div className={`py-10 px-6 md:px-10 ${className}`}>{children}</div>;
}

function CardIdentity({ name, designation, className = "" }) {
  return (
    <div className={`space-y-1.5 ${className}`}>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{name}</h2>
      <p className="text-indigo-600 font-semibold text-lg">{designation}</p>
    </div>
  );
}

function CardQuickStats({ experience, projects, ctc, className = "" }) {
  return (
    <div className={`mt-7 grid grid-cols-3 gap-4 text-center ${className}`}>
      <div>
        <div className="text-2xl font-bold text-gray-900">{experience}+</div>
        <div className="text-xs text-gray-500 mt-1">Years Exp</div>
      </div>
      <div>
        <div className="text-2xl font-bold text-gray-900">{projects}</div>
        <div className="text-xs text-gray-500 mt-1">Projects</div>
      </div>
      <div>
        <div className="text-2xl font-bold text-gray-900">₹{ctc}L+</div>
        <div className="text-xs text-gray-500 mt-1">Highest CTC</div>
      </div>
    </div>
  );
}

function CardAbout({ about, className = "" }) {
  return (
    <div className={`mt-9 ${className}`}>
      <h3 className="text-lg font-semibold text-gray-900 mb-3">About</h3>
      <p className="text-gray-600 leading-relaxed line-clamp-4 md:line-clamp-none">
        {about}
      </p>
    </div>
  );
}

function CardMetadata({ location, role, linkedIn, className = "" }) {
  console.log(linkedIn,">>>>>>>>>>>>>>>>")
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm ${className}`}
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
          href={linkedIn?.startsWith("http") ? linkedIn : `https://${linkedIn}`}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-indigo-600 hover:underline mt-0.5 block truncate"
        >
          {linkedIn ? linkedIn.replace(/^https?:\/\//, "") : "—"}
        </a>
      </div>
    </div>
  );
}

function CardSkills({ skills = [], className = "" }) {
  if (!skills.length) return null;
  return (
    <div className={className}>
      <h3 className="text-lg font-semibold text-gray-900 mb-3">Top Skills</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, i) => (
          <span
            key={i}
            className="px-3 py-1 bg-gray-50 text-gray-700 rounded-full text-sm border border-gray-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function CardActions({ className = "" }) {
  return (
    <div
      className={`px-6 md:px-10 py-6 bg-gray-50 border-t border-gray-200 flex flex-col sm:flex-row gap-4 ${className}`}
    >
      <button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-xl transition-colors">
        View Full Profile
      </button>
      <button className="flex-1 border border-gray-300 hover:bg-gray-100 font-medium py-3 px-6 rounded-xl transition-colors">
        Save Candidate
      </button>
    </div>
  );
}

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Identity = CardIdentity;
Card.QuickStats = CardQuickStats;
Card.About = CardAbout;
Card.Metadata = CardMetadata;
Card.Skills = CardSkills;
Card.Actions = CardActions;

export default Card;
