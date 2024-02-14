import React from 'react';
import Link from 'next/link';

const LoginPage = () => {
  return (
    <div className="flex h-screen bg-white dark:bg-gray-800">
      <div className="flex-1 flex justify-center items-center bg-cover" style={{ backgroundImage: `url('/static/images/google.png')`, width: '500px', height: '500px' }}>
      </div>
      <div className="w-full max-w-xs m-auto bg-white rounded p-5">
        <label className="text-gray-700 dark:text-white text-xl font-bold mb-2">ENLYT</label>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Login
            </button>
            <Link href="/signup">
              <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                Sign up
              </a>
            </Link>
          </div>
          <div className="mt-4">
            <Link href="/forgot-password">
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