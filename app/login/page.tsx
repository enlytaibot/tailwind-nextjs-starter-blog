import React from 'react';

const LoginPage = () => {
  return (
    <div className="flex min-h-screen bg-white dark:bg-gray-900">
      <div className="flex-1 flex justify-center items-center bg-cover" style={{ backgroundImage: 'url(/static/images/google.png)' }}>
        {/* Image container */}
      </div>
      <div className="flex-1 flex justify-center items-center">
        <div className="w-full max-w-md">
          <div className="text-3xl font-bold mb-4 text-center text-gray-900 dark:text-white">ENLYT</div>
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 dark:bg-gray-800">
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="username">
                Username
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:text-white" id="username" type="text" placeholder="Username" />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:text-white" id="password" type="password" placeholder="******************" />
              <p className="text-xs italic text-gray-600 dark:text-gray-400">Forget your password?</p>
            </div>
            <div className="flex items-center justify-between">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;