export default function Githubui({ userData }) {
  if (!userData) return null;

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      
      {/* MAIN FLEX CONTAINER */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-4">

        {/* IMAGE SECTION (LEFT) */}
        <a
          href={userData.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full md:w-1/2 flex z-1 ml-16 justify-center md:justify-start"
        >
          <img
            src={userData.avatar_url}
            alt={userData.login}
            className="w-100 h-100  rounded-lg object-cover"
          />
        </a>

        {/* BACKDROP / CONTENT SECTION (RIGHT) */}
        <div className="w-full md:w-1/2 max-w-md p-6 backdrop-blur mt-15 text-left">
          
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            <h5 className="text-3xl font-semibold mb-4">
              {userData.name || userData.login}
            </h5>
          </a>

          <p className="text-slate-400 mb-6 leading-relaxed">
            {userData.bio || "No bio available."}
          </p>

          <p className="text-slate-400 mb-8 leading-relaxed">
            Public Repos: {userData.public_repos}
          </p>

          {/* BUTTON CENTER */}
          <div className="flex justify-center">
            <a
              href={userData.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              View Profile on GitHub
              <svg
                className="w-3.5 h-3.5 ms-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
