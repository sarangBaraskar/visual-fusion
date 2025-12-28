import { motion } from "framer-motion";
import Githubui from "./Githubui";
import { useState } from "react";


const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
};

export default function Profile() {
  const [username, setUsername] = useState("sarangbaraskar"); // Input field ke liye
  const [userData, setUserData] = useState(null); // API se aaye data ke liye
  const [loading, setLoading] = useState(false); // Shuru mein loading false rahegi
  const [error, setError] = useState(null); /// errorr  ke liye 

  const handleSubmit = async (e) => {
    e.preventDefault(); // Page ka reload hone se roke diya 

    if (!username) {
      alert("Please Enter a Github Username");
      return;
    }

    setLoading(true);
    setError(null);
    setUserData(); // Purane data ko clear karein

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error('User not found or network error');
      }
      const data = await response.json();
      setUserData(data); // Sahi data ko state mein save karein
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <motion.section
        variants={fadeUp}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 py-24"
      >
        {/* 🔹 SEARCH FORM (Always Center) */}
        <div className="w-full flex justify-center mb-16">
          <form onSubmit={handleSubmit} className="w-full max-w-md">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <input
                type="text"
                className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                disabled
                placeholder="Sarang Baraskar"
                onChange={(e) => setUsername(e.target.value)}
              />
              <button
                type="submit"
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 shrink-0"
              >
                Search
              </button>
            </div>
          </form>
        </div>

        {/* 🔹 STATES */}
        {loading && <p className="text-center">Loading...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        {/* 🔹 GITHUB UI (CENTERED) */}
        {userData && <Githubui userData={userData} />}
      </motion.section>
    </>
  )
}
