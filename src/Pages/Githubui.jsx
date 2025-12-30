export default function Githubui({ userData }) {
  if (!userData) return null;

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      
      {/* MAIN FLEX CONTAINER */}
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-1">

        {/* IMAGE SECTION */}
        <a
          href={userData.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full md:w-1/2 flex justify-center md:justify-start z-10"
        >
          <img
            src={userData.avatar_url}
            alt={userData.login}
            className="
              w-64 h-64
              md:w-80 md:h-80
              lg:w-96 lg:h-96
              rounded-lg object-cover
            "
          />
        </a>

        {/* CONTENT SECTION */}
        <div className="
          w-full md:w-1/2
          max-w-md
          p-6
          backdrop-blur
          text-center md:text-left
        ">
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

          <div className="flex justify-center md:justify-start">
            <a
              href={userData.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 transition"
            >
              View Profile on GitHub
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
