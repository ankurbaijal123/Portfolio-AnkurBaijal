import React, { useEffect, useState } from "react";
import axios from "axios";

const Leetcode = () => {
  const [stats, setStats] = useState(null);
  const [githubStats, setGithubStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const leetcodeRes = await axios.get(
          "https://leetcode-stats-api.herokuapp.com/ankur_baijal"
        );
        setStats(leetcodeRes.data);

        const githubRes = await axios.get(
          "https://api.github.com/users/ankurbaijal123/events"
        );
        const contributions = githubRes.data.filter(
          (event) => event.type === "PushEvent"
        ).length;
        setGithubStats({
          contributions,
          repos: githubRes.data.reduce((acc, event) => {
            if (event.repo && !acc.includes(event.repo.name)) {
              acc.push(event.repo.name);
            }
            return acc;
          }, []).length,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="max-w-3xl mx-auto my-8 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden font-sans">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-extrabold text-gray-800 dark:text-gray-200">
          Ankur's Stats 📊
        </h2>
      </div>
      {loading ? (
        <div className="text-center py-4">
          <p className="text-gray-600 dark:text-gray-400">Loading...</p>
        </div>
      ) : error ? (
        <div className="text-center text-red-500">{error}</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:p-2">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 border-b border-gray-500 pb-2">
              LeetCode Stats
            </h3>
            <div className="p-4 bg-blue-100 dark:bg-gray-700 rounded-lg">
              <p className="text-lg font-semibold text-blue-800 dark:text-gray-300">
                🏅 Rating: <span className="font-bold">{stats?.rating || "1423"}</span>
              </p>
            </div>
            <div className="p-4 bg-green-100 dark:bg-gray-700 rounded-lg">
              <p className="text-lg font-semibold text-green-800 dark:text-gray-300">
                ✔️ Total Solved: <span className="font-bold">{stats?.totalSolved || 0}</span>
              </p>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="p-3 bg-emerald-100 dark:bg-gray-700 rounded-lg">
                <p className="font-medium text-emerald-800 dark:text-gray-500">Easy</p>
                <p className="text-xl font-bold text-black">{stats?.easySolved || 0}</p>
              </div>
              <div className="p-3 bg-amber-100 dark:bg-gray-700 rounded-lg">
                <p className="font-medium text-amber-800 dark:text-gray-300">Medium</p>
                <p className="text-xl font-bold text-black">{stats?.mediumSolved || 0}</p>
              </div>
              <div className="p-3 bg-rose-100 dark:bg-gray-700 rounded-lg">
                <p className="font-medium text-rose-800 dark:text-gray-300">Hard</p>
                <p className="text-xl font-bold text-black">{stats?.hardSolved || 0}</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 border-b border-gray-500 pb-2">
              GitHub Activity
            </h3>
            <div className="p-4 bg-purple-100 dark:bg-gray-700 rounded-lg">
              <p className="text-lg font-semibold text-purple-800 dark:text-gray-300">
                🚀 Recent Contributions: <span className="font-bold">{githubStats?.contributions || 0}</span>
              </p>
            </div>
            <div className="p-4 bg-indigo-100 dark:bg-gray-700 rounded-lg">
              <p className="text-lg font-semibold text-indigo-800 dark:text-gray-300">
                📦 Active Repositories: <span className="font-bold">{githubStats?.repos || 0}</span>
              </p>
            </div>
            <div className="text-center">
              <a
                href="https://github.com/ankurbaijal123"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
              >
                View GitHub Profile
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Leetcode;