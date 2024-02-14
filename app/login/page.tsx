import React from 'react';
import Link from 'next/link';

const LoginPage = () => {
  return (
    <div className="flex min-h-screen bg-white dark:bg-gray-900">
      <div className="flex-1 flex justify-center items-center">
        <img src="/static/images/google.png" alt="Computer" width="500" height="500" />
      </div>
      <div className="flex-1 flex justify-center items-center">
        <form className="w-full max-w-lg">
          <h2 className="text-2xl font-bold mb-6 dark:text-white">ENLYT</h2>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-800 dark:text-white" id="email" type="email" placeholder="Email" />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-800 dark:text-white" id="password" type="password" placeholder="******************" />
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Login
            </button>
            <Link href="/app/signup/page.tsx">
              <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                Sign up
              </a>
            </Link>
          </div>
          <div className="mt-4">
            <Link href="#">
              <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                Forgot Password?
              </a>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;