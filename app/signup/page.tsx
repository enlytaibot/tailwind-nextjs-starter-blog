import React from 'react';

const SignupPage = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-white dark:bg-gray-800">
      <div className="md:w-1/2">
        <img src="/static/images/google.png" alt="Computer" width="500" height="500" />
      </div>
      <div className="md:w-1/2 flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-2 dark:text-white">ENLYT</h2>
        <form className="w-full max-w-md">
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:text-white" id="username" type="text" placeholder="Username" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:text-white" id="email" type="email" placeholder="Email" />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:text-white" id="password" type="password" placeholder="******************" />
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;