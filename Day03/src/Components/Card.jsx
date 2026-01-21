import React from "react";

const Card = () => {
  return (
    <div className="p-5">
      <div class="w-[80%] mx-auto bg-white  rounded-xl shadow-lg overflow-hidden border border-gray-200">
        {/* <!-- Header / Hero Section --> */}
        <div class="h-48 bg-linear-to-r from-blue-50 to-blue-500 relative">
          <div class="absolute -bottom-10 left-6">
            <div class="w-32 h-32 rounded-full border-4 border-white  overflow-hidden bg-white shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400"
                alt="Profile"
                class="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* <!-- Main Content --> */}
        <div class="pt-14 pb-8 px-8">
          <div className=" flex">
            <div>
              <div class="flex justify-between items-start">
                <div>
                  <h2 class="text-2xl font-bold text-gray-900 ">
                    Arjun Krishnamurthy
                  </h2>
                  <p class="text-indigo-600  font-medium">
                    Senior Full-Stack Developer • Tech Lead
                  </p>
                </div>

                <div class="flex items-center gap-2 bg-green-100  text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                  <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                  Available for new opportunities
                </div>
              </div>

              {/* <!-- Quick Stats --> */}
              <div class="mt-6 grid grid-cols-4 text-center">
                <div>
                  <div class="text-2xl font-bold text-gray-900 ">7+</div>
                  <div class="text-xs text-gray-500">Years Exp</div>
                </div>
                <div>
                  <div class="text-2xl font-bold text-gray-900 ">42</div>
                  <div class="text-xs text-gray-500">Projects</div>
                </div>
                <div>
                  <div class="text-2xl font-bold text-gray-900 ">98%</div>
                  <div class="text-xs text-gray-500">Client Sat.</div>
                </div>
                <div>
                  <div class="text-2xl font-bold text-gray-900">₹18L+</div>
                  <div class="text-xs text-gray-500">Highest CTC</div>
                </div>
              </div>

              {/* <!-- About / Bio --> */}
              <div class="mt-8">
                <h3 class="text-lg font-semibold text-gray-900  mb-3">About</h3>
                <p class="text-gray-600  leading-relaxed">
                  Passionate full-stack developer with deep expertise in modern
                  JavaScript ecosystems. Specialized in building scalable SaaS
                  products, developer tools & developer experience platforms.
                  Currently focused on React Server Components, tRPC,
                  TypeScript, Turbo repo, Next.js App Router & Drizzle ORM.
                </p>
              </div>
            </div>
            <div className="bg-red-300">
            {/* <!-- Key Information Grid --> */}
            <div class="mt-8 grid grid-cols-2 md:grid-cols-3 gap-6">
              <div>
                <p class="text-xs text-gray-500">Location</p>
                <p class="font-medium text-gray-900">Bengaluru, Karnataka</p>
              </div>
              <div>
                <p class="text-xs text-gray-500">Current Role</p>
                <p class="font-medium text-gray-900">Tech Lead @ ScaleEasy</p>
              </div>
              <div>
                <p class="text-xs text-gray-500">Open to</p>
                <p class="font-medium text-gray-900">
                  Remote • Hybrid • Contract
                </p>
              </div>
              <div>
                <p class="text-xs text-gray-500">Preferred Stack</p>
                <p class="font-medium text-gray-900">
                  TypeScript • Next.js • tRPC
                </p>
              </div>
              <div>
                <p class="text-xs text-gray-500">Availability</p>
                <p class="font-medium text-emerald-600 ">30 days notice</p>
              </div>
              <div>
                <p class="text-xs text-gray-500">LinkedIn</p>
                <p class="font-medium text-indigo-600 truncate">
                  linkedin.com/in/arjunkrish-dev
                </p>
              </div>
            </div>

            {/* <!-- Skills Tags --> */}
            <div class="mt-8">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Top Skills
              </h3>
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 bg-white text-gary-600 rounded-full text-sm border border-gray-300">
                  Next.js 14
                </span>
                <span class="px-3 py-1 bg-white text-gary-600 rounded-full text-sm border border-gray-300">
                  TypeScript
                </span>
                <span class="px-3 py-1 bg-white text-gary-600 rounded-full text-sm border border-gray-300">
                  tRPC
                </span>
                <span class="px-3 py-1 bg-white text-gary-600 rounded-full text-sm border border-gray-300">
                  Tailwind CSS
                </span>
                <span class="px-3 py-1 bg-white text-gary-600 rounded-full text-sm border border-gray-300">
                  Prisma • Drizzle
                </span>
                <span class="px-3 py-1 bg-white text-gary-600 rounded-full text-sm border border-gray-300">
                  React Server Components
                </span>
                <span class="px-3 py-1 bg-white text-gary-600 rounded-full text-sm border border-gray-300">
                  Turborepo
                </span>
              </div>
            </div>
          </div>
          </div>
          
        </div>

        {/* <!-- Footer / Actions --> */}
        <div class="px-8 py-5 bg-gray-50  border-t border-gray-100 dark:border-gray-700 flex gap-4">
          <button class="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition-colors">
            View Full Profile
          </button>
          <button class="flex-1 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 font-medium py-3 px-6 rounded-lg transition-colors">
            Save Candidate
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
